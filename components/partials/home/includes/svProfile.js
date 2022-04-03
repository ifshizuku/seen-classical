import { Element } from 'react-scroll';
import classNames from "classnames";
import SvCard from "./svCard";
import SvAbout from "./svpartials/svAbout";
import SvSkills from "./svpartials/svSkills";
import SvSocial from "./svpartials/svSocial";

function SvProfile(props) {
    return (
        <Element name="sv-profile">
            <SvCard id="sv-profile" th="0.35">
                <div id="sv-profile-content" className={classNames("w-11/12", "pt-6 mb-10 mt-5")}>
                    <SvAbout config={props.config.profileInfo} />
                    <SvSkills config={props.config.skills} />
                    <SvSocial config={props.config.social} />
                </div>
            </SvCard>
        </Element>
    );
}

export default SvProfile;
