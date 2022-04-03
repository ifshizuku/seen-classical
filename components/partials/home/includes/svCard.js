import { useInView } from "react-intersection-observer";
import classNames from "classnames";

function SvCard(props) {
    const [svc, inView, entry] = useInView({
        /* Optional options */
        threshold: props.th,
    });
    return (
        <div
            id={props.id}
            className={classNames(
                "w-full",
                "rounded-2xl outline-slate-200 md:outline",
                "flex justify-center transition-all duration-200 transform-gpu",
                "bg-zinc-700 md:bg-opacity-90 bg-opacity-80",
                "mt-16",
                inView ? "md:outline-4" : "outline-0",
                inView ? "md:opacity-100 opacity-100" : "md:opacity-100 opacity-60"
            )}
            ref={svc}>
            {props.children}
        </div>
    );
}

export default SvCard;
