/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,md,njk,liquid,handlebars,hbs,mustache,ejs,haml,pug}",
    "./src/_includes/**/*.{html,js,md,njk,liquid,handlebars,hbs,mustache,ejs,haml,pug}",
    "./src/_layouts/**/*.{html,js,md,njk,liquid,handlebars,hbs,mustache,ejs,haml,pug}",
    "./src/_data/**/*.{js,json}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        accent: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        }
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        mono: ['SF Mono', 'Monaco', 'Cascadia Code', 'Roboto Mono', 'Consolas', 'Courier New', 'monospace'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#1e293b',
            a: {
              color: '#2563eb',
              '&:hover': {
                color: '#1d4ed8',
              },
            },
            h1: {
              color: '#1e293b',
            },
            h2: {
              color: '#1e293b',
            },
            h3: {
              color: '#1e293b',
            },
            h4: {
              color: '#1e293b',
            },
            strong: {
              color: '#1e293b',
            },
            code: {
              color: '#1e293b',
              backgroundColor: '#f1f5f9',
              padding: '0.125rem 0.25rem',
              borderRadius: '0.375rem',
              fontSize: '0.875rem',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            pre: {
              backgroundColor: '#1e293b',
              color: '#ffffff',
              overflow: 'auto',
              borderRadius: '0.5rem',
            },
            'pre code': {
              backgroundColor: 'transparent',
              padding: '0',
              color: 'inherit',
            },
            blockquote: {
              borderLeftColor: '#2563eb',
              fontStyle: 'italic',
              color: '#64748b',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 