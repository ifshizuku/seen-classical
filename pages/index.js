import HeadedView from "../components/partials/home/headedView";
import Layout from "../components/Layout";
import React from "react";
import siteConfig from "../components/toConfig";
import Script from 'next/script'

function HomePage() {
    return (
        <Layout config={siteConfig.meta}>
            {/* <Script src="https://kit.fontawesome.com/867533c6ed.js" strategy="afterInteractive" /> */}
            <HeadedView config={siteConfig.headedView} />
        </Layout>
    );
}

export default HomePage;
