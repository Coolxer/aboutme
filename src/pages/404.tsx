import Link from 'next/link';
import * as Styled from 'pages/errorPage.style';

const NotFound = () => (
    <Styled.Wrapper>
        <h1>Page not found!</h1>
        <Link href="/">
            <a>Return to Home</a>
        </Link>
    </Styled.Wrapper>
);

export default NotFound;
