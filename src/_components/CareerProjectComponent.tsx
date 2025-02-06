import { ResumeCareerData, ResumeProjectData, YearsData } from "@/types/mongo";
import CareerComponent from "./CareerComponent";
import ProjectComponent from "./ProjectComponent";
import styled from "styled-components";

interface CareerProjectProps {
  career: ResumeCareerData;
  careerYear: YearsData;
}

const CareerProjectComponent: React.FC<CareerProjectProps> = ({ career, careerYear }) => {

  return (
    <Container>
      <CareerComponent
        date={career.date}
        years={careerYear.years}
        data={career}
      />
      {
        career.projects.length != 0 &&
        <ProjectsContainer>
          <ProjectTitle>{career.name} 참여 프로젝트</ProjectTitle>
          <ProjectContainer>
            {career.projects.map((project: ResumeProjectData, projectIndex: number) => (
              <ProjectComponent key={`resume-project-${projectIndex + 1}`} project={project} />
            ))}
          </ProjectContainer>
        </ProjectsContainer>
      }
    </Container>
  )
}

export default CareerProjectComponent;


const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`


const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 24px;
`;

const ProjectTitle = styled.h3`
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`