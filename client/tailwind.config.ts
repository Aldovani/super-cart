import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "auth-layout":" linear-gradient(0deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 100%),url('/auth_layout.png')"
      },
      gridTemplateAreas: {
        'form-sing-in': [
          'name name',
          'CPF CPF',
          'email phone',
          'password password',
          'button button'
        ],
      },
      gridTemplateColumns: {
        'layout': '1fr 1fr',
      },
      
    },
  },
  plugins: [
    require('@savvywombat/tailwindcss-grid-areas')
  ]
};
export default config;
