import { Html, Head, Main, NextScript } from 'next/document';
import SEO from 'components/SEO/seo';

const Document = () => (
    <Html lang="pl ">
        <Head>
            <SEO />

            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossOrigin="true"
            />
            <link
                href="https://fonts.googleapis.com/css2?family=Caveat&family=Roboto:wght@100&display=swap"
                rel="stylesheet"
            />
        </Head>
        <body>
            <Main />
            <NextScript />
        </body>
    </Html>
);

export default Document;
