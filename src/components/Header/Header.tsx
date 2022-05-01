import * as Styled from 'components/Header/Header.style';

import Logo from 'components/Logo/Logo';
import Hamburger from 'components/Hamburger/Hamburger';
import Menu from 'components/Menu/Menu';
import { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <Styled.Wrapper>
            <Logo />
            <Hamburger onClick={toggleMobileMenu} isMenuOpen={isMenuOpen} />
            <Menu onClick={toggleMobileMenu} isOpen={isMenuOpen} />
        </Styled.Wrapper>
    );
};

export default Header;
