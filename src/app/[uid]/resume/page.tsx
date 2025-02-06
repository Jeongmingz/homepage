'use client'

import React from "react"
import { user } from "../../../../public/data/dummy/User"
import { UserInfoProps } from "@/types/User"
import { UserInfo, UserInfoBtn } from "@/_components/InfoComponent"
import styled from "styled-components"
import { ResumeCareerData, ResumeDescriptionData, ResumeProjectData } from "@/types/mongo"
import { colors } from "@/styles/colors"
import CareerProjectComponent from "@/_components/CareerProjectComponent"
import { JumpitResumeData } from "../../../../public/data/dummy/test"
import ProjectComponent from "@/_components/ProjectComponent"
import MarkdownDisplay from "@/_components/MarkdownDisplay"


const ResumePage: React.FC<{ params: Promise<{ uid: string }> }> = () => {
  // const [data, setData] = useState<ResumeData>(JumpitResumeData);
  // const [careerYears, setCareerYears] = useState<YearsData>(exampleResumeData.careerYears[0]);
  const data = JumpitResumeData;
  const careerYears = data.careerYears[0];

  // const fetchData = async () => {
  //   try {
  //     const response = await axiosInstance.get(`/resume?id=550e8400-e29b-41d4-a716-446655440000`)
  //     console.log(response.data)
  //     if (response.status === 200) {
  //       setData(response.data)
  //     }
  //   }
  //   catch (e) {
  //     console.log(e)
  //   }
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // useEffect(() => {
  //   if (data) {
  //     setCareerYears(calculateTotalCareer(data.careerYears))
  //   }
  // }, [data])



  return (
    <main>
      <Header>
        <Name>
          {user.name}.
        </Name>

        <UserInfoContainer>
          <UserInfoStringContainer>
            {user.info.map((item: UserInfoProps) => (
              item.type != "SNS" &&
              <UserInfo key={user.name + "_" + item.title} title={item.title} url={item.url} type={item.type} clickAble={item.clickAble} />
            ))}
          </UserInfoStringContainer>
          <UserInfoBtnContainer>
            {user.info.map((item: UserInfoProps) => (
              item.type == "SNS" &&
              <UserInfoBtn key={user.name + "_" + item.title} title={item.title} url={item.url} type={item.type} clickAble={item.clickAble} />
            ))}
          </UserInfoBtnContainer>
        </UserInfoContainer>
      </Header>


      <PartContainer>
        <SubPartContainer>
          <PartTitle>소개</PartTitle>
          {/* {(() => {
            const listItem = data.descriptions.find((item: ResumeDescriptionData) => item.type === "list");
            return listItem &&
              <DescriptionContainer>
                <PartSubTitle>핵심역량</PartSubTitle>
                <MarkdownDisplay content={listItem.content} />
              </DescriptionContainer>
          })()}

          {(() => {
            const listItem = data.descriptions.find((item: ResumeDescriptionData) => item.type === "intro");
            return listItem &&
              <DescriptionContainer>
                <PartSubTitle>짧은소개</PartSubTitle>
                <MarkdownDisplay content={listItem.content} />
              </DescriptionContainer>
          })()} */}
          {data.descriptions.map((description: ResumeDescriptionData, index: number) => (
            <DescriptionContainer key={`description-${index + 1}`}>
              <PartSubTitle>{description.type}</PartSubTitle>
              <MarkdownDisplay content={description.content} />
            </DescriptionContainer>
          ))}
        </SubPartContainer>


        {data &&
          data.careers && careerYears && (
            <PartSection>
              <PartTitle>
                경력<span>{careerYears.years.year}년 {careerYears.years.month}개월차</span>
              </PartTitle>
              {data.careers.map((item: ResumeCareerData, index: number) => (
                <CareerProjectComponent
                  key={`company-${index + 1}`}
                  career={item}
                  careerYear={careerYears} />
              ))}
            </PartSection>
          )}

        {data && data.projects && (
          <PartSection>
            <PartTitle>
              프로젝트
            </PartTitle>
            {data.projects.map((item: ResumeProjectData, index: number) => (
              <ProjectComponent
                key={`project-${index + 1}`}
                project={item}
              />
            ))}
          </PartSection>
        )}
      </PartContainer>
    </main>
  )
};


export default ResumePage;


const Header = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  justify-content: center;
  align-items: center;
  padding-bottom: 52px;
  @media (max-width: 500px) {
    gap: 40px; /* 줄바꿈 발생 시점에 간격 적용 */
    padding-bottom: 20px;
  }
`;

const Name = styled.h1`
  justify-self: flex-start;
  align-self: flex-start;
`


const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: end;

  gap:12px;
  flex: 1;
`

const UserInfoStringContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: end;
`

const UserInfoBtnContainer = styled.div`
  display: flex;
  flex-direction: row;

  align-self: end;
  justify-self: end;
  gap: 12px;
`

const PartContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 80px;
`

const PartSection = styled.div`
  display: flex;
  flex-direction: column;

  gap: 40px;
  padding-bottom: 80px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.themeToggle};
  & > div {
    margin: 0 20px;
  }

  @media (max-width: 500px) {
    padding-bottom: 40px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.themeToggle};
    & > div {
      margin: 0;
    }
  }

`

const PartTitle = styled.h2`
  display: flex;
  flex-direction: row;

  gap: 8px;
  align-items: end;

  font-size: 32px;
  font-weight: 800;

  & > span {
    font-size: 16px;
    font-weight: 600;
    color: ${colors.info};
    line-height: 100%;
  }
`

const SubPartContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 80px;

  border-bottom: 2px solid ${({ theme }) => theme.colors.themeToggle};
  & > div {
    margin: 0 20px;
  }

  @media (max-width: 500px) {
    padding-bottom: 40px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.themeToggle};
    & > div {
      margin: 0;
    }
  }

`

const PartSubTitle = styled.h2`
  display: flex;
  flex-direction: row;

  gap: 8px;
  align-items: end;

  font-size: 20px;
  font-weight: 500;

  color: ${({ theme }) => theme.colors.text};

  margin: 0;
  padding: 0;
`
const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
`