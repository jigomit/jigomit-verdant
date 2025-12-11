# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Vue 3 + Vite environmental advocacy website for "Verdant Future," a fictional organization focused on tree planting, climate action, plastic reduction, and wildlife protection. The site features a modern, design-forward approach with ambient visual effects and dynamic video content.

## Development Commands

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Generate responsive WebP images from JPEGs in /public/images
npm run generate-webp
```

## Build Configuration

The project uses Vite with specific optimizations configured in `vite.config.js`:

### Image Optimization
- Automatic image optimization via `vite-plugin-image-optimizer`
- Converts JPEG/PNG to WebP format automatically
- Quality set to 80% with progressive JPEG encoding
- Processes images in both `/src` and `/public` directories

### Production Build Optimizations
- **Code splitting**: Vendor chunk separated for Vue and Vue Router
- **Minification**: Terser with `drop_console` and `drop_debugger` enabled
- **CSS**: Automatic code splitting and minification
- **Module preload**: Enabled for faster parallel resource loading
- **Chunk naming**: Hash-based filenames for optimal caching

## Architecture

### Routing Strategy
- **Vue Router** with HTML5 history mode (`createWebHistory`)
- All routes use **lazy loading** via dynamic imports (`() => import('../pages/...')`)
- Global scroll behavior resets to top on navigation (`scrollBehavior() { return { top: 0 } }`)
- Routes defined in `src/router/index.js`
- Page transitions handled via Vue's `<transition>` component with fade animation

### Navigation Data Source
Navigation links are centralized in `src/data/navLinks.js` with two exports:
- `primaryNavLinks` - Used by the main navbar
- `resourceLinks` - Used by the footer

**Important**: When adding new pages, update both `src/router/index.js` AND `src/data/navLinks.js` to maintain consistency.

### App Shell Pattern
The application uses a persistent shell structure defined in `src/App.vue`:
- **Ambient overlays** (`.ambient-one`, `.ambient-two`) - Decorative background elements present on all pages
- **Navbar** - Sticky header with mobile hamburger menu
- **RouterView** - Page content injection point
- **Footer** - Global footer component

### Component Organization
- `src/components/` - Shared components (Navbar, Footer, HeroSection, VideoShowcase, CalloutSection, ResponsiveImage)
- `src/pages/` - Page-level components mapped to routes
- `src/data/` - Centralized data exports (navigation links, media paths)
- `src/composables/` - Reusable composition functions (usePageMeta)

### Styling Approach
- Global styles in `src/style.css` with CSS custom properties
- Design system uses **Space Grotesk** font from Google Fonts
- Color palette: Mint greens, gold, sky blue (defined in `:root` CSS variables)
- Responsive spacing system via `--space` CSS variable that scales with breakpoints:
  - `< 768px`: 20px
  - `768px - 1023px`: 50px
  - `1024px - 1365px`: 80px
  - `>= 1366px`: 100px
- No component-scoped styles - all styles are global

### Hero Section Pattern
The hero section (`src/components/HeroSection.vue`) uses a full-viewport video/image with overlay content:
- Video on desktop (lazy loaded via IntersectionObserver)
- Static responsive image on mobile for bandwidth savings
- Seamless video loop logic that restarts 0.3s before end to avoid visual gaps
- Play/pause control button
- Uses `ResponsiveImage` component for mobile fallback
- Video sources use `data-src` attributes and are loaded on intersection

### Responsive Image Pattern
The `ResponsiveImage` component (`src/components/ResponsiveImage.vue`) provides:
- WebP images with JPEG fallback via `<picture>` element
- Responsive `srcset` with multiple widths (320w, 480w, 768w, 1024w, 1600w)
- Configurable `sizes`, `loading`, and `fetchpriority` attributes
- Expects base filename without extension (e.g., `src="/images/hero-conservation"`)
- Generated images follow pattern: `{filename}-{width}w.webp`

### Video Handling Pattern (VideoShowcase)
See `src/components/VideoShowcase.vue` for reference implementation:
- Individual play/pause state per video
- Custom loop logic to avoid visual gaps (restarts video 0.3s before end)
- Loading state with custom spinner
- Proper cleanup in `onUnmounted` to prevent memory leaks
- Videos use `preload="metadata"` or `preload="none"` for lazy loading

**Video Optimization Strategy:**
- Keep showcase videos under 3-5MB each
- Provide WebM format alongside MP4 for better compression
- Consider external hosting (Cloudinary, Bunny CDN) for production
- VideoShowcase component can load video sources dynamically on user interaction

### Page Content Pattern
Pages like `src/pages/Home.vue` define their content as **data arrays** at the top of `<script setup>`:
- `focusHighlights`, `impactStats`, `upcomingMoments`, etc.
- This pattern makes content easy to update without touching template markup
- Use `v-for` to render these data structures in the template

### Media Library Pattern
All image and video paths are centralized in `src/data/mediaLibrary.js`:
- Export a single `mediaLibrary` object with semantic keys (e.g., `heroTreePlanting`, `homeFocusClimate`)
- All paths reference `/public` directory assets (`/images/...`, `/media/...`)
- Pages import and reference specific keys rather than hardcoding paths
- This makes asset updates and refactoring easier

### SEO & Meta Management
The `usePageMeta` composable (`src/composables/usePageMeta.js`) handles dynamic meta tags:
- Call `usePageMeta()` at the top of each page component with title, description, image, keywords, and canonical URL
- Automatically updates `<title>`, Open Graph, Twitter Card, and canonical tags
- Supports reactive sources (refs, computed, functions) via `watchEffect`
- Base URL configured as `https://verdantfuture.org`

