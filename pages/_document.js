import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="zh-CN">
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;600;700&display=swap"
                    rel="stylesheet"
                />
                <link rel="preconnect" href="https://v1.hitokoto.cn"></link>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
