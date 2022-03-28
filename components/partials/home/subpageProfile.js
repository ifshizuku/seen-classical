import Image from "next/image";
import React from "react";
import Skills from "./skills";
import Social from "./social";
import siteConfig from "../../toconfig";

class SubpageProfile extends React.Component {
    render() {
        const zm = this.props.zenmode;
        return (
            <div
                id="subpage"
                className={[
                    "bg-zinc-800 bg-opacity-40 backdrop-blur-lg rounded-xl flex md:w-5/6 justify-center items-center mb-8 w-11/12 max-w-6xl",
                    zm ? "hidden" : "flex",
                ].join(" ")}>
                <div id="pt-container" className="pt-8 pl-8 pr-8 pb-10">
                    <div>
                        <h2 className="text-slate-50 text-3xl font-bold subpixel-antialiased">关于</h2>
                    </div>
                    <div id="profile" className="flex flex-col-reverse lg:flex-row justify-between items-center">
                        <div className="pt-5 lg:w-2/3 w-11/12">
                            <p className="text-slate-200 text-lg font-medium subpixel-antialiased mt-4 lg:mt-0">
                                {siteConfig.profile.intro}
                                <br />
                                {siteConfig.profile.bioOne}
                                <br />
                                {siteConfig.profile.bioTwo}
                            </p>
                            <br />
                            <p className="text-slate-300 text-lg font-regular subpixel-antialiased">{siteConfig.profile.description}</p>
                        </div>
                        <div className="lg:w-56 lg:h-56 w-44 h-44 lg:mr-4 mr-0 mt-6 lg:mt-0">
                            <Image
                                className="rounded-full"
                                src="https://seen-1302639736.file.myqcloud.com/site-data/homepage/avatar01.webp"
                                alt="Profile Avatar"
                                width={500}
                                height={500}
                            />
                        </div>
                    </div>
                    <div className="flex mt-10 flex-col">
                        <div>
                            <h3 className="text-slate-50 text-2xl font-bold subpixel-antialiased">技能点</h3>
                        </div>

                        <Skills />

                        <div>
                            <h3 className="text-slate-50 text-2xl font-bold subpixel-antialiased mt-8">Catch Me</h3>
                        </div>

                        <Social />
                    </div>
                </div>
            </div>
        );
    }
}

export default SubpageProfile;
