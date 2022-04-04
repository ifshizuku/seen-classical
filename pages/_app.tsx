import { ThemeProvider } from "next-themes"
import React from "react"

// For Types
import { AppProps } from "next/app"

// CSS Importations
import "../styles/globals.css"

// Export Default App Entrance
export default function Seen({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            storageKey="theme">
            <Component {...pageProps} />
        </ThemeProvider>
    )
}
