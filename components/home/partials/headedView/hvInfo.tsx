import classnames from "classnames"
import React from "react"

// Define Type for Props
interface Props {
    config: {
        name: string
    }
}

function HvInfo({ config }: Props) {
    return (
        <div
            id="hv-info/split-top"
            className={classnames("w-full", "flex grow justify-end")}>
            <div id="hv-info/right-set" className={classnames("mt-8 mr-4")}>
                <h2
                    id="hv-info-name"
                    className={classnames(
                        "text-white sm:text-3xl text-2xl subpixel-antialiased",
                        "dancing-script",
                        "select-none"
                    )}>
                    {config.name}
                </h2>
            </div>
        </div>
    )
}

export default HvInfo