### Dynamic Content (Blog Posts)
`src/pages/BlogPost.vue` demonstrates dynamic routing and content:
- Route defined as `/blogs/:slug` in router
- Blog metadata stored in `blogMetadata` object keyed by slug
- Full post content stored inline within the component (in a real app, would come from CMS/API)
- Each post includes SEO metadata, structured content sections, and keywords
- Uses `usePageMeta` to dynamically update meta tags based on current slug
- Posts linked from `src/pages/Insights.vue` blog listing page

### Structured Data (Schema.org)
`src/App.vue` injects JSON-LD structured data on mount:
- Organization schema with logo and social profiles
- WebSite schema with search action
- Script injected into `<head>` with ID `vf-structured-data`
- Only runs client-side (checks `typeof document`)

## Key Technical Details

### Navbar Responsive Behavior
- Mobile: Hamburger menu toggle at `< 1024px`
- Desktop: Horizontal navigation at `>= 1024px`
- Menu auto-closes on window resize past 1024px breakpoint
- Active route highlighting via `route.path === link.to`

### Asset References
- Images expected in `/public/images/` directory
- Videos expected in `/public/media/` directory
- SVG assets in `src/assets/` are imported as modules

### Email Integration
Multiple CTAs link to `mailto:` addresses:
- `connect@verdantfuture.org` - Partnership inquiries
- `research@verdantfuture.org` - Research briefing requests

## Performance Strategy

The site implements several performance optimizations in `index.html`:

### Critical Rendering Path
- **Inline critical CSS** in `<head>` for above-the-fold content
- Covers body styles, site header, hero video, and basic layout
- Prevents flash of unstyled content (FOUC)

### Resource Loading Optimization
- **DNS prefetch** for Google Fonts domains
- **Preconnect** to fonts.googleapis.com and fonts.gstatic.com
- **Preload critical resources**:
  - Hero image (`/images/hero-conservation-1024w.webp` and `-1600w.webp`) with `fetchpriority="high"`
  - Space Grotesk font file (WOFF2)
- **Async font loading** with print media trick (`media="print" onload="this.media='all'"`)
- **Inline critical CSS** in `<head>` covering hero section for instant rendering

### SEO Foundation
- Base meta tags in HTML for initial page load
- Dynamic meta tags updated via `usePageMeta` composable on route changes
- Structured data (JSON-LD) injected client-side in `App.vue`

### Netlify Deployment Configuration
The `netlify.toml` file configures:
- Build command: `npm run build` with Node 20
- Optimizations: CSS/JS bundling and minification, image compression
- Security headers: X-Frame-Options, X-XSS-Protection, CSP
- Cache headers:
  - Static assets (`/assets/*`): 1 year immutable
  - Images and videos: 1 year immutable
  - HTML files: No cache, always fresh
- SPA redirect: All routes redirect to `/index.html` for client-side routing

## Component Patterns

### ResponsiveImage Component
Provides optimized responsive images with WebP format:
- Props: `src` (base path without extension), `alt`, `sizes`, `loading`, `fetchpriority`, `imgClass`, `widths`
- Automatically generates WebP `srcset` with multiple widths
- Falls back to JPEG for older browsers
- Example: `<ResponsiveImage src="/images/hero" alt="..." />`

### VideoShowcase Component
Displays a grid of video cards with play/pause controls:
- Individual play/pause state per video
- Responsive grid (1 column mobile → 2 tablet → 4 desktop)
- Custom video controls overlaid on video
- Props: `videos` array with `title`, `description`, `src`, `poster`

### HeroSection Component
Full-viewport video/image hero with overlay content:
- Responsive: Video on desktop, image on mobile
- Lazy loading via IntersectionObserver
- Seamless video loop with no gap
- Play/pause control button
- Metrics display with hero content
- CTA buttons for primary actions

### CalloutSection Component
Reusable content section wrapper (if present):
- Used for highlighting key information
- Consistent styling across pages

## Image Generation Workflow

The `scripts/generate-webp.js` script:
- Processes all JPEG files in `/public/images/`
- Generates WebP versions at multiple widths (320, 480, 768, 1024, 1600)
- Creates full-size WebP as fallback
- Reports size savings (typically 20-30% reduction)
- Run with `npm run generate-webp` after adding new images

**Workflow**:
1. Add JPEG images to `/public/images/`
2. Run `npm run generate-webp`
3. Use `ResponsiveImage` component to reference them (without extension)
