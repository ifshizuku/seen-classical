import SvCard from "./svCard";
import classNames from "classnames";

function SvConnect(props) {
    const items = props.config.connect.map((item) => <SingleConnect key={item.key} config={item} />);
    return (
        <SvCard id="sv-connect" th="0.4">
            <div id="sv-connect-content" className={classNames("w-11/12 h-screen", "pt-6 mb-10 mt-5")}>
                <div id="sv-connect-title" className={classNames("flex items-end xl:gap-3 gap-2.5")}>
                    <i
                        id="sv-connect-icon"
                        className={classNames(
                            "fa-solid fa-hashtag",
                            "text-3xl text-transparent bg-clip-text bg-gradient-to-tr from-indigo-400 to-indigo-300"
                        )}></i>
                    <h2 id="sv-connect-title-text" className={classNames("font-bold text-4xl text-white text-opacity-100 subpixel-antialiased")}>
                        开始连接
                    </h2>
                </div>
                <div
                    id="sv-connect-container"
                    className={classNames(
                        "flex overflow-x-auto gap-6 shrink-0",
                        "mt-6",
                        "sm:pl-[2.4rem] sm:pr-[2.1rem] pl-[1.0rem] pr-[0.4rem] md:pt-5 pt-6 pb-4"
                    )}>
                    {items}
                </div>
            </div>
        </SvCard>
    );
}

function SingleConnect(props) {
    return (
        <div id={"sv-connect" + props.config.key} className={classNames("w-72 h-32 flex-none", "bg-zinc-600 bg-opacity-80 rounded-lg")}>
            <p></p>
        </div>
    );
}

export default SvConnect;
