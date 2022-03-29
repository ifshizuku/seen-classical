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
    } = useHitokoto({ collection: "anime", type: "text", min: 0, max: 10, ar: false });
    return (
        <div id="hv-dynamic-status-set">
            <h2 className={classNames("text-white font-bold text-5xl subpixel-antialiased")}>{mTitle}</h2>
            <h3 className={classNames("text-white font-bold text-xl subpixel-antialiased")}>{sTitle}</h3>
        </div>
    );
}

export default HvDynamicStatus;
