import HomepageLayout from "../components/homepageLayout";
import SubpageProfile from "../components/subpageProfile";
import React from "react";

function HomePage() {
    return (
        <div id="wrap">
            {/* Background */}
            <div
                id="background"
                className="w-full h-screen bg-cover bg-center fixed bg-[url('https://seen-1302639736.file.myqcloud.com/site-data/homepage/bg-03.webp')] -z-10"></div>

            {/* Content */}
            <div id="content" className="flex w-screen justify-center items-center flex-col h-full">
                <HomepageLayout />

                <SubpageProfile />

            </div>
        </div>
    );
}

export default HomePage;
