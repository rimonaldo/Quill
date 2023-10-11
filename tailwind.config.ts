import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1440px',
      }
    },
    extend: {
      maxWidth: {
        "8xl": "1400px"
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        forground: "hsl(var(--forground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          forground: "hsl(var(--primary-forground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          forground: "hsl(var(--secondary-forground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          forground: "hsl(var(--destructive-forground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          forground: "hsl(var(--muted-forground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          forground: "hsl(var(--accent-forground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          forground: "hsl(var(--popover-forground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          forground: "hsl(var(--card-forground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius-2px)",
        sm: "calc(var(--radius-4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0px" },
          to: { height: "var(--radix-accordion-content-height)" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0px" }
        },
      },
      animation: {
        "accordion-up": "accordion-up 0.2s ease-out",
        "accordion-down": "accordion-down 0.2s ease-out",
      }
    }
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
}
export default config
