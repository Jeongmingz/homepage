import styled from "styled-components"
import { user } from "../../../public/data/dummy/User"
import { DescriptionProps } from "@/types/User"

export const MainSubDescription: React.FC = () => {
  return (
    <Container>
      {user.subDescription.map((subDescription: DescriptionProps, index: number) => (
        <div key={index}>{subDescription.title} {subDescription.context}</div>
      ))}
    </Container>
  )
}

const Container = styled.div`
`
