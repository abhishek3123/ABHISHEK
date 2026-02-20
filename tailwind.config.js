export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
        display: ['Manrope', 'Inter', 'system-ui', 'sans-serif']
      },
      colors: {
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a'
        },
        accent: {
          500: '#22d3ee'
        },
        success: {
          500: '#10b981'
        },
        warning: {
          500: '#f59e0b'
        },
        danger: {
          500: '#ef4444'
        }
      },
      boxShadow: {
        soft: '0 10px 30px -10px rgba(0,0,0,0.15)',
        glass: '0 10px 30px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.15)'
      },
      backdropBlur: {
        xs: '2px'
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' }
        },
        pulseGlow: {
          '0%,100%': { boxShadow: '0 0 0 0 rgba(34,211,238,0.5)' },
          '50%': { boxShadow: '0 0 40px 0 rgba(34,211,238,0.4)' }
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulseGlow: 'pulseGlow 4s ease-in-out infinite'
      }
    }
  },
  plugins: []
};
