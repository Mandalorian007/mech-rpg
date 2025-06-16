/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  	extend: {
  		colors: {
  			primary: {
  				'50': '#e6f3ff',
  				'100': '#cce7ff',
  				'200': '#99cfff',
  				'300': '#66b7ff',
  				'400': '#339fff',
  				'500': '#0087ff',
  				'600': '#006cc7',
  				'700': '#00518f',
  				'800': '#003657',
  				'900': '#001b2f',
  				'950': '#000d17',
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				'50': '#f0f4f8',
  				'100': '#d9e2ec',
  				'200': '#bcccdc',
  				'300': '#9fb3c8',
  				'400': '#829ab1',
  				'500': '#627d98',
  				'600': '#486581',
  				'700': '#334e68',
  				'800': '#243b53',
  				'900': '#102a43',
  				'950': '#0a1929',
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			accent: {
  				'50': '#fff4e6',
  				'100': '#ffe9cc',
  				'200': '#ffd199',
  				'300': '#ffb966',
  				'400': '#ffa133',
  				'500': '#ff8900',
  				'600': '#cc6e00',
  				'700': '#995200',
  				'800': '#663700',
  				'900': '#331b00',
  				'950': '#1a0e00',
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			danger: {
  				'50': '#fef2f2',
  				'100': '#fee2e2',
  				'200': '#fecaca',
  				'300': '#fca5a5',
  				'400': '#f87171',
  				'500': '#ef4444',
  				'600': '#dc2626',
  				'700': '#b91c1c',
  				'800': '#991b1b',
  				'900': '#7f1d1d',
  				'950': '#450a0a'
  			},
  			success: {
  				'50': '#f0fdf4',
  				'100': '#dcfce7',
  				'200': '#bbf7d0',
  				'300': '#86efac',
  				'400': '#4ade80',
  				'500': '#22c55e',
  				'600': '#16a34a',
  				'700': '#15803d',
  				'800': '#166534',
  				'900': '#14532d',
  				'950': '#052e16'
  			},
  			dark: {
  				'50': '#f8fafc',
  				'100': '#f1f5f9',
  				'200': '#e2e8f0',
  				'300': '#cbd5e1',
  				'400': '#94a3b8',
  				'500': '#64748b',
  				'600': '#475569',
  				'700': '#334155',
  				'800': '#1e293b',
  				'900': '#0f172a',
  				'950': '#020617'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
  			'cyber-grid': '`\n          linear-gradient(rgba(0, 135, 255, 0.03) 1px, transparent 1px),\n          linear-gradient(90deg, rgba(0, 135, 255, 0.03) 1px, transparent 1px)\n        `',
  			'hero-gradient': 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
  			'card-gradient': 'linear-gradient(145deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 41, 59, 0.6) 100%)',
  			'button-gradient': 'linear-gradient(135deg, #0087ff 0%, #006cc7 100%)',
  			'accent-gradient': 'linear-gradient(135deg, #ff8900 0%, #cc6e00 100%)'
  		},
  		backdropBlur: {
  			xs: '2px'
  		},
  		boxShadow: {
  			cyber: '0 0 20px rgba(0, 135, 255, 0.2)',
  			'cyber-lg': '0 0 40px rgba(0, 135, 255, 0.3)',
  			glow: '0 0 30px rgba(255, 137, 0, 0.3)',
  			'inner-glow': 'inset 0 0 20px rgba(0, 135, 255, 0.1)',
  			card: '0 8px 32px rgba(0, 0, 0, 0.12)',
  			'card-hover': '0 16px 64px rgba(0, 0, 0, 0.16)'
  		},
  		animation: {
  			'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  			'bounce-slow': 'bounce 2s infinite',
  			'fade-in': 'fadeIn 0.5s ease-in-out',
  			'slide-up': 'slideUp 0.3s ease-out',
  			glow: 'glow 2s ease-in-out infinite alternate'
  		},
  		keyframes: {
  			fadeIn: {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(10px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			},
  			slideUp: {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(20px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			},
  			glow: {
  				'0%': {
  					boxShadow: '0 0 20px rgba(0, 135, 255, 0.2)'
  				},
  				'100%': {
  					boxShadow: '0 0 30px rgba(0, 135, 255, 0.4)'
  				}
  			}
  		},
  		fontFamily: {
  			sans: [
  				'Inter',
  				'system-ui',
  				'sans-serif'
  			],
  			mono: [
  				'JetBrains Mono',
  				'Fira Code',
  				'monospace'
  			]
  		},
  		backgroundSize: {
  			'cyber-grid': '40px 40px'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}; 