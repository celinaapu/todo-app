import type { Config } from 'tailwindcss'

const config: Config = {
	content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
	theme: {
		extend: {
			opacity: {
				5: '0.05',
				10: '0.1',
				15: '0.15',
				20: '0.2',
				25: '0.25',
				30: '0.3',
				35: '0.35',
				40: '0.4',
				45: '0.45',
				50: '0.5',
				55: '0.55',
				60: '0.6',
				65: '0.65',
				70: '0.7',
				75: '0.75',
				80: '0.8',
				85: '0.85',
				90: '0.9',
				95: '0.95',
				100: '1',
			},
			colors: {
				yellow: {
					55: '#ffa31a',
					65: '#ffb84d',
					75: '#ffcc80',
					85: '#ffe0b3',
				},
				green: {
					45: '#31b452',
					56: '#46AD92',
					54: '#47cd68',
					75: '#9be4ad',
					85: '#c3efce',
				},
				blue: {
					50: '#0567fa',
					55: '#017ef3',
					60: '#3785fb',
					75: '#82b3fc',
					85: '#b4d1fd',
				},
				red: {
					55: '#e23636',
					65: '#e96363',
					75: '#ef8f8f',
					85: '#f5bcbc',
				},
				gray: {
					5: '#eceef0',
					10: '#c5c9cf',
					20: '#a9afb8',
					30: '#828a97',
					40: '#697483',
					50: '#445164',
					60: '#3e4a5b',
					70: '#303a47',
					80: '#252d37',
					90: '#1d222a',
				},
				white: {
					50: '#F2F7F8',
					100: '#FFF',
				},
			},
			fontSize: {
				xxs: '9px',
			},
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
				inter: ['Inter', 'sans-serif'],
				roboto: ['Roboto', 'sans-serif'],
			},
			screens: {
				xs: '480px',
				ss: '620px',
				sm: '768px',
				md: '1060px',
				lg: '12000px',
				xl: '17000px',
			},
      backgroundImage: {
        'register': "url('./src/assets/images/register-bg.png')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      }
		},
		keyframes: {
			enterFromRight: {
				from: { opacity: '0', transform: 'translateX(200px)' },
				to: { opacity: '1', transform: 'translateX(0)' },
			},
			enterFromLeft: {
				from: { opacity: '0', transform: 'translateX(-200px)' },
				to: { opacity: '1', transform: 'translateX(0)' },
			},
			exitToRight: {
				from: { opacity: '1', transform: 'translateX(0)' },
				to: { opacity: '0', transform: 'translateX(200px)' },
			},
			exitToLeft: {
				from: { opacity: '1', transform: 'translateX(0)' },
				to: { opacity: '0', transform: 'translateX(-200px)' },
			},
			scaleIn: {
				from: { opacity: '0', transform: 'rotateX(-10deg) scale(0.9)' },
				to: { opacity: '1', transform: 'rotateX(0deg) scale(1)' },
			},
			scaleOut: {
				from: { opacity: '1', transform: 'rotateX(0deg) scale(1)' },
				to: { opacity: '0', transform: 'rotateX(-10deg) scale(0.95)' },
			},
			slideInUp: {
				from: { opacity: '0', transform: 'rotateY(-10deg) translateY(150px)' },
				to: { opacity: '1', transform: 'rotateY(0deg) translateY(0)' },
			},
			slideInUp300: {
				from: { opacity: '0', transform: 'translateY(30px)' },
				to: { opacity: '1', transform: 'translateY(0)' },
			},
			slideInUp600: {
				from: { opacity: '0', transform: 'translateY(300px)' },
				to: { opacity: '1', transform: 'translateY(0)' },
			},
			slideOutDown: {
				from: { opacity: '0', transform: 'rotateY(-10deg) translateY(-150px)' },
				to: { opacity: '1', transform: 'rotateY(0) translateY(150px)' },
			},
			fadeIn: {
				from: { opacity: '0' },
				to: { opacity: '1' },
			},
			fadeOut: {
				from: { opacity: '1' },
				to: { opacity: '0' },
			},
			slideUp: {
				from: { height: 'var(--radix-accordion-content-height)' },
				to: { height: '0px' },
			},
			slideDown: {
				from: { height: '0px' },
				to: { height: 'var(--radix-accordion-content-height)' },
			},
			fadeInNavColor: {
				from: { backgroundColor: 'var(--kendee-primary)' },
				to: { backgroundColor: 'var(--neutral-97)' },
			},
			fadeOutNavColor: {
				from: { backgroundColor: 'var(--neutral-97)' },
				to: { backgroundColor: 'var(--kendee-primary)' },
			},
			shiftLeftRight: {
				'0%': { transform: 'translateX(0px)' },
				'25%': { transform: 'translateX(6px)' },
				'50%': { transform: 'translateX(0px)' },
				'75%': { transform: 'translateX(-6px)' },
				'100%': { transform: 'translateX(0px)' },
			},
			pumpOut: {
				from: { transform: 'scale(1)' },
				to: { transform: 'scale(1.05)' },
			},
			deflate: {
				from: { transform: 'scale(1.05)' },
				to: { transform: 'scale(1)' },
			},
		},
		animation: {
			scaleIn: 'scaleIn 200ms ease',
			scaleOut: 'scaleOut 200ms ease',
			fadeIn: 'fadeIn 200ms ease',
			fadeIn1500: 'fadeIn 1.5s ease-out',
			fadeOut: 'fadeOut 200ms ease',
			slideInUp: 'slideInUp 1.5s ease-in-out',
			slideInUp300: 'slideInUp300 300ms ease',
			slideInUp600: 'slideInUp600 400ms ease',
			slideOutDown: 'slideOutDown 200ms ease',
			enterFromLeft: 'enterFromLeft 250ms ease',
			enterFromRight: 'enterFromRight 250ms ease',
			exitToLeft: 'exitToLeft 250ms ease',
			exitToRight: 'exitToRight 250ms ease',
			slideUp: 'slideUp 0.3s ease-in-out',
			slideDown: 'slideDown 0.3s ease-in-out',
			fadeInNavColor: 'fadeInNavColor 0.3s ease-in',
			fadeOutNavColor: 'fadeOutNavColor 0.3s ease-in',
			shiftLeftRight: 'shiftLeftRight 1.5s linear infinite',
			pumpOut: 'pumpOut 0.3s linear',
			deflate: 'deflate 0.3s linear',
		},
	},
	plugins: [],
}

export default config