'use client'

import React, { useEffect, useState } from "react"
import { user } from "../../../../public/data/dummy/User"
import { UserInfoProps } from "@/types/User"
import { UserInfo, UserInfoBtn } from "@/_components/InfoComponent"
import styled from "styled-components"
import { ResumeCareerData, ResumeData, ResumeProjectData } from "@/types/mongo"
import MarkdownDisplay from "@/_components/MarkdownDisplay"


const ResumePage: React.FC<{ params: Promise<{ uid: string }> }> = () => {
  const [data, setData] = useState<ResumeData>();

  const fetchData = async () => {
    try {
      const response = await fetch('/api/resume');
      console.log(response)
      const result = await response.json();
      console.log(result)
      setData(result as ResumeData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!data) {
    return (
      <></>
    )
  }


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


      <section>
        {data && (
          data.careers.map((item: ResumeCareerData, index: number) => (
            <div key={`career-${item.order}-${index}`}>
              <MarkdownDisplay content={item.content} />
            </div>
          ))
        )}
      </section>

      <section>
        {data && (
          data.projects.map((item: ResumeProjectData, index: number) => (
            <div key={`projects-${item.order}-${index}`}>
              <MarkdownDisplay content={item.content} />
            </div>
          ))
        )}
      </section>

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

// const UserDescriptionSection = styled.section`
  
// `