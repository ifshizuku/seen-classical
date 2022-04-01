import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import classNames from "classnames";

function SvConnect(props) {
    const { svm, inView, entry } = useInView({
        /* Optional options */
        threshold: 0.5,
    });
    return (
        <div
            id="sv-connect"
            className={classNames(
                "w-full h-screenh-screen",
                "rounded-2xl border-slate-200",
                "flex justify-center",
                "bg-zinc-700 md:bg-opacity-90 bg-opacity-80",
                "mt-24",
                inView ? "md:border-4" : "border-0"
            )}
            ref={svm}>
            <div id="sv-profile-content" className={classNames("w-11/12", "pt-6 mb-10 mt-5")}>
                <div id="sv-profile-about-title" className={classNames("flex items-end xl:gap-3 gap-2.5")}>
                    <i
                        id="sv-profile-about-icon"
                        className={classNames(
                            "fa-solid fa-hashtag",
                            "text-3xl text-transparent bg-clip-text bg-gradient-to-tr from-indigo-400 to-indigo-300"
                        )}></i>
                    <h2 id="sv-profile-about-title-text" className={classNames("font-bold text-4xl text-white text-opacity-100 subpixel-antialiased")}>
                        开始连接
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default SvConnect;
