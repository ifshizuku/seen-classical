import classNames from "classnames";
import useNetwork from "../../global/hooks/useNetwork";

function HvSiteInfo(props) {
    const isOnline = useNetwork()
    return (
        <div id="hv-siteinfo-set">
            <h2 id="hv-siteinfo" className={classNames("text-white text-3xl subpixel-antialiased")}>
                {props.config.info}
            </h2>
            <h2 className={classNames("text-white text-3xl subpixel-antialiased")}>
                {isOnline ? "Online" : "Offline"}
            </h2>
        </div>
    );
}

export default HvSiteInfo;