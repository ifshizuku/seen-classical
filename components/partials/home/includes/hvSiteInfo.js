import classNames from "classnames";

function HvSiteInfo(props) {
    return (
        <div id="hv-siteinfo-set">
            <h2 id="hv-siteinfo" className={classNames("text-white text-3xl subpixel-antialiased")}>
                {props.config.info}
            </h2>   
        </div>
    );
}

export default HvSiteInfo;