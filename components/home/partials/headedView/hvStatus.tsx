import classnames from "classnames"
import React from "react"
import useHitokoto from "../../../global/hooks/apis/useHitokoto"

// Define Type for Props
interface Props {
    config: {
        sentence: string
    }
}

function HvStatus({ config }: Props) {
    // Hitokoto API
    const { data: mainTitle } = useHitokoto({
        collection: "literature",
        type: "text",
        min: 0,
        max: 10,
        ar: false,
    })
    const { data: subTitle } = useHitokoto({
        collection: "anime",
        type: "text",
        min: 8,
        max: 20,
        ar: false,
    })
    return (
        <div
            id="hv-status/split-bottom"
            className={classnames("w-full", "flex grow")}>
            <div id="hv-status/left-set">
                <h2
                    className={classnames(
                        "text-white font-bold md:text-7xl text-5xl sm:tracking-normal tracking-wide leading-tight text-opacity-100 subpixel-antialiased",
                        "select-none"
                    )}>
                    {!mainTitle ? "期待你的声音..." : mainTitle}
                </h2>
                <h3
                    className={classnames(
                        "text-white font-medium md:text-2xl text-xl leading-normal text-opacity-40 underline underline-offset-4 subpixel-antialiased",
                        "mt-3",
                        "select-none"
                    )}>
                    {!subTitle ? "Loading..." : subTitle}
                </h3>
            </div>
        </div>
    )
}

export default HvStatus
