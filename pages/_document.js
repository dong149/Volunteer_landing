import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@material-ui/styles";
export default class RootDocument extends Document {
    render() {
        return (
            <html lang="ko">
                <Head>
                    <meta charSet="UTF-8" />
                    {/* <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/icons/main-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/icons/favicon-16x16.png"
          /> */}
                    <link rel="shortcut icon" href="/icons/favicon.ico" />
                    <meta name="msapplication-TileColor" content="#fafafa" />
                    {/* <meta name="msapplication-TileImage" content="/icons/main-icon.png" /> */}
                    <meta name="theme-color" content="#fafafa" />
                    {/* <link rel="canonical" href="https://rollingpaper.website/" /> */}
                    <meta property="og:title" content="보건의료통합봉사회" />
                    <meta property="og:type" content="website" />
                    {/* <meta property="og:image" content="/mockup_mobile.png" /> */}
                    {/* <meta property="og:url" content="https://rollingpaper.website" /> */}
                    <meta property="site_title" content="보건의료통합봉사회" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}

RootDocument.getInitialProps = async (ctx) => {
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
        });

    const initialProps = await Document.getInitialProps(ctx);

    return {
        ...initialProps,
        styles: [
            ...React.Children.toArray(initialProps.styles),
            sheets.getStyleElement(),
        ],
    };
};