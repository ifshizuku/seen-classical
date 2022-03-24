import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import textList from "../data/home-data";

class HomepageLayout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            labhover: false,
            recordhover: false,
        };
    }

    hovercLab = () => {
        this.setState(state => ({
            labhover: state.labhover === true ? false : true,
        }));
    }

    hovercRecord = () => {
        this.setState(state => ({
            recordhover: state.recordhover === true ? false : true,
        }));
    }

    render() {
        const tf = textList;
        const zm = this.props.zenmode;

        return (
            <div id="main" className="flex flex-col justify-between overflow-scroll h-screen max-w-screen-2xl">
                {/* Top Bar */}
                <div id="topbar" className="flex justify-between items-center pt-6">
                    {/* Top Bar - Left Part */}
                    <div
                        id="sentence"
                        className={["flex transition duration-500", zm ? "opacity-0" : "opacity-100"].join(" ")}>
                        <h2
                            id="sign"
                            className="transition duration-200 text-white text-opacity-40 subpixel-antialiased font-bold text-xl hover:text-opacity-95 select-none lg:pl-0 pl-2">
                            {tf.sign}
                        </h2>
                    </div>

                    <div
                        id="intro"
                        className={[
                            "pl-2 pr-4 h-12 bg-opacity-10 bg-white rounded-lg hidden sm:flex sm:justify-evenly backdrop-filter backdrop-blur-xl transition duration-500",
                            zm ? "opacity-0" : "opacity-100",
                        ].join(" ")}>
                        <div
                            id="expend-button"
                            className="pl-4 pr-4 h-full flex justify-center items-center"
                            onClick={this.props.toggleZen}>
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

                        <div
                            id="lab"
                            className="transition duration-200 pl-3 pr-3  h-full flex justify-center items-center rounded-lg ease-in-out hover:scale-105 hover:bg-slate-100"
                            onMouseEnter={this.hovercLab}
                            onMouseLeave={this.hovercLab}>
                            <h2
                                id="menu-2"
                                className={[
                                    "subpixel-antialiased font-semibold text-md select-none transition",
                                    this.state.labhover ? "text-black text-opacity-90" : "text-white text-opacity-60",
                                ].join(" ")}>
                                {tf.menu2}
                            </h2>
                        </div>

                        <div
                            id="record"
                            className="transition duration-200 pl-3 pr-3 ml-2 h-full flex justify-center items-center rounded-lg ease-in-out hover:scale-105 hover:bg-slate-100"
                            onMouseEnter={this.hovercRecord}
                            onMouseLeave={this.hovercRecord}>
                            <h2
                                id="menu-3"
                                className={[
                                    "subpixel-antialiased font-semibold text-md select-none transition",
                                    this.state.recordhover
                                        ? "text-black text-opacity-90"
                                        : "text-white text-opacity-60",
                                ].join(" ")}>
                                {tf.menu3}
                            </h2>
                        </div>
                    </div>
                    <div
                        id="menu-mobile"
                        className="flex sm:hidden bg-white bg-opacity-20 mr-2 lg:mr-0 rounded-md"
                        onClick={this.props.toggleSidebar}>
                        <FontAwesomeIcon icon={solid("bars")} className="text-white text-opacity-60 m-2 text-lg " />
                    </div>
                </div>

                <div
                    id="main-title"
                    className={[
                        "flex justify-center transition duration-700 ease-in-out",
                        zm ? "scale-110" : "scale-100",
                    ].join(" ")}
                    onClick={this.props.toggleZen}>
                    <div className="flex flex-col justify-center items-center">
                        <h2 id="title" className="text-8xl text-gray-100 select-none sm:text-9xl subpixel-antialiased">
                            {tf.title}
                        </h2>
                        <p className="text-white text-opacity-30 font-semibold text-lg select-none subpixel-antialiased">
                            {tf.subtitle}
                        </p>
                    </div>
                </div>

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
