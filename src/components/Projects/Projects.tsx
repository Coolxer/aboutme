import { faDiagramProject } from '@fortawesome/free-solid-svg-icons';

import * as Styled from 'components/Projects/Projects.style';
import SectionHeader from 'components/SectionHeader/SectionHeader';
import ProjectBox from 'components/ProjectBox/ProjectBox';

const Projects = () => (
    <Styled.Wrapper>
        <SectionHeader text="projects" icon={faDiagramProject} />
        <ProjectBox
            title="HOP-15"
            shortDescription="Arduino-based machine control system"
            longDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            githubLink="https://github.com/coolxer/hop-15"
        />

        <ProjectBox
            title="HOP-15"
            shortDescription="Arduino-based machine control system"
            longDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            githubLink="https://github.com/coolxer/hop-15"
        />

        <ProjectBox
            title="HOP-15"
            shortDescription="Arduino-based machine control system"
            longDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            githubLink="https://github.com/coolxer/hop-15"
        />
    </Styled.Wrapper>
);

export default Projects;