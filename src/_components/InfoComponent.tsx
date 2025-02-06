"use client";

import { UserInfoProps } from "@/types/User";
import Link from "next/link";
import styled from "styled-components";
import { Tooltip } from "react-tooltip";
import { mailtoFormatter, telFormatter } from "@/lib/functions";
import { FaBlog, FaGithub, FaInstagram } from "react-icons/fa";

export const UserInfoBtn: React.FC<Omit<UserInfoProps, 'theme'>> = ({
  title,
  url,
}) => {
  return (
    <LinkBtnContainer>
      <Tooltip id={`link_tooltip_` + title} />
      <UserLink
        href={url.base + url.context}
        target="_blank"
        data-tooltip-id={`link_tooltip_` + title}
        data-tooltip-content={title}
        data-tooltip-place="top"
      >
        {title === "인스타그램" && (
          <FaInstagram size={30} />
        )}
        {title === "깃허브" && (
          <FaGithub size={30} />
        )}
        {title === "티스토리" && (
          <FaBlog size={30} />
        )}
      </UserLink>
    </LinkBtnContainer>
  );
};

export const UserInfo: React.FC<UserInfoProps> = ({
  title,
  url,
  type,
}) => {
  return (
    <LinkContainer>
      <Title>
        {title}
      </Title>
      <Context>
        {type == "tel" && telFormatter(url.context)}

        {type == "email" && (
          <Link href={mailtoFormatter(url.context)} target="_blank">{url.context}</Link>
        )}
      </Context>

    </LinkContainer>
  )
}


const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  transition: width 0.3s ease;
`;

const LinkBtnContainer = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  overflow: hidden;
  transition: width 0.3s ease;
`;

const UserLink = styled(Link)`
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
`;

const Title = styled.span`
  font-size: 1.125rem;
  min-width: 75px;
`

const Context = styled.span`
`
