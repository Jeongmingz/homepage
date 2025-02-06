export interface ResumeData {
  _id: string;
  userUUID: string;
  projects: ResumeProjectData[];
  careers: ResumeCareerData[];
  careerYears: YearsData[];
  descriptions: ResumeDescriptionData[];
  createdAt: Date;
  updatedAt: Date;
}

export interface ResumeProjectData {
  order: number; // 해당 프로젝트 순서
  name: string; // 프로젝트 이름
  skill: string[]; // 기술 스택
  team: ProjectTeamData;
  status: boolean; // 해당 프로젝트의 완료 여부 (0: 미완료, 1: 완료)
  link: ResumeLinkData[]; // 프로젝트 관련 uri 링크들 (다수 선택 가능 row 형식으로)
  date: DateData; // 프로젝트 기간
  content: string; // markdown
}

export interface ResumeCareerData {
  order: number;
  team: CompanyTeamData;
  name: string; // 회사 이름
  skill: string[]; // 기술 스택
  status: boolean; // 퇴사 여부 (0: 퇴사, 1: 재직중)
  link: ResumeLinkData[]; // 프로젝트 관련 uri 링크들 (다수 선택 가능 row 형식으로)
  date: DateData;
  projects: ResumeProjectData[];
  content: string; // markdown
}

export interface ResumeDescriptionData {
  type: string;
  content: string;
}

// Team Interface
export interface CompanyTeamData {
  position: string; // 직책
  role: string[]; // 해당 팀에서 맡은 역할 (다수 선택 가능 Tag 형식으로 ex) backend, pm, frontend ,,,)
  link: ResumeLinkData[]; // 회사 관련 링크 (있을수도 있고 없을수도 있음.)
}

export interface ProjectTeamData {
  name: string; // 팀 이름
  member: number; // 팀 멤버 수 (member 명)
  role: string[]; // 해당 팀에서 맡은 역할 (다수 선택 가능 Tag 형식으로 ex) backend, pm, frontend ,,,)
  link: ResumeLinkData[]; // 팀과 관련된 링크 (있을수도 있고 없을수도 있음.)
}

export interface ResumeLinkData {
  uri: string;
  name: string;
  type: string; // github, instagram, homepage, figma, linkedin, email, blog
}

export interface YearsData {
  id: number;
  years: {
    year: number;
    month: number;
  };
}

export interface DateData {
  start: string;
  end: string; // String일 경우, 진행중을 의미함.
}
