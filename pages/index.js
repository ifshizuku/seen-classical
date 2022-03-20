import HomepageLayout from "../components/homepageLayout";
import SubpageProfile from "../components/subpageProfile";
import React from "react";

function HomePage() {
    return (
        <div id="wrap">
            {/* Background */}
            <div
                id="background"
                className="transition w-full h-full bg-cover bg-center bg-fixed bg-[url('https://seen-1302639736.file.myqcloud.com/site-data/homepage/bg-05.webp')] -z-10">
                {/* Content */}
                <div id="content" className="flex w-screen justify-center items-center flex-col h-full">
                    <HomepageLayout />

                    <SubpageProfile />
                </div>
            </div>
        </div>
    );
}

export default HomePage;
