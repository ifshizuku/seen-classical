// import { useTheme } from "next-themes"
import classnames from "classnames"
import HvInfo from "./partials/headedView/hvInfo"
import HvStatus from "./partials/headedView/hvStatus"
import React from "react"

// Define Type for Props
interface Props {
    config: {
        backgroundImage: string
        info: {
            name: string
        }
        status: {
            sentence: string
        }
    }
}

function HeadedView({ config }: Props) {
    // const { theme, setTheme } = useTheme()
    return (
        <div
            id="headedView"
            className={classnames(
                "w-full h-screen",
                "flex justify-center items-center",
                "bg-[url('" + config.backgroundImage + "')]",
                "bg-cover bg-center"
            )}>
            <div
                id="hv-filter"
                className={classnames(
                    "w-full h-full",
                    "absolute inset-0",
                    "bg-gradient-to-t from-zinc-800 via-[#00000000]",
                    "transition-all duration-300",
                    "opacity-0 dark:opacity-100"
                )}></div>
            <div
                id="hv-content"
                className={classnames(
                    "w-11/12 h-full",
                    "flex flex-col justify-center items-center"
                )}>
                <HvInfo config={config.info} />
                <HvStatus config={config.status} />
            </div>
        </div>
    )
}

export default HeadedView
