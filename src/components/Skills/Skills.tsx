import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
    faCss3Alt,
    faGit,
    faHtml5,
    faJs,
    faLinux,
    faPhp,
    faPython,
    faReact,
    faSass,
    faSuperpowers,
    faTrello,
    faVuejs,
    faWordpress,
} from '@fortawesome/free-brands-svg-icons';
import {
    faC,
    faDatabase,
    faMicrochip,
    faUserGraduate,
} from '@fortawesome/free-solid-svg-icons';

import * as Styled from 'components/Skills/Skills.style';
import SectionHeader from 'components/SectionHeader/SectionHeader';

const Skills = () => (
    <Styled.Wrapper>
        <SectionHeader
            text="skills"
            icon={faSuperpowers}
            className="mobile-header"
        />
        <div className="skill-box">
            <div className="skills-row">
                <div className="skill-col">
                    <FontAwesomeIcon
                        icon={faHtml5 as IconProp}
                        className="skill-item"
                    />
                </div>
                <div className="skill-col">
                    <FontAwesomeIcon icon={faCss3Alt} className="skill-item" />
                </div>
                <div className="skill-col">
                    <FontAwesomeIcon icon={faJs} className="skill-item" />
                </div>
            </div>
            <hr />
            <div className="skills-row">
                <div className="skill-col">
                    <FontAwesomeIcon icon={faPhp} className="skill-item" />
                </div>

                <div className="skill-col">
                    <FontAwesomeIcon icon={faSass} className="skill-item" />
                </div>

                <div className="skill-col">
                    <FontAwesomeIcon icon={faDatabase} className="skill-item" />
                </div>
            </div>
            <hr />
            <div className="skills-row">
                <div className="skill-col">
                    <FontAwesomeIcon icon={faReact} className="skill-item" />
                </div>
                <div className="skill-col">
                    <FontAwesomeIcon icon={faVuejs} className="skill-item" />
                </div>
                <div className="skill-col">
                    <FontAwesomeIcon
                        icon={faWordpress}
                        className="skill-item"
                    />
                </div>
            </div>
            <hr />
            <div className="skills-row">
                <div className="skill-col">
                    <FontAwesomeIcon icon={faPython} className="skill-item" />
                </div>
                <div className="skill-col">
                    <FontAwesomeIcon icon={faC} className="skill-item" />
                </div>
                <div className="skill-col">
                    <FontAwesomeIcon
                        icon={faMicrochip}
                        className="skill-item"
                    />
                </div>
            </div>
            <hr />
            <div className="skills-row">
                <div className="skill-col">
                    <FontAwesomeIcon icon={faGit} className="skill-item" />
                </div>
                <div className="skill-col">
                    <FontAwesomeIcon icon={faTrello} className="skill-item" />
                </div>
                <div className="skill-col">
                    <FontAwesomeIcon icon={faLinux} className="skill-item" />
                </div>
            </div>
        </div>
        <div className="description">
            <SectionHeader
                text="skills"
                icon={faSuperpowers}
                className="desktop-header"
            />
            <article>
                <p>
                    Here are the basic technologies I know. There are some
                    general things like SQL database, git, linux, python and
                    otherwise some tech-cases like frameworks or libraries.
                </p>
                <br />
                <p>
                    If you do not see technology you are looking for, do not
                    worry - I can learn really quickly, based on things I
                    already learned.
                </p>
                <br />
                <p>
                    I also have a general knowledge from engineering study like
                    computer science architecture, networking and information
                    looking.
                </p>
            </article>
            <div className="graduate-icon-wrapper">
                <FontAwesomeIcon
                    className="graduate-icon"
                    icon={faUserGraduate}
                />
            </div>
        </div>
    </Styled.Wrapper>
);

export default Skills;
