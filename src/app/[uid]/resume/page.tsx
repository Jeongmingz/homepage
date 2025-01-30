'use client'

import React from "react"
import { user } from "../../../../public/data/dummy/User"
import { UserInfoProps } from "@/types/User"
import { UserInfo, UserInfoBtn } from "@/_components/InfoComponent"
import styled from "styled-components"
import MarkdownEditor from '../../../_components/MarkdownEditor';



const ResumePage: React.FC<{ params: Promise<{ uid: string }> }> = ({ }) => {


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
      {user.description &&
        <UserDescriptionSection>
          <h3>
            자기소개
          </h3>
          <p>{user.description.title} {user.description.context}</p>
        </UserDescriptionSection>
      }
      {/* User Description (자기소개) 부분 END*/}

      <MarkdownEditor />

    </main>
  )
}


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

const UserDescriptionSection = styled.section`
  
`