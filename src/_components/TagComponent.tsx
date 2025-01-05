'use client'

import { SkillTagProps, TagContainerProps, TagProps } from "@/types/tag"
import styled from "styled-components"

export const Tag: React.FC<TagProps> = ({ title, subTitle }) => {
  return (
    <></>
  )
}

export const SkillTag: React.FC<SkillTagProps> = ({ img, name }) => {
  return (
    <></>
  )
}

export const ThemeToggleTag: React.FC = () => {
  return (
    <></>
  )
}




export const SkillTagContainer: React.FC<TagContainerProps> = ({ children }) => {
  const Container = styled.div`
    display: flex;
    flex-direction: row;

    gap: 24px;
  `

  return (
    <Container>
      {children}
    </Container>
  )

}

