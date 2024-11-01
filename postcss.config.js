import cssnano from 'cssnano';
import postcssPresetEnv from 'postcss-preset-env';

export default {
  plugins: {
    'tailwindcss/nesting': {},
    'tailwindcss': {},
    'postcss-preset-env': {
      stage: 1,
      features: {
        'nesting-rules': true,
        'custom-properties': true,
        'custom-media-queries': true,
      }
    },
    'autoprefixer': {},
    ...(process.env.NODE_ENV === 'production' ? {
      'cssnano': {
        preset: ['default', {
          discardComments: { removeAll: true },
          normalizeWhitespace: true,
          colormin: true,
        }]
      }
    } : {})
  }
};