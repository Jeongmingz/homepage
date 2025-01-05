import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: {
      ssr: true,
      displayName: true,
    },
  },
  // 타입스크립트 설정
  typescript: {
    // 프로덕션 빌드 시 타입 체크
    ignoreBuildErrors: false,
    tsconfigPath: "tsconfig.json",
  },
  // 기본 환경 설정
  env: {},
  // 빌드 출력 디렉토리
  distDir: ".next",
  // 정적 파일 prefix
  assetPrefix: "",
  // 이미지 최적화 설정
  images: {
    domains: [],
    formats: ["image/webp"],
  },
  // 개발 표시기
  devIndicators: {
    buildActivity: true,
    buildActivityPosition: "bottom-right",
  },
};

export default nextConfig;
