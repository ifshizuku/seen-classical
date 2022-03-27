import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import siteConfig from "../components/toconfig";
import classNames from "classnames";

class Social extends React.Component {
    constructor(props) {
        super(props);
        const sl = siteConfig.social.map;
        this.state = {
            [sl.hoverController]: false,
        };
    }

    render() {
        const items = siteConfig.social.map((item) => {
            return (
                <div
                    id={item.id}
                    className={
                        "flex flex-col bg-opacity-20 rounded-lg transition duration-200 hover:bg-opacity-90 hover:scale-110 hover:-translate-y-1"
                    }
                    style={
                        this.state[item.hoverController]
                            ? { "backgroundColor": item.brandColor }
                            : { "backgroundColor": "rgb(255 255 255 / var(--tw-bg-opacity))" }
                    }
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
                    <div className="flex justify-center items-center lg:mt-5 lg:mb-5  mt-4 mb-4 lg:ml-5 lg:mr-5 ml-4 mr-4">
                        <FontAwesomeIcon
                            size="xl"
                            icon={["fa-" + item.icon.series, "fa-" + item.icon.name].join(" ")}
                            color="#ffffff"
                            className="transition text-lg"
                            id={["icon_" + item.key]}
                        />
                    </div>
                </div>
            );
        });

        return (
            <div id="social-container" className="flex pt-6">
                <div id="social-cards" className="flex flex-wrap lg:gap-6 gap-4">
                    {items}
                </div>
            </div>
        );
    }
}

export default Social;
