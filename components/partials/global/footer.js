import React from "react";
import siteConfig from "../../toconfig";

class Footer extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div id="footer" className="flex justify-center items-center pb-10">
                <div className="flex md:flex-row flex-col justify-between items-center md:w-5/6 w-11/12 max-w-6xl">
                    <div className="bg-zinc-800 md:bg-opacity-25 bg-opacity-0 md:backdrop-blur-lg rounded-lg">
                        <p className="transition duration-200 select-none text-white text-opacity-75 text-lg font-medium subpixel-antialiased mt-1.5 mb-1.5 ml-2 mr-2 hover:text-opacity-95">
                            {siteConfig.footer.text}
                        </p>
                    </div>
                    <div className="flex items-center justify-center bg-zinc-800 md:bg-opacity-25 bg-opacity-0 md:backdrop-blur-lg rounded-lg">
                        <div id="moe-icp" className="mt-1.5 mb-1.5 ml-2 mr-2">
                            <a
                                id="moe"
                                className="transition duration-200 text-white text-opacity-40 subpixel-antialiased font-semibold text-lg hover:text-opacity-95"
                                href={siteConfig.footer.icp.textLink}
                                target="_blank"
                                rel="noopener noreferrer">
                                {siteConfig.footer.icp.text}{" "}
                            </a>
                            <a
                                id="moe-num"
                                href={siteConfig.footer.icp.numberLink}
                                className=" transition duration-200 text-white text-opacity-40 subpixel-antialiased font-semibold text-lg hover:text-opacity-95"
                                target="_blank"
                                rel="noopener noreferrer">
                                {" "}
                                {siteConfig.footer.icp.number}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
