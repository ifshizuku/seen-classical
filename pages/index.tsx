import { hvConfig, metaConfig } from "../components/toConfig"
import HeadedView from "../components/home/headedView"
import React from "react"
import Wrap from "../components/home/basicLayout"

function Homepage() {
    return (
        <Wrap config={metaConfig}>
            <HeadedView config={hvConfig} />
        </Wrap>
    )
}

// Export Default Homepage Layout
export default Homepage
