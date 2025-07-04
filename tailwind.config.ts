
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Jibu AI "Sunrise Learning" Color Palette - Adjusted coral to be less pink
				coral: {
					DEFAULT: '#FF5722', // Changed from #FF6B6B to a more orange-red
					50: '#FFF3E0',
					100: '#FFE0B2',
					200: '#FFCC80',
					300: '#FFB74D',
					400: '#FF9800',
					500: '#FF5722', // Main coral color - more orange-red
					600: '#F4511E',
					700: '#E64A19',
					800: '#D84315',
					900: '#BF360C',
				},
				teal: {
					DEFAULT: '#4ECDC4',
					50: '#F0FDFC',
					100: '#CCFBF1',
					200: '#99F6E4',
					300: '#5EEAD4',
					400: '#4ECDC4',
					500: '#14B8A6',
					600: '#0D9488',
					700: '#0F766E',
					800: '#115E59',
					900: '#134E4A',
				},
				sunny: {
					DEFAULT: '#FFE66D',
					50: '#FFFBEB',
					100: '#FEF3C7',
					200: '#FDE68A',
					300: '#FCD34D',
					400: '#FBBF24',
					500: '#FFE66D',
					600: '#D97706',
					700: '#B45309',
					800: '#92400E',
					900: '#78350F',
				},
				cream: '#FFFDF9',
				charcoal: '#2E2E2E',
				midgrey: '#707070',
				lavender: '#A29BFE',
				success: '#8BC34A',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-20px)'
					}
				},
				'confetti': {
					'0%': {
						transform: 'scale(0) rotate(0deg)',
						opacity: '1'
					},
					'100%': {
						transform: 'scale(1) rotate(360deg)',
						opacity: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'confetti': 'confetti 2s ease-out infinite'
			},
			fontFamily: {
				'poppins': ['Poppins', 'sans-serif'],
				'nunito': ['Nunito', 'sans-serif'],
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
