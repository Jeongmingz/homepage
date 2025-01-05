'use client'

import styled from "styled-components";
import { user } from "../../public/data/dummy/User";
import { UserInfo, UserInfoBtn } from "./InfoComponent";
import { UserInfoProps } from "@/types/User";

const MainHeader: React.FC = () => {
  return (
    <Header>
      <h1>
        {user.name}.
      </h1>

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
  )
}

export default MainHeader;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  justify-content: center;
  align-items: center;

  gap: 16px;
`;


const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-self: flex-end;
  justify-self: end;

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