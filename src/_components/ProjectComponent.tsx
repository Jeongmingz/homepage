import { dateFormatter } from "@/lib/functions";
import { colors } from "@/styles/colors";
import { ResumeProjectData, ResumeLinkData } from "@/types/mongo";
import styled from "styled-components";
import MarkdownDisplay from "./MarkdownDisplay";
import LinkIconComponent from "./LinkIconComponent";

interface ProjectComponentProps {
  project: ResumeProjectData;
}

const ProjectComponent: React.FC<ProjectComponentProps> = ({ project }) => {
  if (!project) {
    return null;
  }

  return (
    <Container>
      <LeftSide>
        <DateRange>
          {dateFormatter(project.date.start)} ~ {dateFormatter(project.date.end)}
        </DateRange>
        <Status $completed={project.status}>
          {project.status ? '진행 중' : '완료'}
        </Status>
      </LeftSide>
      <RightSide>
        <ProjectHeader>
          <ProjectName>{project.name}</ProjectName>
        </ProjectHeader>
        <SkillContainer>
          {project.skill.map((stack: string, index: number) => (
            <SkillTag key={`skill-${index}`}>{stack}</SkillTag>
          ))}
        </SkillContainer>

        <TeamInfo>
          <TeamName>팀명</TeamName>
          <TeamMember>{project.team.name} | 총 {project.team.member} 명</TeamMember>
        </TeamInfo>

        <RoleContainer>
          <TeamName>역할</TeamName>
          <RoleTags>
            {project.team.role.map((role: string, index: number) => (
              <RoleTag key={`role-${index}`}>{role}</RoleTag>
            ))}
          </RoleTags>
        </RoleContainer>

        {project.team.link.length != 0 && (
          <TeamLinks>
            <TeamName>링크</TeamName>
            <RoleTags>
              {project.link.map((link: ResumeLinkData, index: number) => (
                <LinkButton key={`team-link-${index}`} href={link.uri} target="_blank" rel="noopener noreferrer">
                  <LinkIconComponent name={link.type} />
                  <span>{link.name}</span>
                </LinkButton>
              ))}
            </RoleTags>
          </TeamLinks>
        )}
        <ContentWrapper>
          <MarkdownDisplay content={project.content} />
        </ContentWrapper>
      </RightSide>
    </Container>
  )
}

export default ProjectComponent;

const Container = styled.div`
  width: calc(100% - 32px);
  display: flex;
  flex-direction: row;
  gap: 40px;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  border-radius: 8px;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
    flex-direction: column;
    gap: 16px;
    transition: none;
    box-shadow: none;
  }
`

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 170px;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
  }
`

const DateRange = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 0;
  opacity: 0.7;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`

const Status = styled.span<{ $completed: boolean }>`
  width: 50px;
  text-align: center;
  font-size: 12px;
  border-radius: 4px;
  font-weight: 700;
  background-color: ${props => props.$completed ? colors.warning : colors.success};
  color: ${({ theme }) => theme.colors.background};
`

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 16px;

  @media (max-width: 768px) {
    gap: 12px;
  }
`

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ProjectName = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 0;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`

const LinkButton = styled.a`
  display: flex;
  flex-direction: row;

  align-items: center;

  font-size: 14px;
  text-decoration: none;
  transition: background-color 0.2s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.backgroundQuaternary};
  }
  & > span {
    margin-left: 4px;
  }
`

const SkillContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  padding-bottom: 20px;
`

const SkillTag = styled.span`
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.tagBackground};
  color: ${({ theme }) => theme.colors.tagText};
`

const TeamInfo = styled.div`
  display: flex;
  align-items: start;
  gap: 12px;
`

const TeamName = styled.span`
  min-width: 35px;
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textPrimary};
`

const TeamMember = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSecondary};
`

const RoleContainer = styled.div`
  display: flex;
  align-items: start;
  gap: 12px;
`

const RoleTags = styled.div`
  display: flex;
  align-items: start;
  flex-wrap: wrap;
  gap: 8px;
`

const RoleTag = styled.span`
  font-size: 14px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.backgroundQuaternary};
  color: ${({ theme }) => theme.colors.textSecondary};
`

const TeamLinks = styled.div`
  display: flex;
  gap: 12px;
`

const ContentWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 6px;
  padding: 12px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`
