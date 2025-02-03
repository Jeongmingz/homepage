'use client'

import React from "react"
import { user } from "../../../../public/data/dummy/User"
import { UserInfoProps } from "@/types/User"
import { UserInfo, UserInfoBtn } from "@/_components/InfoComponent"
import styled from "styled-components"
import { ResumeCareerData } from "@/types/mongo"
import { colors } from "@/styles/colors"
import CareerProjectComponent from "@/_components/CareerProjectComponent"
import { exampleResumeData } from "../../../../public/data/dummy/test"


const ResumePage: React.FC<{ params: Promise<{ uid: string }> }> = () => {
  // const [data, setData] = useState<ResumeData>(exampleResumeData);
  // const [careerYears, setCareerYears] = useState<YearsData>(exampleResumeData.careerYears[0]);
  const data = exampleResumeData;
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
      {/* User Description (자기소개) 부분 START*/}
      {/* {user.description &&
        <UserDescriptionSection>
          <h3>
            자기소개
          </h3>
          <p>{user.description.title} {user.description.context}</p>
        </UserDescriptionSection>
      } */}
      {/* User Description (자기소개) 부분 END*/}



      {data && careerYears && (
        <PartSection>
          <PartTitle>
            경력<span>{careerYears.years.year}년 {careerYears.years.year}개월차</span>
          </PartTitle>
          {
            data.careers.map((item: ResumeCareerData, index: number) => (
              <CareerProjectComponent
                key={`company-${index + 1}`}
                career={item}
                careerYear={data.careerYears[index]} />
            ))
          }

        </PartSection>
      )}
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

const PartSection = styled.div`
  display: flex;
  flex-direction: column;

  gap: 40px;
`

const PartTitle = styled.h2`
  display: flex;
  flex-direction: row;

  gap: 8px;
  align-items: end;

  font-size: 32px;
  font-weight: 700;

  & > span {
    font-size: 16px;
    font-weight: 600;
    color: ${colors.info};
    line-height: 100%;
  }
`