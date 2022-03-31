import classNames from "classnames";
import toast, { Toaster } from "react-hot-toast";

function HvSiteInfo(props) {
    return (
        <div id="hv-siteinfo-set">
            <h2 id="hv-siteinfo" className={classNames("text-white sm:text-3xl text-2xl subpixel-antialiased", "font-dancing", "select-none")}>
                {props.config.info}
            </h2>
        </div>
    );
}

export default HvSiteInfo;
