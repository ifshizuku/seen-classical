import classNames from "classnames";
import useHitokoto from "../../../apis/useHitokoto";

function HvDynamicStatus(props) {
    const { data: sTitle, error, mutate } = useHitokoto({ collection: "literature", type: "text", min: 0, max: 10, ar: false });
    return (
        <div id="hv-dynamic-status-set">
            <h2 className={classNames("text-white font-bold text-6xl subpixel-antialiased")}>{sTitle}</h2>
        </div>
    );
}

export default HvDynamicStatus;
