import { useInView } from "react-intersection-observer";
import classNames from "classnames";
import SvAbout from "./svAbout";
import SvSkills from "./svSkills";
import SvSocial from "./svSocial";

function SvProfile(props) {
    const [svp, inView, entry] = useInView({
        /* Optional options */
        threshold: 0.4,
    });
    return (
        <div
            id="sv-profile"
            className={classNames(
                "w-full",
                "rounded-2xl outline-slate-200 outline",
                "flex justify-center transition-all duration-200 transform-gpu",
                "bg-zinc-700 md:bg-opacity-90 bg-opacity-80",
                "mt-10",
                inView ? "md:outline-4" : "outline-0"
            )}
            ref={svp}>
            <div id="sv-profile-content" className={classNames("w-11/12", "pt-6 mb-10 mt-5")}>
                <SvAbout config={props.config.profileInfo} />
                <SvSkills config={props.config.skills} />
                <SvSocial config={props.config.social} />
            </div>
        </div>
    );
}

export default SvProfile;
