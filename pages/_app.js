import "../styles/globals.css";
import "../styles/if.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import React from "react";
config.autoAddCss = false;


// Default Export
export default function MyApp({ Component, pageProps }) {
    return (
            <Component {...pageProps} />
    );
}
