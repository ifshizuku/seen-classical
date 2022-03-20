import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular, brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import React, { useState } from "react";

class Skills extends React.Component {
    constructor(props) {
        super(props);
        this.manage = false;
        React.createRef();
        this.state = {
            jshover: false,
        };
    }

    render() {
        return (
            <div id="skills-container" className="flex pt-4">
                <div id="skills-cards" className="flex">
                    <div
                        id="card-js"
                        className="flex bg-white bg-opacity-20 rounded-md transition hover:bg-opacity-90 hover:bg-yellow-300 hover:scale-110"
                        onMouseEnter={() => {
                            this.setState({
                                jshover: true,
                            });
                        }}
                        onMouseLeave={() => {
                            this.setState({
                                jshover: false,
                            });
                        }}>
                        <div className="flex justify-center items-center mt-3 mb-3 ml-5">
                            <FontAwesomeIcon
                                size="3x"
                                icon={brands("js-square")}
                                color={[this.state.jshover ? "#ffffff" : "#eed94d"]}
                                className="transition"
                            />
                        </div>
                        <div className="flex flex-col justify-center items-center ml-3 mr-5">
                            <span className="font-medium text-lg text-white transition">JavaScript</span>
                            <div
                                className={[
                                    "w-full rounded bg-white bg-opacity-20 mt-0.5 flex transition-all",
                                    this.state.jshover ? ["visible opacity-100 h-2"] : ["invisible opacity-0 h-0"],
                                ].join(" ")}>
                                <div className="w-3/4 h-full bg-white bg-opacity-80 rounded transition"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Skills;
