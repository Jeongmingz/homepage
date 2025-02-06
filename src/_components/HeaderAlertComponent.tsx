import { colors } from "@/styles/colors";
import { RiCloseLargeFill } from "react-icons/ri";
import styled from "styled-components";

interface HeaderAlertProps {
  isShow: boolean;
  alertClose: () => void;
  children: React.ReactNode;
}

const HeaderAlertComponent: React.FC<HeaderAlertProps> = ({
  isShow,
  alertClose,
  children
}) => {
  return (
    <Container>
      {children}
      <CloseBtn onClick={alertClose}>
        <RiCloseLargeFill />
      </CloseBtn>
    </Container>
  )
}

export default HeaderAlertComponent

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 80%;

  position: fixed;
  top: 0;
  left: 0;

  background-color: ${colors.gray200};
  color: ${colors.black};

  padding: 8px 10%;
  z-index: 10;

  & > span {
    font-size: 14px;
  }

  @media (max-width: 500px) {
    width: calc(100% - 40px);
    padding: 6px 20px;
  }

`

const CloseBtn = styled.div`
  cursor: pointer;
`