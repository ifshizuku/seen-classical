import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import MainTitle from "./mainTitle";
import React from "react";
import SignSentence from "./signSentence";
import siteConfig from "../../toconfig";

class HomepageLayout extends React.Component {
    constructor(props) {
        super(props);
        const menul = siteConfig.nav.menu.map;
        this.state = {
            [menul.key + "hover"]: false,
        };
    }

    render() {
        const zm = this.props.zenmode;
        const menuItem = siteConfig.nav.menu.map((item) => {
            return (
                <a key={item.key} id={["menu_" + item.key]} href={item.url} rel="noopener noreferrer" target="_blank">
                    <div
                        className="transition duration-200 pl-3 pr-3  h-full flex justify-center items-center rounded-lg ease-in-out hover:scale-105 hover:bg-slate-100"
                        onMouseEnter={() => {
                            this.setState({
                                [item.key + "hover"]: true,
                            });
                        }}
                        onMouseLeave={() => {
                            this.setState({
                                [item.key + "hover"]: false,
                            });
                        }}>
                        <h2
                            id={["menuin_" + item.key]}
                            className={[
                                "subpixel-antialiased font-semibold text-md select-none transition",
                                this.state[item.key + "hover"]
                                    ? "text-black text-opacity-90"
                                    : "text-white text-opacity-60",
                            ].join(" ")}>
                            {item.name}
                        </h2>
                    </div>
                </a>
            );
        });

        return (
            <div id="main" className="flex flex-col justify-between overflow-scroll h-screen max-w-screen-2xl">
                {/* Top Bar */}
                <div id="topbar" className="flex justify-between items-center pt-6">

                    <SignSentence zenmode={zm} />

                    <div
                        id="intro"
                        className={[
                            "pl-2 pr-4 h-12 bg-opacity-10 bg-white rounded-lg hidden sm:flex sm:justify-evenly backdrop-filter backdrop-blur-xl transition duration-500",
                            zm ? "opacity-0" : "opacity-100",
                        ].join(" ")}>
                        <div
                            id="expend-button"
                            className="pl-4 pr-4 h-full flex justify-center items-center"
                            onClick={this.props.toggleZen}
                            onKeyDown={this.props.toggleZen}
                            role="button">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                id="menu-1"
                                className="transition duration-200 h-6 w-6 stroke-current text-white text-opacity-60 hover:text-opacity-95">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                                />
                            </svg>
                        </div>

                        {menuItem}
                    </div>
                    <div
                        id="menu-mobile"
                        className="flex sm:hidden bg-white bg-opacity-20 mr-2 lg:mr-0 rounded-md"
                        onClick={this.props.toggleSidebar}
                        onKeyDown={this.props.toggleSidebar}
                        role="button">
                        <FontAwesomeIcon icon={solid("bars")} className="text-white text-opacity-60 m-2 text-lg " />
                    </div>
                </div>

                <MainTitle zenmode={zm} toggleZen={this.props.toggleZen} />

                <div className="flex justify-center items-center opacity-0">
                    <div className="w-12 flex justify-center bg-white bg-opacity-20 rounded-md">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="28"
                            height="28"
                            className="stroke-white fill-white">
                            <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                        </svg>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomepageLayout;
