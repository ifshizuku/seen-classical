import classNames from "classnames";
import useHitokoto from "../../../apis/useHitokoto";

function HvDynamicStatus(props) {
    const {
        data: mTitle,
        error: mError,
        mutate: mMutate,
    } = useHitokoto({ collection: "literature", type: "text", min: 0, max: 10, ar: false });
    const {
        data: sTitle,
        error: sError,
        mutate: sMutate,
    } = useHitokoto({ collection: "anime", type: "text", min: 8, max: 20, ar: false });
    return (
        <div id="hv-dynamic-status-set">
            {/* Hero */}
            <div id="hv-dynamic-textup">
                <h2
                    className={classNames(
                        "text-white font-bold md:text-7xl text-5xl text-opacity-100 subpixel-antialiased"
                    )}>
                    {mTitle}
                </h2>
                <h3
                    className={classNames(
                        "text-white font-medium md:text-2xl text-xl text-opacity-40 underline underline-offset-4 subpixel-antialiased",
                        "mt-3"
                    )}>
                    {sTitle}
                </h3>
            </div>

            {/* Dot Controller */}
            <div id="hv-dynamic-status-dot-set" className={classNames("flex gap-2.5", "mt-4")}>
                <div
                    id="hv-dot-red"
                    className={classNames("w-4 h-4", "bg-red-400", "rounded-full")}
                    role="button"
                    tabIndex="5"></div>
                <div
                    id="hv-dot-yellow"
                    className={classNames("w-4 h-4", "bg-yellow-400", "rounded-full")}
                    role="button"
                    tabIndex="5"></div>
                <div
                    id="hv-dot-green"
                    className={classNames("w-4 h-4", "bg-green-400", "rounded-full")}
                    role="button"
                    tabIndex="5"></div>
            </div>

            {/* Sentence */}
            <div id="hv-dynamic-status-sentence">
                <p
                    className={classNames(
                        "text-white font-medium md:text-2xl text-xl text-opacity-80 subpixel-antialiased",
                        "font-dancing",
                        "mt-2"
                    )}>
                    {props.config.sentence}
                </p>
            </div>
            <div id="hv-dynamic-status-more" className={classNames("flex items-center gap-2.5", "mt-1.5")}>
                {/* <i id="hv-dynamic-status-more-icon" className={classNames("fa-solid fa-arrow-down-short-wide", "text-white text-opacity-80")}></i> */}
                <p
                    id="hv-dynamic-status-more-text"
                    className={classNames("font-medium text-white text-opacity-80 text-lg")}>
                    更多...
                </p>
            </div>
        </div>
    );
}

export default HvDynamicStatus;
