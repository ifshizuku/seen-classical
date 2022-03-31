import HeadedView from "../components/partials/home/headedView";
import SecondaryView from "../components/partials/home/secondaryView";
import Layout from "../components/Layout";
import React, { useEffect } from "react";
import siteConfig from "../components/toConfig";
import Script from "next/script";
import toast, { Toaster } from "react-hot-toast";
import useNetwork from "../components/partials/global/hooks/useNetwork";

function HomePage() {
    const isOnline = useNetwork();
    useEffect(() => {
        if (!isOnline) {
            toast.error("您正在浏览一个离线页面", {
                position: "bottom-right",
                autoClose: 3000,
            });
        }
        console.log(["📎 网络状态：", isOnline ? "在线" : "离线"].join(""));
        return;
    });

    return (
        <Layout config={siteConfig.meta}>
            <Script src="https://kit.fontawesome.com/867533c6ed.js" strategy="afterInteractive" />
            <HeadedView config={siteConfig.headedView} />
            <SecondaryView config={siteConfig.secondaryView} />
            <Toaster />
        </Layout>
    );
}

export default HomePage;
