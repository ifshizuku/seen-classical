import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import skillList from "./skills-data";

// Import Specific Icons
import { faJsSquare, faReact, faSwift, faSketch } from "@fortawesome/free-brands-svg-icons"
import { faCompassDrafting, faFilm, faFeatherPointed, faCamera, faPaintbrush, faGuitar} from "@fortawesome/free-solid-svg-icons"

class Skills extends React.Component {
    constructor(props) {
        super(props);
        // Hover State Default
        this.state = {
            jshover: false,
            reacthover: false,
            swifthover: false,
            sketchhover: false,
            designhover: false,
            videohover: false,
            writinghover: false,
            photographyhover: false,
            painthover: false,
            guitarhover: false
        };
    }

    render() {
        const items = skillList.map((item) => {

            // Icons Dictionary
            const myIcons = {
                js: faJsSquare,
                react: faReact,
                swift: faSwift,
                sketch: faSketch,
                design: faCompassDrafting,
                video: faFilm,
                writing: faFeatherPointed,
                photography: faCamera,
                paint: faPaintbrush,
                guitar: faGuitar
              };
            //   Finding
            const fc = item.key;

            return (
                <div
                    id={item.id}
                    className={["flex bg-white bg-opacity-20 rounded-lg transition hover:bg-opacity-90 hover:scale-110 h-16", [item.hover]].join(" ")}
                    key={item.key}
                    onMouseEnter={() => {
                        this.setState({
                            [item.hoverController]: true,
                        });
                    }}
                    onMouseLeave={() => {
                        this.setState({
                            [item.hoverController]: false,
                        });
                    }}>
                    <div className="flex justify-center items-center lg:mt-3.5 lg:mb-3.5 mt-2 mb-2 lg:ml-5 ml-4">
                        <FontAwesomeIcon
                            size="2x"
                            icon={myIcons[fc]}
                            color={this.state.[item.hoverController] ? "#ffffff" : item.brandColor}
                            className="transition"
                            id={["icon_" + item.key]}
                        />
                    </div>
                    <div className="flex flex-col justify-center items-center lg:ml-3 lg:mr-5 ml-2 mr-4">
                        <span className="font-medium text-lg text-white transition select-none subpixel-antialiased">
                            {item.fullname}
                        </span>
                        <div
                            className={[
                                "w-full rounded bg-white bg-opacity-20 mt-0.5 flex transition-all",
                                this.state.[item.hoverController] ? ["visible opacity-100 h-2"] : ["invisible opacity-0 h-0"]
                            ].join(" ")}>
                            <div className={["h-full bg-white bg-opacity-80 rounded transition", item.process].join(" ")}></div>
                        </div>
                    </div>
                </div>
            );
        });

        return (
            <div id="skills-container" className="flex pt-6">
                <div id="skills-cards" className="flex flex-wrap lg:gap-6 gap-4">
                    {items}
                </div>
            </div>
        );
    }

}

export default Skills;
