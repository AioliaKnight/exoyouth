import { defineConfig, loadEnv } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import tsconfigPaths from 'vite-tsconfig-paths';
import compression from 'vite-plugin-compression';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const isProd = mode === 'production';

  return {
    base: '/',
    
    plugins: [
      react(),
      tsconfigPaths(),
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
        manifest: {
          name: 'ExoYouth',
          short_name: 'ExoYouth',
          description: '專業級外泌體保養品',
          theme_color: '#ffffff',
          background_color: '#ffffff',
          display: 'standalone',
          icons: [
            {
              src: '/pwa-192x192.png',
              sizes: '192x192',
              type: 'image/png',
              purpose: 'any maskable'
            },
            {
              src: '/pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any maskable'
            }
          ]
        },
        workbox: {
          cleanupOutdatedCaches: true,
          skipWaiting: true,
          clientsClaim: true,
          runtimeCaching: [
            {
              urlPattern: /^https:\/\/api\./i,
              handler: 'NetworkFirst',
              options: {
                cacheName: 'api-cache',
                expiration: {
                  maxEntries: 100,
                  maxAgeSeconds: 60 * 60 * 24
                },
                cacheableResponse: {
                  statuses: [0, 200]
                }
              }
            }
          ]
        }
      }),
      ...(isProd ? [
        compression({
          algorithm: 'gzip',
          ext: '.gz',
          threshold: 10240
        }),
        compression({
          algorithm: 'brotliCompress',
          ext: '.br',
          threshold: 10240
        })
      ] : [])
    ],

    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
        '@components': resolve(__dirname, './src/components'),
        '@hooks': resolve(__dirname, './src/hooks'),
        '@pages': resolve(__dirname, './src/pages'),
        '@stores': resolve(__dirname, './src/stores'),
        '@utils': resolve(__dirname, './src/utils'),
        '@types': resolve(__dirname, './src/types'),
        '@assets': resolve(__dirname, './src/assets'),
        '@styles': resolve(__dirname, './src/styles')
      }
    },

    css: {
      modules: {
        localsConvention: 'camelCaseOnly',
        generateScopedName: isProd ? '[hash:base64:8]' : '[name]__[local]'
      },
      devSourcemap: true
    },

    build: {
      target: ['esnext', 'chrome89', 'edge89', 'firefox89', 'safari15'],
      minify: 'esbuild',
      cssMinify: true,
      cssCodeSplit: true,
      sourcemap: !isProd,
      reportCompressedSize: false,
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          manualChunks: {
            'react-core': ['react', 'react-dom'],
            'react-router': ['react-router-dom'],
            'react-hooks': [
              '@tanstack/react-query',
              'react-hook-form',
              'react-intersection-observer'
            ],
            'ui-core': [
              'lucide-react',
              'framer-motion'
            ],
            'ui-components': [
              '@radix-ui/react-dialog',
              '@radix-ui/react-toast',
              '@radix-ui/react-tooltip'
            ],
            'utils': [
              'zustand',
              'clsx',
              'tailwind-merge',
              'date-fns',
              'lodash-es',
              'zod'
            ]
          },
          entryFileNames: 'assets/[name].[hash].js',
          chunkFileNames: 'assets/[name].[hash].js',
          assetFileNames: 'assets/[name].[hash].[ext]'
        }
      }
    },

    optimizeDeps: {
      include: [
        'react',
        'react-dom',
        'react-router-dom',
        'lucide-react',
        '@radix-ui/react-toast',
        'zustand',
        'clsx',
        'tailwind-merge',
        'framer-motion'
      ]
    },

    server: {
      port: 3000,
      open: true,
      cors: true,
      proxy: env.VITE_API_URL ? {
        '/api': {
          target: env.VITE_API_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
          secure: false,
          ws: true
        }
      } : undefined
    },

    preview: {
      port: 5000,
      open: true,
      cors: true
    }
  };
});