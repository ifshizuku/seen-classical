import React from "react"
// For Types
import { AppProps } from "next/app"

// Export Default App Entrance
export default function Seen({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}
