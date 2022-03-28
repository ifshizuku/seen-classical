import React from "react";
import siteConfig from "../../toconfig";

class SignSentence extends React.Component {
    render() {
        const zm = this.props.zenmode;
        return (
            <div id="sentence" className={["flex transition duration-500", zm ? "opacity-0" : "opacity-100"].join(" ")}>
                <h2
                    id="sign"
                    className="transition duration-200 text-white text-opacity-40 subpixel-antialiased font-bold text-xl hover:text-opacity-95 select-none lg:pl-0 pl-2">
                    {siteConfig.nav.sign}
                </h2>
            </div>
        );
    }
}

export default SignSentence;
