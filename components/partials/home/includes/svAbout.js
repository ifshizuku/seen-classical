import classNames from "classnames";
import Image from "next/image";

function SvAbout(props) {
    return (
        <div id="sv-profile-about">
            <div id="sv-profile-about-title" className={classNames("flex items-end xl:gap-3 gap-2.5")}>
                <i
                    id="sv-profile-about-icon"
                    className={classNames("fa-solid fa-hashtag", "text-3xl text-transparent bg-clip-text bg-gradient-to-tr from-indigo-400 to-indigo-300")}></i>
                <h2 id="sv-profile-about-title-text" className={classNames("font-bold text-4xl text-white text-opacity-100 subpixel-antialiased")}>
                    关于
                </h2>
                <button
                    id="sv-profile-about-button"
                    className={classNames(
                        "pt-0.5 pb-0.5 pl-4 pr-4",
                        "bg-zinc-500 rounded-md",
                        "text-white text-lg text-opacity-70 font-medium subpixel-antialiased"
                    )}>
                    历程
                </button>
            </div>
            <div
                id="sv-profile-about-content"
                className={classNames(
                    "flex flex-col-reverse md:flex-row justify-between items-center",
                    "sm:pl-[2.4rem] sm:pr-[2.1rem] pl-[1.2rem] pr-[1.0rem] md:pt-2.5 pt-6"
                )}>
                <div id="sv-profile-about-content-left" className={classNames("lg:basis-[56%] md:basis-[62%] sm:pt-0 mt-8")}>
                    <p id="sv-profile-about-intro" className={classNames("text-xl text-white text-opacity-95 font-bold")}>
                        {props.config.intro}
                    </p>
                    <p id="sv-profile-about-bio" className={classNames("text-xl text-white text-opacity-80 font-bold", "mt-2.5")}>
                        {props.config.bio}
                    </p>
                    <p id="sv-profile-about-description" className={classNames("text-xl text-white text-opacity-60", "mt-2.5")}>
                        {props.config.description}
                    </p>
                </div>
                <div
                    id="sv-profile-about-content-right"
                    className={classNames("xl:basis-[25%] lg:basis-[28%] md:basis-[32%] sm:w-64 w-56 sm:pt-0 pt-6", "select-none")}>
                    <Image className="rounded-full" src={props.config.avatar} alt="Profile Avatar" width={500} height={500} priority/>
                </div>
            </div>
        </div>
    );
}

export default SvAbout;
