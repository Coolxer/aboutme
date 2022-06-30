import { useState } from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import * as Styled from 'components/ProjectBox/ProjectBox.style';
import Button from 'components/Button/Button';

type Props = {
    title: string;
    shortDescription: string;
    longDescription: string;
    githubLink: string;
};

const ProjectBox = ({
    title,
    shortDescription,
    longDescription,
    githubLink,
}: Props) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <Styled.Wrapper>
            <div className="header">{title.toUpperCase()}</div>
            <div className="description">
                <p>{isExpanded ? longDescription : shortDescription}</p>
            </div>
            <div className="buttons">
                {isExpanded ? (
                    <Button
                        text="Show less"
                        icon={faChevronUp}
                        onClick={() => setIsExpanded(false)}
                    />
                ) : (
                    <Button
                        text="Show more"
                        icon={faChevronDown}
                        onClick={() => setIsExpanded(true)}
                    />
                )}
                <a href={githubLink} target="_blank" rel="noreferrer">
                    <Button
                        text="Github"
                        icon={faGithub}
                        onClick={(): void => {}}
                    />
                </a>
            </div>
        </Styled.Wrapper>
    );
};

export default ProjectBox;