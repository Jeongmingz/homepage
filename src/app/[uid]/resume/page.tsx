'use client'

import React, { use } from "react"
import styled, { useTheme } from "styled-components"
import { user } from "../../../../public/data/dummy/User"
import { UserInfoProps } from "@/types/User"
import { UserInfo, UserInfoBtn } from "@/_components/InfoComponent"



const ResumePage: React.FC<{ params: Promise<{ uid: string }> }> = ({
  params,
}) => {

  const { uid } = use(params);
  const theme = useTheme();

  console.log(uid)

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
              <UserInfo key={user.name + "_" + item.title} title={item.title} url={item.url} type={item.type} clickAble={item.clickAble} theme={theme} />
            ))}
          </UserInfoStringContainer>
          <UserInfoBtnContainer>
            {user.info.map((item: UserInfoProps) => (
              item.type == "SNS" &&
              <UserInfoBtn key={user.name + "_" + item.title} title={item.title} url={item.url} type={item.type} clickAble={item.clickAble} theme={theme} />
            ))}
          </UserInfoBtnContainer>
        </UserInfoContainer>
      </Header>
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
