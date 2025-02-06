import { dateFormatter } from "@/lib/functions";
import { colors } from "@/styles/colors";
import { DateData, ResumeCareerData, ResumeLinkData } from "@/types/mongo";
import styled from "styled-components";
import MarkdownDisplay from "./MarkdownDisplay";
import React from "react";
import LinkIconComponent from "./LinkIconComponent";

interface ProjectProps {
  date: DateData;
  years: {
    year: number;
    month: number
  };
  data: ResumeCareerData;
}

const CareerComponent: React.FC<ProjectProps> = ({ date, years, data }) => {
  return (
    <Container>
      <LeftSide>
        <DateRange>
          {dateFormatter(date.start)} ~ {dateFormatter(date.end)}
        </DateRange>
        <Status $completed={data.status}>
          {data.status ? '재직 중' : '퇴사'}
        </Status>
      </LeftSide>
      <RightSide>
        <Years>
          {`${years.year}년 ${years.month}개월`}
        </Years>
        {data && (
          <>
            <CompanyInfo>
              <CompanyName>{data.name}</CompanyName>
              <SkillContainer>
                {data.skill.map((stack: string, index: number) => (
                  <SkillTag key={`career${data.order}-skill-${index}`}>{stack}</SkillTag>
                ))}
              </SkillContainer>


              <CompanyRoleContainer>
                <TeamName>직책</TeamName>
                <CompanyPosition>{data.team.position}</CompanyPosition>
              </CompanyRoleContainer>

              <RoleContainer>
                <TeamName>역할</TeamName>
                {data.team.role.map((item: string, index: number) => (
                  <CompanyRole key={`company-role-${index}`}>
                    {item}
                  </CompanyRole>
                ))}
              </RoleContainer>
              {data.link.length != 0 && (
                <TeamLinks>
                  <TeamName>링크</TeamName>
                  {data.link.map((link: ResumeLinkData, index: number) => (
                    <LinkButton key={`team-link-${index}`} href={link.uri} target="_blank" rel="noopener noreferrer">
                      <LinkIconComponent name={link.type} />
                      <span>{link.name}</span>
                    </LinkButton>
                  ))}
                </TeamLinks>
              )}
            </CompanyInfo>
            <ContentWrapper>
              <MarkdownDisplay content={data.content} />
            </ContentWrapper>
          </>
        )}
      </RightSide>
    </Container>
  )
}

export default CareerComponent;

const Container = styled.div`
  width: calc(100% - 48px);
  display: flex;
  flex-direction: row;
  gap: 40px;


  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    gap: 20px;
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

  @media (max-width: 768px) {
    font-size: 12px;
  }
`

const Years = styled.p`
  color: ${colors.info};
  font-weight: 500;
  font-size: 14px;
  margin: 0;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  border-radius: 4px;
  display: inline-block;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`


const Status = styled.span<{ $completed: boolean }>`
  width: 50px;
  text-align: center;
  font-size: 12px;
  border-radius: 4px;
  font-weight: 700;
  background-color: ${props => props.$completed ? colors.warning : colors.error};
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

const CompanyInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (max-width: 768px) {
    gap: 12px;
  }
`

const CompanyName = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 0;
  padding-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`

const SkillContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding-bottom: 20px;
`

const SkillTag = styled.span`
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.tagBackground};
  color: ${({ theme }) => theme.colors.tagText};
`


const CompanyRoleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`


const TeamName = styled.span`
  width: 35px;
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textPrimary};
`


const CompanyPosition = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSecondary};
`

const RoleContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`

const CompanyRole = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSecondary};
  border-radius: 4px;

`

const TeamLinks = styled.div`
  display: flex;
  gap: 12px;
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


const ContentWrapper = styled.div`
  border-radius: 8px;
  padding: 16px;

  @media (max-width: 768px) {
    padding: 12px;
    border-radius: 6px;
  }
`
