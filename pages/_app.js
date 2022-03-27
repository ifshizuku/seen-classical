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
    faGithub,
    faTwitter,
    faBilibili,
} from "@fortawesome/free-brands-svg-icons";
import {
    faCompassDrafting,
    faFilm,
    faFeatherPointed,
    faCamera,
    faPaintbrush,
    faGuitar,
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
    faGithub,
    faTwitter,
    faBilibili
);

// Default Export
export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}
