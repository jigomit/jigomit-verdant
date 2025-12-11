import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
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
      polyfill: true,
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
      }
    },
    // Enable terser minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log'],
        passes: 2
      },
      mangle: {
        safari10: true
      }
    },
    // Optimize CSS - disable code splitting to create single CSS file
    cssCodeSplit: false,
    cssMinify: true,
    // Reduce chunk size warning
    chunkSizeWarningLimit: 1000,
    // Improve build performance
    target: 'es2015',
    reportCompressedSize: false
  }
})
