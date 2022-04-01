import { useState } from "react";
import classNames from "classnames";
import toast from "react-hot-toast";

function SvSocial(props) {
    const [isHoverOther, setHoverOther] = useState("none");
    const items = props.config.map((item) => <SingleSocial key={item.key} config={item} sho={(e) => setHoverOther(e)} ho={isHoverOther} />);
    return (
        <div id="sv-profile-social" className={classNames("pt-8")}>
            <div id="sv-profile-social-title" className={classNames("flex items-end xl:gap-3 gap-2.5")}>
                <i
                    id="sv-profile-social-icon"
                    className={classNames(
                        "fa-solid fa-hashtag",
                        "text-2xl text-transparent bg-clip-text bg-gradient-to-tr from-pink-400 to-pink-300",
                        "pb-0.5"
                    )}></i>
                <h2 id="sv-profile-skills-title-text" className={classNames("font-bold text-3xl text-white text-opacity-100 subpixel-antialiased")}>
                    Catch Me
                </h2>
            </div>
            <div
                id="sv-profile-social-content"
                className={classNames(
                    "flex flex-row flex-wrap sm:gap-6 gap-4 sm:justify-start",
                    "sm:pl-[2.4rem] sm:pr-[2.1rem] pl-[1.0rem] pr-[0.4rem] md:pt-5 pt-6"
                )}>
                {items}
            </div>
        </div>
    );
}

function SingleSocial(props) {
    return (
        <a
            id={"sv-social-" + props.config.key}
            className={classNames(
                "h-16 w-16",
                "rounded-[0.6rem]",
                "transition duration-300 hover:scale-110 hover:-translate-y-1",
                " from-orange-300 to-rose-300",
                props.ho == "none" || props.ho == props.config.key ? "opacity-100" : "opacity-60",
                props.config.hot ? "bg-gradient-to-tr" : "",
                "flex justify-center items-center"
            )}
            onMouseEnter={() => {
                props.sho(props.config.key);
            }}
            onMouseLeave={() => {
                props.sho("none");
            }}
            href={props.config.link}
            target="_blank"
            rel="noopener noreferrer"
            title={props.config.fullname}>
            <div
                id={"sv-social-" + props.config.key + "-icon"}
                className={classNames(
                    "w-[91%] h-[91%]",
                    "bg-zinc-600 rounded-lg transition duration-300",
                    "flex justify-center items-center",
                    props.config.hover
                )}>
                <i className={classNames(props.config.icon, "text-3xl text-white")}></i>
            </div>
        </a>
    );
}

export default SvSocial;
