import Link from 'next/link';
import * as Styled from 'pages/errorPage.style';

const InternalServerError = () => (
    <Styled.Wrapper>
        <h1>There was an internal server error!</h1>
        <Link href="/">
            <a>Return to Home</a>
        </Link>
    </Styled.Wrapper>
);

export default InternalServerError;