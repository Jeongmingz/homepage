import { ResumeCareerData, ResumeProjectData, YearsData } from "@/types/mongo";
import CareerComponent from "./CareerComponent";
import ProjectComponent from "./ProjectComponent";
import { useState, useRef, useEffect } from "react";
import styled from "styled-components";

interface CareerProjectProps {
  career: ResumeCareerData;
  careerYear: YearsData;
}

const CareerProjectComponent: React.FC<CareerProjectProps> = ({ career, careerYear }) => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const projectContainerRef = useRef<HTMLDivElement>(null);

  const dropdownShowToggleBtn = () => {
    setIsShow(!isShow);
  }

  useEffect(() => {
    if (projectContainerRef.current) {
      if (!isShow) {
        projectContainerRef.current.style.transition = 'none';
        requestAnimationFrame(() => {
          if (projectContainerRef.current) {
            projectContainerRef.current.style.transition = '';
          }
        });
      }
    }
  }, [isShow]);

  return (
    <>
      <CareerComponent
        date={career.date}
        years={careerYear.years}
        data={career}
      />
      <DropdownButton onClick={dropdownShowToggleBtn}>
        {isShow ? '' : `${career.name} 참여 프로젝트 확인하기`}
      </DropdownButton>
      <ProjectsContainer ref={projectContainerRef} $isShow={isShow}>
        <ProjectTitle>{career.name} 참여 프로젝트</ProjectTitle>
        <ProjectContainer>
          {career.projects.map((project: ResumeProjectData, projectIndex: number) => (
            <ProjectComponent key={`resume-project-${projectIndex + 1}`} project={project} />
          ))}
        </ProjectContainer>
      </ProjectsContainer>
    </>
  )
}

export default CareerProjectComponent;

const DropdownButton = styled.button`
  border: none;
  outline: none;
  background-color: inherit ;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.textTertiary}
  }
`;

const ProjectsContainer = styled.div<{ $isShow: boolean }>`
  display: flex;
  flex-direction: column;

  gap: 24px;

  opacity: ${props => props.$isShow ? '1' : '0'};
  overflow: hidden;
  transition: max-height 0.5s ease-out, opacity 0.3s ease-out;
  transform-origin: top;
  transform: ${props => props.$isShow ? 'scaleY(1)' : 'scaleY(0)'};
`;

const ProjectTitle = styled.h3`
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`