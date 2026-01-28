/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'neo-yellow': '#FFDE59',
        'neo-pink': '#FF5757',
        'neo-blue': '#00AAFF',
        'neo-green': '#7ED957',
        'neo-purple': '#CB6CE6',
        'neo-orange': '#FF5500',
        'neo-white': '#FFFFFF',
        'neo-black': '#000000',
        'neo-gray': '#E0E0E0',
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
      boxShadow: {
        'neo': '8px 8px 0px 0px rgba(0,0,0,1)',
        'neo-sm': '4px 4px 0px 0px rgba(0,0,0,1)',
        'neo-lg': '12px 12px 0px 0px rgba(0,0,0,1)',
        'neo-double': '12px 12px 0 0 #FF5500, 24px 24px 0 0 #00AAFF',
        'neo-hover': '-8px 8px 0 0 #00AAFF',
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      borderRadius: {
        none: '0px',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}
