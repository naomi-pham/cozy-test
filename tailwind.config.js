module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontSize: {
				'4xl': '2.5rem',
				'3xl': '2rem',
			},
			fontFamily: {
				primary: ['Archivo', 'sans-serif'],
				400: ['"graphik-regular"'],
				500: ['"graphik-medium"'],
				600: ['"graphik-semibold"'],
				800: ['"graphik-bold"'],
			},
			colors: {
				primary: {
					700: '#BF3E70', // darkest
					600: '#DB4781',
					500: '#E94C89',
					400: '#F082AC',
					200: '#FAD8E5',
					100: '#FDEAF3',
					50: '#FEF8FA',
				},
				secondary: {
					700: '#3E2F9E', // darkest
					600: '#4837B6',
					500: '#4F3CC8',
					400: '#6558DE',
					200: '#B0A7E6',
					100: '#EDECFA',
					50: '#F6F5FC',
				},
				light: {
					900: '#091E42', // darkest
					800: '#253858',
					700: '#6B778C',
					600: '#9199A7',
					500: '#B3BAC5',
					400: '#C1C7D0',
					300: '#DFE1E6',
					200: '#EBECF0',
					100: '#F1F2F4',
					50: '#F7F7F8',
					25: '#FAFAFA',
				},
				dark: {
					900: '#FFFFFF', // lightest
					800: '#F0F1F5',
					700: '#97A6B4',
					600: '#6E7E95',
					500: '#596474',
					400: '#3F3F55',
					300: '#39394E',
					200: '#2E2E41',
					100: '#24242A',
					50: '#202027',
					25: '#15151B',
				},
				pending: {
					DEFAULT: '#FFA940',
					700: '#CC8733', // darkest
					600: '#E6983A',
					400: '#FFC074',
					200: '#FFEED9',
					100: '#FFF6EC',
					50: '#FFFBF5',
				},
				error: {
					DEFAULT: '#DA4343',
					700: '#AE3636', // darkest
					600: '#C43C3C',
					400: '#FF7875',
					200: '#F8D9D9',
					100: '#FBECEC',
					50: '#FDF6F6',
				},
				success: {
					DEFAULT: '#31D067',
					700: '#26A44D', // darkest
					600: '#2BB956',
					400: '#6AE684',
					200: '#D6F5DF',
					100: '#EAFAEF',
					50: '#F5FDF7',
				},
				links: {
					DEFAULT: '#1990FF',
					700: '#0F5699', // darkest
					600: '#1473CC',
					400: '#57AEFF',
					200: '#A3D3FF',
					100: '#D1E9FF',
					50: '#E8F4FF',
				},
			},
		},
	},
	plugins: [],
};
