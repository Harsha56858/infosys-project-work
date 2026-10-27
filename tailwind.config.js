/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#FAF7F2',
          dark: '#121110',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          dark: '#1C1B18',
          alt: '#F4EFE6',
          'alt-dark': '#24221E',
        },
        ink: {
          DEFAULT: '#1C1A17',
          dark: '#EDEAE4',
          muted: '#5E584F',
          'muted-dark': '#A6A095',
        },
        rule: {
          DEFAULT: '#DDD6CA',
          dark: '#302E29',
        },
        signal: {
          DEFAULT: '#C8281E',
          hover: '#AE2219',
          light: '#FDECEB',
          'light-dark': '#381412',
        },
        action: {
          DEFAULT: '#1F4E5F',
          hover: '#183D4A',
          light: '#EAF1F3',
          'light-dark': '#132830',
        },
        ok: {
          DEFAULT: '#2E6B3F',
          light: '#EDF5EF',
          'light-dark': '#13291B',
        },
        warn: {
          DEFAULT: '#A86500',
          light: '#FBF3E6',
          'light-dark': '#362203',
        },
        sim: {
          DEFAULT: '#5B4B8A',
          light: '#F2EFF8',
          'light-dark': '#251E38',
        },
      },
      fontFamily: {
        serif: ['"Source Serif 4"', 'Fraunces', 'Georgia', 'serif'],
        sans: ['"Noto Sans"', '"Public Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"IBM Plex Mono"', '"JetBrains Mono"', 'Consolas', 'monospace'],
      },
      borderRadius: {
        control: '6px',
        panel: '10px',
      },
      boxShadow: {
        overlay: '0 4px 20px rgba(28, 26, 23, 0.08)',
        modal: '0 10px 30px rgba(28, 26, 23, 0.16)',
      },
    },
  },
  plugins: [],
}
