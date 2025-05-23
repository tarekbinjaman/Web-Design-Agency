module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        fontFamily: {
          kanit: ['Kanit', 'sans-serif'],
          },
          backgroundImage: {
            'service-bg': "url('https://i.ibb.co/FbCXXRr/service-bg.jpg')",
          },
                animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
      },
    },
    plugins: [],
  }