import classNames from "classnames";

function HvSiteInfo(props) {
    return (
        <div id="hv-siteinfo-set">
            <h2 id="hv-siteinfo" className={classNames("text-white sm:text-3xl text-2xl subpixel-antialiased", "font-dancing")}>
                {props.config.info}
            </h2>
        </div>
    );
}

export default HvSiteInfo;