import { scroller } from "react-scroll";
import classNames from "classnames";
import useHitokoto from "../../../../apis/useHitokoto";

function HvDynamicStatus(props) {
    const { data: mTitle, error: mError, mutate: mMutate } = useHitokoto({ collection: "literature", type: "text", min: 0, max: 10, ar: false });
    const { data: sTitle, error: sError, mutate: sMutate } = useHitokoto({ collection: "anime", type: "text", min: 8, max: 20, ar: false });
    return (
        <div id="hv-dynamic-status-set">
            {/* Hero */}
            <div id="hv-dynamic-textup">
                <h2
                    className={classNames(
                        "text-white font-bold md:text-7xl text-5xl sm:tracking-normal tracking-wide leading-tight text-opacity-100 subpixel-antialiased",
                        "select-none"
                    )}>
                    {!mTitle ? "期待你的声音..." : mTitle}
                </h2>
                <h3
                    className={classNames(
                        "text-white font-medium md:text-2xl text-xl leading-normal text-opacity-40 underline underline-offset-4 subpixel-antialiased",
                        "mt-3",
                        "select-none"
                    )}>
                    {!sTitle ? "Loading..." : sTitle}
                </h3>
            </div>

            {/* Dot Controller */}
            <div id="hv-dynamic-status-dot-set" className={classNames("flex gap-2.5", "opacity-90 md:opacity-100", "mt-4")}>
                <div id="hv-dot-red" className={classNames("md:w-4 md:h-4 w-5 h-5", "bg-red-400", "rounded-full")} role="button" tabIndex="5"></div>
                <div id="hv-dot-yellow" className={classNames("md:w-4 md:h-4 w-5 h-5", "bg-yellow-400", "rounded-full")} role="button" tabIndex="5"></div>
                <div id="hv-dot-green" className={classNames("md:w-4 md:h-4 w-5 h-5", "bg-green-400", "rounded-full")} role="button" tabIndex="5"></div>
            </div>

            {/* Sentence */}
            <div id="hv-dynamic-status-sentence">
                <p
                    className={classNames(
                        "text-white font-medium md:text-2xl text-xl text-opacity-80 subpixel-antialiased",
                        "font-dancing",
                        "mt-2",
                        "select-none"
                    )}>
                    {props.config.sentence}
                </p>
            </div>
            <div id="hv-dynamic-status-more" className={classNames("flex", "mt-1.5")}>
                <div
                    onClick={() => {
                        scroller.scrollTo("sv-profile", {
                            duration: 1100,
                            delay: 50,
                            smooth: true,
                            offset: 0, // Scrolls to element + 50 pixels down the page
                        });
                    }}
                    className="flex items-center gap-2.5">
                    <i id="hv-dynamic-status-more-icon" className={classNames("fa-solid fa-arrow-down-short-wide", "text-white text-opacity-80")}></i>
                    <p id="hv-dynamic-status-more-text" className={classNames("font-medium text-white text-opacity-80 text-lg", "select-none")}>
                        更多...
                    </p>
                </div>
            </div>
        </div>
    );
}

export default HvDynamicStatus;
