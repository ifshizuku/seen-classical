import { useState, useEffect } from "react";
import classNames from "classnames";
import toast from "react-hot-toast";

function SvSkills(props) {
    const [isHoverOther, setHoverOther] = useState("none");
    const items = props.config.map((item) => <SingleSkill key={item.key} config={item} sho={(e) => setHoverOther(e)} ho={isHoverOther} />);
    return (
        <div id="sv-profile-skills" className={classNames("pt-6")}>
            {" "}
            <div id="sv-profile-skills-title" className={classNames("flex items-end xl:gap-3 gap-2.5")}>
                <i
                    id="sv-profile-skills-icon"
                    className={classNames("fa-solid fa-hashtag", "text-2xl text-transparent bg-clip-text bg-gradient-to-tr from-pink-400 to-pink-300")}></i>
                <h2 id="sv-profile-skills-title-text" className={classNames("font-bold text-3xl text-white text-opacity-100 subpixel-antialiased")}>
                    技能点
                </h2>
            </div>
            <div
                id="sv-profile-skills-content"
                className={classNames(
                    "flex flex-row flex-wrap sm:gap-8 gap-6 sm:justify-start justify-center",
                    "sm:pl-[2.4rem] sm:pr-[2.1rem] pl-[1.0rem] pr-[1.0rem] md:pt-5 pt-6"
                )}>
                {items}
            </div>
        </div>
    );
}

function SingleSkill(props) {
    const [isHover, setIsHover] = useState(false);
    return (
        <div
            id={"sv-skill-" + props.config.key}
            className={classNames(
                "bg-zinc-500 rounded-lg transition duration-300 hover:scale-110 hover:-translate-y-1 bg-opacity-60",
                props.config.hover,
                "h-20 sm:pl-6 sm:pr-6 w-20 sm:w-auto",
                "flex gap-3.5 items-center justify-center",
                props.ho == "none" || props.ho == props.config.key ? "opacity-100" : "opacity-60"
            )}
            onMouseEnter={() => {
                setIsHover(true);
                props.sho(props.config.key);
            }}
            onMouseLeave={() => {
                setIsHover(false);
                props.sho("none");
            }}
            onClick={() => {
                toast.success(props.config.fullname + " 进度：" + props.config.progress, {
                    duration: 2200,
                    position: "top-right",
                    id: props.config.key,
                });
            }}
            tabIndex="1">
            <div id={"sv-skill-" + props.config.key + "-left"}>
                <i
                    id={"sv-skill-" + props.config.key + "-icon"}
                    className={classNames(props.config.faicon, props.config.refix ? "text-3xl" : "text-4xl", "transition duration-300")}
                    style={{ color: isHover ? "#fff" : props.config.brandColor }}></i>
            </div>
            <div id={"sv-skill-" + props.config.key + "-right"} className={classNames("sm:flex sm:flex-col", "hidden")}>
                <h3
                    id={"sv-skill-" + props.config.key + "-title"}
                    className={classNames("font-medium text-2xl text-white text-opacity-95 subpixel-antialiased", "select-none", "transition-all")}>
                    {props.config.fullname}
                </h3>
                <div
                    id={"sv-skill-" + props.config.key + "-process-back"}
                    className={classNames("w-full transition-all duration-200", isHover ? "h-3" : "h-0", "bg-white bg-opacity-20 rounded-full")}>
                    <div
                        id={"sv-skill-" + props.config.key + "-process-front"}
                        className={classNames("transition-all duration-200", isHover ? "h-3" : "h-0", "bg-white bg-opacity-75 rounded-full")}
                        style={{ width: props.config.progress }}></div>
                </div>
            </div>
        </div>
    );
}

export default SvSkills;
