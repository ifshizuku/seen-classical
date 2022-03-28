import React from "react";
import siteConfig from "../../toconfig";

class MainTitle extends React.Component {
    render() {
        const zm = this.props.zenmode;
        return (
            <div
            id="main-title"
            className={[
                "flex justify-center transition duration-700 ease-in-out",
                zm ? "scale-110" : "scale-100",
            ].join(" ")}
            onClick={this.props.toggleZen}
            onKeyDown={this.props.toggleZen}
            role="button">
            <div className="flex flex-col justify-center items-center">
                <h2 id="title" className="text-8xl text-gray-100 select-none sm:text-9xl subpixel-antialiased">
                    {siteConfig.nav.title}
                </h2>
                <p className="text-white text-opacity-30 font-semibold text-lg select-none subpixel-antialiased">
                    {siteConfig.nav.subtitle}
                </p>
            </div>
        </div>
        )
    }
}

export default MainTitle;