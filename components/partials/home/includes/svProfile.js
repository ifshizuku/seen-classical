import classNames from "classnames";
import SvAbout from "./svAbout";
import SvSkills from "./svSkills";

function SvProfile(props) {
    return (
        <div
            id="sv-profile"
            className={classNames(
                "w-full",
                "md:border-4 rounded-2xl border-slate-200",
                "flex justify-center    ",
                "bg-zinc-700 md:bg-opacity-90 bg-opacity-80",
                "mt-10"
            )}>
            <div id="sv-profile-content" className={classNames("w-11/12", "pt-6 mb-10 mt-5")}>
                <SvAbout config={props.config.profileInfo} />
                <SvSkills config={props.config.skills} />
            </div>
        </div>
    );
}

export default SvProfile;
