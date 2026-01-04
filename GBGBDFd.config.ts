import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        sm: {
          navy: "#002D5D",   // SM그룹 메인 네이비
          gold: "#A3895D",   // 포인트 골드
          slate: "#1E293B",  // 텍스트용 진회색
          sky: "#F0F7FF",    // 배경용 연하늘색
        }
      },
      borderRadius: {
        'enterprise': '1.25rem',
      }
    },
  },
  plugins: [],
};
export default config;
