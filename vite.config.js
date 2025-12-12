import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// Custom plugin to inject CSS preload
function injectCSSPreload() {
  return {
    name: 'inject-css-preload',
    transformIndexHtml(html, ctx) {
      // Only in build mode
      if (!ctx.bundle) return html

      // Find the CSS file in the bundle
      const cssFile = Object.keys(ctx.bundle).find(file => file.endsWith('.css'))

      if (cssFile) {
        // Inject preload link before closing head tag
        const preloadLink = `<link rel="preload" href="/${cssFile}" as="style" fetchpriority="high">`
        return html.replace('</head>', `${preloadLink}\n  </head>`)
      }

      return html
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    injectCSSPreload(),
    // Optimize all images (JPEG, PNG) and generate WebP versions
    ViteImageOptimizer({
      test: /\.(jpe?g|png)$/i,
      includePublic: true,
      logStats: true,
      jpeg: {
        quality: 80,
        progressive: true
      },
      jpg: {
        quality: 80,
        progressive: true
      },
      png: {
        quality: 80,
        compressionLevel: 9
      },
      webp: {
        quality: 80,
        lossless: false
      }
    })
  ],
  build: {
    // Enable module preload for faster parallel loading
    modulePreload: {
      polyfill: false, // Disable polyfill to reduce bundle size
      resolveDependencies: (filename, deps) => {
        return deps
      }
    },
    rollupOptions: {
      output: {
        // Separate vendor chunk for better caching
        manualChunks: {
          'vendor': ['vue', 'vue-router']
        },
        // Optimize chunk naming
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      },
      // Improve tree-shaking
      treeshake: {
        moduleSideEffects: false,
        propertyReadSideEffects: false,
        tryCatchDeoptimization: false
      }
    },
    // Enable terser minification with aggressive settings
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
        passes: 3, // More aggressive compression
        unsafe: true,
        unsafe_comps: true,
        unsafe_math: true,
        unsafe_proto: true
      },
      mangle: {
        safari10: true
      },
      format: {
        comments: false // Remove all comments
      }
    },
    // Optimize CSS - disable code splitting to create single CSS file
    cssCodeSplit: false,
    cssMinify: true,
    // Reduce chunk size warning
    chunkSizeWarningLimit: 500,
    // Modern build target for smaller bundles
    target: 'es2020',
    reportCompressedSize: false,
    // Source maps off for production
    sourcemap: false
  }
})
