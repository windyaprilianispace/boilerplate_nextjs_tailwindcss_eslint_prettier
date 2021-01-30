/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
const plugin = require('tailwindcss/plugin')

module.exports = {
	purge: ['./pages/**/*.js'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
      fontFamily: {
				/*	Example use: font-lato
					Example custom:
					'rubik': ['Rubik', 'sans-serif'], */
				'montserrat': ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        '18': '18px',
        '20': '20px',
        '90': '90px',
      }
    },
	},
	variants: {
		extend: {},
	},
	plugins: [
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-lg': {
          textShadow: '20px 15px 25px #00000065',
        },
      }

      addUtilities(newUtilities)
    })
  ],
}
