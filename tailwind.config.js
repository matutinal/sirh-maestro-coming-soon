/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      colors: {
        indigo: {
          '50': '#f2f9fd',
          '100': '#e4f0fa',
          '200': '#c4e1f3',
          '300': '#9aceeb',
          '400': '#55addb',
          '500': '#2f94c8',
          '600': '#1f76aa',
          '700': '#1b5e89',
          '800': '#1a5072',
          '900': '#1b445f',
          '950': '#122b3f',
        },
        purple: {
          '50': '#f0f7ff',
          '100': '#e0eefe',
          '200': '#bbddfc',
          '300': '#7ec2fb',
          '400': '#3aa3f6',
          '500': '#1087e7',
          '600': '#60a9fa',
          '700': '#60a9fa',
          '800': '#08457e',
          '900': '#0d3d6d',
          '950': '#092748',
        },
      },
    },
  },
  plugins: [],
};