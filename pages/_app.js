import "../styles/globals.css";
import "../styles/if.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config, library } from "@fortawesome/fontawesome-svg-core";
// Import Specific Icons
import {
    faJsSquare,
    faReact,
    faSwift,
    faSketch,
    faGithubAlt,
    faTwitter,
    faBilibili,
    faTelegram,
    faQq,
} from "@fortawesome/free-brands-svg-icons";
import {
    faCompassDrafting,
    faFilm,
    faFeatherPointed,
    faCamera,
    faPaintbrush,
    faGuitar,
    faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

config.autoAddCss = false;
library.add(
    faJsSquare,
    faReact,
    faSwift,
    faSketch,
    faCompassDrafting,
    faFilm,
    faFeatherPointed,
    faCamera,
    faPaintbrush,
    faGuitar,
    faGithubAlt,
    faTwitter,
    faBilibili,
    faTelegram,
    faEnvelope,
    faQq
);

// Default Export
export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}
