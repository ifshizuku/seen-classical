import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import siteConfig from "./toconfig";

class Sidebar extends React.Component {
    render() {
        const sb = this.props.sidebar;
        const menuMobile = siteConfig.nav.menu.map((item) => {
            return (
                <a key={["mobile-" + item.key]} href={item.url} rel="noopener noreferrer" target="_blank">
                    <div className="mt-8 flex items-end">
                        <FontAwesomeIcon size="lg" icon={solid("hashtag")} className="pb-1 pr-2" color={"#a78bfa"} />
                        <h2 className="text-3xl font-bold text-white text-opacity-75 select-none">{item.name}</h2>
                    </div>
                </a>
            );
        });
        return (
            <div
                className={[
                    "top-0 right-0 w-4/5 bg-white bg-opacity-20 backdrop-blur-md pt-10 pl-6 pr-6  text-white fixed h-full rounded-bl-xl rounded-tl-xl flex flex-col items-end transition duration-500 ease-in-out transform-gpu",
                    sb ? "translate-x-0" : "translate-x-full",
                ].join(" ")}>
                <FontAwesomeIcon
                    icon={solid("close")}
                    className="text-white text-2xl pr-2"
                    onClick={this.props.toggleSidebar}
                    onKeyDown={this.props.toggleSidebar}
                />
                <div className="flex flex-col mt-10 items-end w-full mr-2">{menuMobile}</div>
            </div>
        );
    }
}

export default Sidebar;
