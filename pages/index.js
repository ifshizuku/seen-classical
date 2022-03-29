import HeadedView from "../components/partials/home/headedView";
import Layout from "../components/Layout";
import React from "react";
import siteConfig from "../components/toConfig";

function HomePage() {
    return (
        <Layout config={siteConfig.meta}>
            <HeadedView config={siteConfig.headedView} />
        </Layout>
    );
}

export default HomePage;
