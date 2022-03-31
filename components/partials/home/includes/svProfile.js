import classNames from "classnames";

function SvProfile(props) {
    return (
        <div
            id="sv-profile"
            className={classNames(
                "w-full",
                "md:border-4 rounded-2xl border-slate-200",
                "flex justify-center",
                "bg-zinc-700 md:bg-opacity-90 bg-opacity-80",
                "mt-10"
            )}>
            <div id="sv-profile-content" className={classNames("w-11/12", "pt-6")}>
                <div id="sv-profile-about-title" className={classNames("flex items-end xl:gap-3 gap-2.5")}>
                    <i
                        id="hv-dynamic-status-more-icon"
                        className={classNames(
                            "fa-solid fa-hashtag",
                            "text-3xl text-transparent bg-clip-text bg-gradient-to-tr from-indigo-400 to-indigo-300"
                        )}></i>
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
                <div id="sv-profile-about-content" className={classNames("flex", "pl-[2.4rem] pt-3.5")}>
                    <div id="sv-profile-about-content-left" className={classNames("")}>
                        <p id="sv-profile-about-intro" className={classNames("text-xl text-white text-opacity-95 font-bold")}>
                            {props.config.intro}
                        </p>
                        <p id="sv-profile-about-description" className={classNames("text-xl text-white text-opacity-90")}>
                            {props.config.description}
                        </p>
                    </div>
                    <div id="sv-profile-about-content-right" className={classNames("")}>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SvProfile;
