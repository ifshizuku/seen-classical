import classNames from "classnames";
import HvDynamicStatus from "./includes/hvDynamicStatus";
import HvSiteInfo from "./includes/hvSiteInfo";

function HeadedView(props) {
    return (
        <div
            id="headed-view"
            className={classNames("w-full h-screen", "flex justify-center items-center", [
                "bg-[url('" + props.config.backgroundImage + "')]",
                "bg-cover bg-center",
            ])}
            role="with-background">
            <div
                id="hv-container"
                className={classNames(
                    "w-full h-full",
                    "flex flex-col justify-center items-center",
                    "bg-gradient-to-t from-zinc-800 via-[#00000000]"
                )}
                role="with-background-cover">
                <div
                    id="hv-content"
                    className={classNames("w-11/12 h-full", "flex flex-col justify-center items-center")}>
                    {/* Use Flex Column and Grow split page into two area in order to place content at single side */}

                    <div id="hv-split-top" className={classNames("w-full", "flex grow justify-end", "mt-8 mr-6")}>
                        {/* TODO: Component for the Dynamic Content extend */}

                        <HvSiteInfo config={props.config.i} />
                    </div>

                    <div id="hv-split-bottom" className={classNames("w-full", "flex grow items-end", "mb-8 ml-6")}>
                        <HvDynamicStatus config={props.config.ds} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeadedView;
