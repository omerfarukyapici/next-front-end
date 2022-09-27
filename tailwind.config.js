/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    /* Custom colors */
    colors: {
      // Configure your color palette here      
      footerHeaderColor: '#fff'
    },
    backgroundColor: {
      footerHeaderBg: '#161b22',
      contentBg: '#0d1117'
    },
    extend: {
      minHeight: {
        main_m_h: '100vh'
      },
      width: {
        main_w: '1200px',
      },
      margin: {
        main_m: '1rem'
      },
      padding: {
        main_p: '1rem'
      },
      height: {

      },
      backgroundColor: {

      }
    },
  },
  darkMode: 'media',  // or darkMode: 'class'
  plugins: [
    require('tailwind-scrollbar')
  ],
  variants: {
    scrollbar: ['dark']
  }
}
