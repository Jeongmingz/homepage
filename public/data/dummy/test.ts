import { ResumeData } from "@/types/mongo";

export const JumpitResumeData: ResumeData = {
  _id: "resume_001",
  userUUID: "user_001",
  projects: [
    {
      order: 1,
      name: "내 손안에 펼처지는 팝업스토어, 팝핑",
      skill: [
        "Django REST framework",
        "Next.js",
        "TypeScript",
        "Docker",
        "PM2",
        "MariaDB",
      ],
      team: {
        name: "Developop 백엔드",
        member: 3,
        role: ["팀장", "기획", "백엔드", "프론트엔드", "마케팅"],
        link: [],
      },
      status: false,
      link: [
        {
          uri: "https://popping.world",
          name: "팝핑 웹사이트",
          type: "homepage",
        },
        {
          uri: "https://github.com/popping-official/",
          name: "팝핑 GitHub",
          type: "github",
        },
      ],
      date: { start: "2023-03", end: "2024-08" },
      content: `## 🛍 내 손안에 펼처지는 팝업스토어, 팝핑
### 프로젝트 개요
온라인 팝업스토어 활성화를 통한 환경 문제와 소상공인 문제 해결 프로젝트

### 🛠 사용 기술
Django REST framework, TypeScript, Docker, PM2, MariaDB, Next.js

### 👥 팀 구성
총 5명 (BE 3명, FE 2명)

### 🧑💻 담당 역할
- 팀장 & 기획
- 백엔드 개발 및 DB 모델링
- 프론트엔드 개발 지원
- 서버 배포 및 운영
- 마케팅 전략 수립`,
    },
    {
      order: 2,
      name: "공부 집합소, 공집합",
      skill: [
        "Django",
        "Django REST framework",
        "TypeScript",
        "React",
        "Next.js",
        "Docker",
        "DBeaver",
        "MariaDB",
        "MySQL",
        "MongoDB",
        "RabbitMQ",
        "NGINX",
        "Slack",
      ],
      team: {
        name: "공집합 팀",
        member: 3,
        role: ["개발", "설계", "PG사 연결", "프론트엔드", "AWS", "SEO", "GA"],
        link: [],
      },
      status: false,
      link: [
        {
          uri: "https://gongziphap.com",
          name: "공집합 웹사이트",
          type: "homepage",
        },
      ],
      date: { start: "2023-03", end: "2024-08" },
      content: `## 📚 공부 집합소, 공집합
### 프로젝트 개요
학습자들을 위한 종합 학습 플랫폼 개발 프로젝트

### 🛠 사용 기술
Django, Django REST framework, TypeScript, React, Next.js, Docker, DBeaver, MariaDB, MySQL, MongoDB, RabbitMQ, NGINX, Slack

### 👥 팀 구성
BE 3명, FE (외주)

### 🧑💻 담당 역할
- 백엔드 개발 및 설계
- 프론트엔드 개발 지원
- PG사 연동 (Tosspayment, Paypal)
- AWS 인프라 구축
- SEO 최적화 및 Google Analytics 설정`,
    },
  ],
  careers: [
    {
      order: 1,
      team: {
        position: "개발자",
        role: ["백엔드", "프론트엔드", "DevOps"],
        link: [],
      },
      name: "(주) 일릭서",
      skill: [
        "Django",
        "Django REST framework",
        "Docker",
        "MySQL",
        "AWS",
        "Next.js",
        "Figma",
        "NGINX",
        "Google AdSense",
        "Google Analytics",
        "React",
        "TypeScript",
        "Slack",
        "Notion API",
        "Ubuntu",
      ],
      status: false,
      link: [],
      date: { start: "2023-03", end: "2024-09" },
      projects: [],
      content: `## (주) 일릭서 (2023.03 - 2024.09)
### 🏢 회사 소개
에듀테크 기업으로서 LMS 무료화 및 무료 교육 컨텐츠 제공

### 🧑💻 담당 업무
- **직책**: 개발자 (PRO)
- **역할**: 백엔드, 프론트엔드, DevOps

### 💼 주요 성과
- ORM을 활용한 DB 직렬화 구현
- Python Slack SDK를 이용한 Backoffice 시스템 개발
- Simple JWT 기반 토큰 인증 시스템 구축
- Docker를 이용한 개발 환경 표준화`,
    },
  ],
  careerYears: [{ id: 1, years: { year: 1, month: 7 } }],
  descriptions: [
    {
      type: "자기소개",
      content: `### 🏃♂️ 스프린터의 여정
안녕하세요, 소비자를 위한 개발을 하는 1년 차 백엔드 개발자입니다.

#### 💡 개발 철학
- 아이디어를 거침없이 시도하는 도전정신
- 실패를 딛고 일어서는 회복탄력성
- 지속적인 성장을 위한 학습 의지

#### 🛠 주요 역량
1. 협업 툴 전문가 (Notion, Slack)
2. 결제 시스템 통합 경험 (Tosspayment, PayPal)
3. Django 기반 프로젝트 4회 성공 리딩`,
    },
    {
      type: "기술스택",
      content: `#### 백엔드
- Python: Django, DRF
- Java: Spring Boot
- DB: MongoDB, MySQL

#### 프론트엔드
- React/Next.js
- TypeScript

#### DevOps
- Docker
- AWS (EC2, S3, RDS)
- NGINX`,
    },
  ],
  createdAt: new Date("2025-02-06T07:00:00.000Z"),
  updatedAt: new Date("2025-02-06T07:00:00.000Z"),
};
