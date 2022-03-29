import React from "react";
import Head from "next/head";

function Wrap(props) {
        return (
            <div id="wrap" className="w-full h-full">
                {/* Meta Data */}
                <Head>
                    <meta charSet="utf-8" />
                    <title>{props.config.siteTitle}</title>
                    <meta name="author" content={props.config.siteAuthor} />
                    <meta name="description" content={props.config.siteDescription} />

                    {/* Facebook Open Graph */}
                    <meta property="og:image" content={props.config.og.image} />
                    <meta property="og:title" content={props.config.og.title}></meta>
                    <meta property="og:description" content={props.config.og.description} />
                    <meta property="og:locale" content={props.config.og.locale} />
                    <meta property="og:site_name" content={props.config.og.siteName} />

                    {/* Twitter */}
                    <meta name="twitter:title" content={props.config.tw.title} />
                </Head>

                {/* Children */}
                {props.children}
            </div>
        );
}

export default Wrap;
