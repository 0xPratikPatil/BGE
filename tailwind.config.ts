import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        /* ─── Brand: 60-30-10 Mapping ─── */
        navy: {
          DEFAULT: '#113F5B',
          50: '#F0F6FA',
          100: '#D9E8F1',
          200: '#B3D1E3',
          300: '#80B3D2',
          400: '#4D94C0',
          500: '#1A91CF',
          600: '#157BA9',
          700: '#113F5B',
          800: '#0D2A3E',
          900: '#091D2B',
        },
        blue: {
          DEFAULT: '#1A91CF',
          light: '#3BA5DE',
          dark: '#157BA9',
        },
        accent: {
          DEFAULT: '#F37331',
          50: '#FEF3ED',
          100: '#FDE3D0',
          200: '#FAC79E',
          300: '#F7A965',
          400: '#F48C45',
          500: '#F37331',
          600: '#E85D20',
          700: '#D44E15',
          800: '#B34A18',
          900: '#8A3912',
        },
        amber: {
          DEFAULT: '#FAA32D',
          light: '#FBB94D',
          dark: '#E08A15',
        },
        surface: {
          page: '#FFFFFF',
          alt: '#F8FAFC',
          muted: '#F1F5F9',
          elevated: '#FFFFFF',
        },
        neutral: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
      },

      fontFamily: {
        sans: ['Poppins', 'Arial', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'Arial', 'system-ui', 'sans-serif'],
      },

      fontSize: {
        'display': ['3.5rem', { lineHeight: '1.08', fontWeight: '800', letterSpacing: '-0.03em' }],
        'headline': ['2.75rem', { lineHeight: '1.1', fontWeight: '700', letterSpacing: '-0.025em' }],
        'title': ['2rem', { lineHeight: '1.15', fontWeight: '700', letterSpacing: '-0.02em' }],
        'subtitle': ['1.25rem', { lineHeight: '1.4', fontWeight: '600', letterSpacing: '-0.01em' }],
      },

      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '112': '28rem',
        '128': '32rem',
        '144': '36rem',
      },

      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },

      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'float': 'float 4s ease-in-out infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'dash': 'dash 3s linear infinite',
        'spin-slow': 'spin 30s linear infinite',
        'pulse-ring': 'pulseRing 2s ease-out infinite',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        dash: {
          '0%': { strokeDashoffset: '200' },
          '100%': { strokeDashoffset: '0' },
        },
        pulseRing: {
          '0%': { transform: 'scale(1)', opacity: '0.4' },
          '100%': { transform: 'scale(2.5)', opacity: '0' },
        },
      },

      boxShadow: {
        'xs': '0 1px 2px rgba(15, 23, 42, 0.04)',
        'soft': '0 1px 3px rgba(15, 23, 42, 0.06), 0 1px 2px rgba(15, 23, 42, 0.04)',
        'card': '0 1px 3px rgba(15, 23, 42, 0.04), 0 1px 2px rgba(15, 23, 42, 0.02)',
        'card-hover': '0 10px 25px -5px rgba(15, 23, 42, 0.08), 0 4px 6px -4px rgba(15, 23, 42, 0.03)',
        'elevated': '0 4px 6px -1px rgba(15, 23, 42, 0.07), 0 2px 4px -2px rgba(15, 23, 42, 0.05)',
        'premium': '0 10px 15px -3px rgba(15, 23, 42, 0.08), 0 4px 6px -4px rgba(15, 23, 42, 0.04)',
        'deep': '0 20px 25px -5px rgba(15, 23, 42, 0.08), 0 8px 10px -6px rgba(15, 23, 42, 0.04)',
        'dramatic': '0 25px 50px -12px rgba(15, 23, 42, 0.16)',
        'glow-orange': '0 0 20px rgba(243, 115, 49, 0.2)',
        'glow-blue': '0 0 20px rgba(26, 145, 207, 0.15)',
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-brand': 'linear-gradient(135deg, #113F5B 0%, #1A91CF 100%)',
        'gradient-accent': 'linear-gradient(135deg, #F37331 0%, #FAA32D 100%)',
        'gradient-navy': 'linear-gradient(135deg, #0D2A3E 0%, #113F5B 100%)',
      },

      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
