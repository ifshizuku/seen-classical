import HeadedView from "../components/partials/home/headedView";
import Layout from "../components/Layout";
import React, { useEffect } from "react";
import siteConfig from "../components/toConfig";
import toast, { Toaster } from "react-hot-toast";
import useNetwork from "../components/partials/global/hooks/useNetwork";

function HomePage() {
    const isOnline = useNetwork();
    console.log(isOnline);
    useEffect(() => {
        if (!isOnline) {
            toast.error("请检查您的网络连接！", {
                position: "bottom-right",
                autoClose: 3000,
            });
        }
        console.log(isOnline);
        return;
    });

    return (
        <Layout config={siteConfig.meta}>
            {/* <Script src="https://kit.fontawesome.com/867533c6ed.js" strategy="afterInteractive" /> */}
            <HeadedView config={siteConfig.headedView} />
            <Toaster />
        </Layout>
    );
}

export default HomePage;
