import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import * as Styled from 'components/Button/Button.style';

type Props = {
    text: string;
    icon?: IconDefinition;
    className?: string;

    onClick?: (e?: any) => void;
};

const Button = ({ text, icon, className, onClick }: Props) => (
    <Styled.Wrapper className={className} onClick={onClick} aria-label={text}>
        <span>{text}</span>
        {icon && <FontAwesomeIcon className="icon" icon={icon} />}
    </Styled.Wrapper>
);

export default Button;
