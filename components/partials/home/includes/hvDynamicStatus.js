import classNames from "classnames";
import useSWR from "swr";
import { ptf } from "../../../apis/fetcher";

function HvDynamicStatus(props) {
    const { data, error } = useSWR("https://v1.hitokoto.cn/?c=d&encode=text&max_length=10", ptf);
    return (
        <div id="hv-dynamic-status-set">
            <h2 className={classNames("text-white font-bold text-6xl subpixel-antialiased")}>{data}</h2>
        </div>
    );
}

export default HvDynamicStatus;
