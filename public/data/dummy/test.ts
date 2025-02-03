import { ResumeData } from "@/types/mongo";

export const exampleResumeData: ResumeData = {
  _id: "string",
  userUUID: "123e4567-e89b-12d3-a456-426614174000",
  projects: [
    {
      order: 1,
      name: "Project Alpha",
      skill: ["JavaScript", "React", "Node.js", "MongoDB"],
      team: {
        name: "Alpha Team",
        member: 5,
        role: ["frontend", "backend"],
        link: [
          { uri: "https://github.com/alpha-team", name: "github" },
          { uri: "https://alpha-team.com", name: "homepage" },
        ],
      },
      status: true,
      link: [
        { uri: "https://github.com/project-alpha", name: "github" },
        { uri: "https://figma.com/project-alpha", name: "figma" },
      ],
      date: { start: "2023-01-01T00:00:00.000Z", end: "진행중" },
      content:
        "# Project Alpha\n\n## Overview\nThis project aims to revolutionize **user experience** in web applications.\n\n### Key Features\n- Real-time data synchronization\n- AI-powered recommendations\n\n```python\nprint('hello world!')```n\n> Our mission is to create intuitive and powerful web applications.",
    },
    {
      order: 2,
      name: "Project Beta",
      skill: ["Python", "Django", "PostgreSQL"],
      team: {
        name: "Beta Team",
        member: 3,
        role: ["backend", "devops"],
        link: [
          { uri: "https://github.com/beta-team", name: "github" },
          { uri: "https://beta-team.com", name: "homepage" },
        ],
      },
      status: false,
      link: [
        { uri: "https://github.com/project-beta", name: "github" },
        { uri: "https://beta-project.com", name: "homepage" },
      ],
      date: {
        start: "2022-06-01T00:00:00.000Z",
        end: "2023-05-31T00:00:00.000Z",
      },
      content:
        "## Project Beta\n\n### Achievements\n1. Improved system performance by 50%\n2. Implemented robust security measures\n\n#### Technologies Used\n- Python 3.9\n- Django 3.2\n- PostgreSQL 13\n\n```python\nprint('hello world!')```",
    },
  ],
  careers: [
    {
      order: 1,
      team: {
        position: "Senior Software Engineer",
        role: ["backend", "devops", "team lead"],
        link: [
          { uri: "https://linkedin.com/company/tech-corp", name: "linkedin" },
          { uri: "https://tech-corp.com", name: "homepage" },
        ],
      },
      name: "Tech Corp",
      skill: ["Python", "Django", "AWS", "Docker", "Kubernetes"],
      status: true,
      link: [
        { uri: "https://github.com/johndoe", name: "github" },
        { uri: "https://johndoe-blog.com", name: "blog" },
      ],
      date: { start: "2020-01-01T00:00:00.000Z", end: "진행중" },
      projects: [
        {
          order: 1,
          name: "Internal Tool Revamp",
          skill: ["Python", "FastAPI", "React"],
          team: {
            name: "DevTools Team",
            member: 4,
            role: ["backend", "frontend"],
            link: [
              { uri: "https://github.com/devtools-team", name: "github" },
              { uri: "https://devtools.tech-corp.com", name: "homepage" },
            ],
          },
          status: true,
          link: [
            {
              uri: "https://github.com/tech-corp/internal-tools",
              name: "github",
            },
            {
              uri: "https://figma.com/file/internal-tools-design",
              name: "figma",
            },
          ],
          date: { start: "2022-03-01T00:00:00.000Z", end: "진행중" },
          content:
            "### Internal Tool Revamp\n\n- Modernized legacy systems\n- Improved developer productivity\n\n```python\nprint('hello world!')```",
        },
      ],
      content:
        "# Career at Tech Corp\n\n## Responsibilities\n- Led backend development team\n- Implemented CI/CD pipelines\n- Mentored junior developers\n\n### Notable Projects\n1. Microservices Architecture Migration\n2. Cloud Infrastructure Optimization\n\n> Committed to delivering high-quality software solutions and fostering team growth.",
    },
  ],
  careerYears: [
    { id: 1, years: { year: 3, month: 6 } },
    { id: 2, years: { year: 1, month: 2 } },
  ],
  createdAt: new Date("2023-06-01T00:00:00.000Z"),
  updatedAt: new Date("2023-06-15T00:00:00.000Z"),
};
