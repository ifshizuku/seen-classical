import classNames from "classnames";
import SvProfile from "./includes/svProfile";

function SecondaryView(props) {
    return (
        <div id="secondary-view" className={classNames("w-full", "flex justify-center", "bg-zinc-800")}>
            <div id="sv-container" className={classNames("xl:w-2/3 md:w-3/4 w-full", "flex justify-center")}>
                <SvProfile config={props.config} />
            </div>
        </div>
    );
}

export default SecondaryView;
