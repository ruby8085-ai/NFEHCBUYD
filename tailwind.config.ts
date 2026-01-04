import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        sm: {
          navy: "#002D5D",   // 메인 네이비
          gold: "#A3895D",   // 포인트 골드
          light: "#F8FAFC",  // 배경 연회색
          accent: "#0056A4"  // 강조 블루
        }
      },
      backgroundImage: {
        'gradient-sm': 'linear-gradient(135deg, #002D5D 0%, #0056A4 100%)',
      }
    },
  },
  plugins: [],
};
export default config;
