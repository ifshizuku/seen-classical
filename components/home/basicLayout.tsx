import React from "react"
import Head from "next/head"

// Define Type for Props
interface Props {
    config: {
        siteTitle: string
        siteAuthor: string
        siteDescription: string
        og: {
            image: string
            title: string
            description: string
            locale: string
            siteName: string
        }
        tw: {
            title: string
            card: string
            link: string
            creator: string
            description: string
            image: string
        }
        pwa: {
            name: string
            appleMobileWebAppTitle: string
            theme: string
        }
    }
    children?: React.ReactNode
}

// Wrap Function
function Wrap({ config, children }: Props) {
    return (
        <div id="wrap" className="w-full h-full ">
            {/* Meta Data */}
            <Head>
                <meta charSet="utf-8" />
                <title>{config.siteTitle}</title>
                <meta name="author" content={config.siteAuthor} />
                <meta name="description" content={config.siteDescription} />

                <meta
                    name="viewport"
                    content="width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
                />

                {/* Facebook Open Graph */}
                <meta property="og:image" content={config.og.image} />
                <meta property="og:title" content={config.og.title}></meta>
                <meta
                    property="og:description"
                    content={config.og.description}
                />
                <meta property="og:locale" content={config.og.locale} />
                <meta property="og:site_name" content={config.og.siteName} />

                {/* Twitter */}
                <meta name="twitter:title" content={config.tw.title} />
                <meta name="twitter:card" content={config.tw.card} />
                <meta name="twitter:url" content={config.tw.link} />
                <meta
                    name="twitter:description"
                    content={config.tw.description}
                />
                <meta name="twitter:image" content={config.tw.image} />
                <meta name="twitter:creator" content={config.tw.creator} />

                {/* PWA */}
                <meta name="application-name" content={config.pwa.name} />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta
                    name="apple-mobile-web-app-status-bar-style"
                    content="default"
                />
                <meta
                    name="apple-mobile-web-app-title"
                    content={config.pwa.appleMobileWebAppTitle}
                />
                <meta
                    name="format-detection"
                    content="telephone=no,email=no,adress=no"
                />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta
                    name="msapplication-config"
                    content="/icons/browserconfig.xml"
                />
                <meta
                    name="msapplication-TileColor"
                    content={config.pwa.theme}
                />
                <meta name="msapplication-tap-highlight" content="no" />
                <meta name="theme-color" content={config.pwa.theme} />

                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/icons/apple-touch-icon.png"
                />

                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/icons/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/icons/favicon-16x16.png"
                />
                {/* <link rel="manifest" href="/site.webmanifest" /> */}
                <link
                    rel="mask-icon"
                    href="/icons/safari-pinned-tab.svg"
                    color={config.pwa.theme}
                />
                <link rel="shortcut icon" href="/icons/favicon.ico" />

                <link
                    rel="apple-touch-startup-image"
                    href="/splash/apple-splash-2048-2732.jpg"
                    media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
                />
                <link
                    rel="apple-touch-startup-image"
                    href="/splash/apple-splash-1668-2224.jpg"
                    media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
                />
                <link
                    rel="apple-touch-startup-image"
                    href="/splash/apple-splash-1125-2436.jpg"
                    media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
                />
                <link
                    rel="apple-touch-startup-image"
                    href="/splash/apple-splash-1242-2688.jpg"
                    media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
                />
                <link
                    rel="apple-touch-startup-image"
                    href="/splash/apple-splash-1242-2208.jpg"
                    media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
                />
                <link
                    rel="apple-touch-startup-image"
                    href="/splash/apple-splash-750-1334.jpg"
                    media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
                />
                <link
                    rel="apple-touch-startup-image"
                    href="/splash/apple-splash-640-1136.jpg"
                    media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
                />
            </Head>

            {/* Children */}
            {children}
        </div>
    )
}

export default Wrap
