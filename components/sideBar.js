import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const sb = this.props.sidebar;
        return (
            <div
                className={[
                    "top-0 right-0 w-5/6 bg-white bg-opacity-20 backdrop-blur-md pt-10 pl-4 pr-12  text-white fixed h-full rounded-bl-xl rounded-tl-xl  flex flex-row-reverse transition duration-700 ease-in-out",
                    sb ? "translate-x-0" : "translate-x-full",
                ].join(" ")}>
                <FontAwesomeIcon icon={solid("close")} className="text-white text-2xl" onClick={this.props.toggleSidebar} />
                <h2 className="mt-20 text-3xl font-semibold text-white">Sidebar Test</h2>
            </div>
        );
    }
}

export default Sidebar;
