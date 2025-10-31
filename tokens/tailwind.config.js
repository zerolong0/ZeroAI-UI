/**
 * ZeroAI-UI Tailwind CSS Configuration v5.1.0
 * Framework-agnostic design tokens for Tailwind CSS - Taobao Orange Theme
 *
 * Usage:
 * 1. Taro: Copy this to your Taro project's tailwind.config.js
 * 2. uni-app: Import in your tailwind.config.js
 * 3. Any Tailwind project: Merge with your existing config
 */

module.exports = {
  theme: {
    extend: {
      // ==================== Colors ====================
      colors: {
        // Human Layer - Neutral Gray (Low-key)
        human: {
          primary: '#737373',
          'primary-light': '#A3A3A3',
          'primary-dark': '#525252',
          surface: '#FFFFFF',
          'surface-elevated': '#FAFAFA',
          'surface-sunken': '#F5F5F5',
          border: '#E5E5E5',
          'border-strong': '#D4D4D4',
          'text-primary': '#171717',
          'text-secondary': '#737373',
          'text-tertiary': '#A3A3A3',
        },
        // AI Layer - Taobao Orange (Vibrant, Energetic)
        ai: {
          primary: '#FF6600',
          'primary-light': '#FF7A1F',
          'primary-dark': '#E55A00',
          surface: '#FFF7F0',
          'surface-elevated': '#FFEDE0',
        },
        // Semantic Colors
        semantic: {
          success: '#10B981',
          warning: '#F59E0B',
          error: '#EF4444',
          info: '#737373',
        },
      },

      // ==================== Spacing ====================
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        '2xl': '48px',
        '3xl': '64px',
        // Mobile touch targets
        'touch-min': '48px',
        'touch-comfortable': '56px',
        'touch-spacious': '64px',
      },

      // ==================== Font Family ====================
      fontFamily: {
        base: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'sans-serif'],
        ai: ['Nunito', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['SF Mono', 'Monaco', 'Inconsolata', 'Fira Code', 'monospace'],
      },

      // ==================== Font Size ====================
      fontSize: {
        'xs': '12px',
        'sm': '14px',
        'base': '16px',
        'lg': '18px',
        'xl': '20px',
        '2xl': '24px',
        '3xl': '30px',
        '4xl': '36px',
      },

      // ==================== Font Weight ====================
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },

      // ==================== Line Height ====================
      lineHeight: {
        tight: '1.25',
        normal: '1.5',
        relaxed: '1.75',
      },

      // ==================== Border Radius ====================
      borderRadius: {
        'none': '0',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
        'full': '9999px',
      },

      // ==================== Box Shadow ====================
      boxShadow: {
        'xs': '0 1px 2px rgba(0, 0, 0, 0.05)',
        'sm': '0 2px 4px rgba(0, 0, 0, 0.1)',
        'md': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'lg': '0 10px 15px rgba(0, 0, 0, 0.1)',
        'xl': '0 20px 25px rgba(0, 0, 0, 0.15)',
        '2xl': '0 25px 50px rgba(0, 0, 0, 0.25)',
        'ai': '0 0 12px rgba(102, 126, 234, 0.5)',
        'ai-strong': '0 0 24px rgba(102, 126, 234, 0.8)',
      },

      // ==================== Screens (Breakpoints) ====================
      screens: {
        'xs': '0px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },

      // ==================== Animation Duration ====================
      transitionDuration: {
        'fast': '150ms',
        'base': '300ms',
        'slow': '500ms',
      },

      // ==================== Animation Easing ====================
      transitionTimingFunction: {
        'standard': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'enter': 'cubic-bezier(0, 0, 0.2, 1)',
        'exit': 'cubic-bezier(0.4, 0, 1, 1)',
      },

      // ==================== Note: No Gradients ====================
      // ZeroAI-UI v5.0.1+ uses solid colors only
      // Removed all gradient definitions per design system principles
    },
  },

  // ==================== Custom Utilities ====================
  plugins: [
    // Custom utility for iOS safe area
    function ({ addUtilities }) {
      const safeAreaUtilities = {
        '.safe-area-top': {
          paddingTop: 'env(safe-area-inset-top)',
        },
        '.safe-area-bottom': {
          paddingBottom: 'env(safe-area-inset-bottom)',
        },
        '.safe-area-left': {
          paddingLeft: 'env(safe-area-inset-left)',
        },
        '.safe-area-right': {
          paddingRight: 'env(safe-area-inset-right)',
        },
        '.safe-area-all': {
          paddingTop: 'env(safe-area-inset-top)',
          paddingBottom: 'env(safe-area-inset-bottom)',
          paddingLeft: 'env(safe-area-inset-left)',
          paddingRight: 'env(safe-area-inset-right)',
        },
      };

      addUtilities(safeAreaUtilities);
    },

    // Custom utility for mobile touch targets
    function ({ addUtilities }) {
      const touchTargetUtilities = {
        '.touch-target': {
          minWidth: '48px',
          minHeight: '48px',
        },
        '.touch-target-comfortable': {
          minWidth: '56px',
          minHeight: '56px',
        },
        '.touch-target-spacious': {
          minWidth: '64px',
          minHeight: '64px',
        },
      };

      addUtilities(touchTargetUtilities);
    },
  ],
};
