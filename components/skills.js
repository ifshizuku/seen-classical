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
                        className="flex bg-white bg-opacity-20 rounded-md transition"
                        onMouseEnter={() => {
                            this.setState({
                                jshover: true,
                            });
                        }}>
                        <div className="flex justify-center items-center mt-3 mb-3 ml-5">
                            <FontAwesomeIcon size="3x" icon={brands("js-square")} color="#eed94d" />
                        </div>
                        <div className="flex flex-col justify-center items-center ml-3 mr-5">
                            <span className="font-medium text-lg text-slate-50 transition">JavaScript</span>
                            <div
                                className={[
                                    "w-full h-2 rounded bg-white bg-opacity-20 mt-0.5 flex",
                                    this.state.jshover ? "flex" : "hidden",
                                ].join(" ")}>
                                <div className="w-3/4 h-full bg-white bg-opacity-80 rounded"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Skills;
