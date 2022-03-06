module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'dig-bg': "url('./Assets/Images/background.jpg')"
      },
      fontSize: {
        myfont: [
          '10px',
          {
            lineHeight: '10px'
          }
        ]
      },
      height: theme => ({
        'screen/1': '65vh',
        'screen/2': '50vh',
        'screen/0': '73vh',
        'screen/3': 'calc(100vh / 3)',

        'screen/4': 'calc(100vh / 4)',

        'screen/5': 'calc(100vh / 5)'
      })
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide')
    // ...
  ]
}
