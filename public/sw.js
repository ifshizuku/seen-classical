if (!self.define) {
    let e,
        s = {};
    const a = (a, n) => (
        (a = new URL(a + ".js", n).href),
        s[a] ||
            new Promise((s) => {
                if ("document" in self) {
                    const e = document.createElement("script");
                    (e.src = a), (e.onload = s), document.head.appendChild(e);
                } else (e = a), importScripts(a), s();
            }).then(() => {
                let e = s[a];
                if (!e) throw new Error(`Module ${a} didn’t register its module`);
                return e;
            })
    );
    self.define = (n, i) => {
        const c = e || ("document" in self ? document.currentScript.src : "") || location.href;
        if (s[c]) return;
        let t = {};
        const r = (e) => a(e, c),
            o = { module: { uri: c }, exports: t, require: r };
        s[c] = Promise.all(n.map((e) => o[e] || r(e))).then((e) => (i(...e), t));
    };
}
define(["./workbox-cbb93fb9"], function (e) {
    "use strict";
    importScripts(),
        self.skipWaiting(),
        e.clientsClaim(),
        e.precacheAndRoute(
            [
                { url: "/_next/static/ZBTyOLlJqcXaTtYbJ8OM5/_buildManifest.js", revision: "ZBTyOLlJqcXaTtYbJ8OM5" },
                { url: "/_next/static/ZBTyOLlJqcXaTtYbJ8OM5/_middlewareManifest.js", revision: "ZBTyOLlJqcXaTtYbJ8OM5" },
                { url: "/_next/static/ZBTyOLlJqcXaTtYbJ8OM5/_ssgManifest.js", revision: "ZBTyOLlJqcXaTtYbJ8OM5" },
                { url: "/_next/static/chunks/810-58e6631b138b8ac1.js", revision: "ZBTyOLlJqcXaTtYbJ8OM5" },
                { url: "/_next/static/chunks/framework-e70c6273bfe3f237.js", revision: "ZBTyOLlJqcXaTtYbJ8OM5" },
                { url: "/_next/static/chunks/main-c3d65dc7e7d67dd1.js", revision: "ZBTyOLlJqcXaTtYbJ8OM5" },
                { url: "/_next/static/chunks/pages/_app-0285589134569c8d.js", revision: "ZBTyOLlJqcXaTtYbJ8OM5" },
                { url: "/_next/static/chunks/pages/_error-1995526792b513b2.js", revision: "ZBTyOLlJqcXaTtYbJ8OM5" },
                { url: "/_next/static/chunks/pages/index-83cb455736483511.js", revision: "ZBTyOLlJqcXaTtYbJ8OM5" },
                { url: "/_next/static/chunks/polyfills-5cd94c89d3acac5f.js", revision: "ZBTyOLlJqcXaTtYbJ8OM5" },
                { url: "/_next/static/chunks/webpack-69bfa6990bb9e155.js", revision: "ZBTyOLlJqcXaTtYbJ8OM5" },
                { url: "/_next/static/css/674ac108116486cb.css", revision: "ZBTyOLlJqcXaTtYbJ8OM5" },
                { url: "/icons/android-chrome-192x192.png", revision: "364b61e525d23e284fb18f1f99b3cba8" },
                { url: "/icons/android-chrome-512x512.png", revision: "5bc5c50a64d2d931174547d135be0bbf" },
                { url: "/icons/apple-touch-icon.png", revision: "78805182b1ce88650e08aa2fe93e3825" },
                { url: "/icons/browserconfig.xml", revision: "9ad8bb41bdb3209764a883fce6e5d327" },
                { url: "/icons/favicon-16x16.png", revision: "a1f0b07fc779bef04852dd1dca6feb45" },
                { url: "/icons/favicon-32x32.png", revision: "bcb1cd54c5b4abb2b07664e14676e7ba" },
                { url: "/icons/favicon.ico", revision: "9da0c7e10322243437758ccabea5294b" },
                { url: "/icons/mstile-150x150.png", revision: "73a60d2e564fb55f1b61b334456081d0" },
                { url: "/icons/mstile-310x310.png", revision: "6db6f8f114a8a4798ccb5ee7ec826165" },
                { url: "/icons/safari-pinned-tab.svg", revision: "9a7db6f3bc3479ca965c2daf69c41dc3" },
                { url: "/site.webmanifest", revision: "ba6469946d4c7d373fa8a48c3ea1082b" },
                { url: "/splash/apple-splash-1125-2436.jpg", revision: "9dab25b440ac5f20d37102dfbcbd4b2a" },
                { url: "/splash/apple-splash-1242-2208.jpg", revision: "846a92c58943341fd73034c77a698eb3" },
                { url: "/splash/apple-splash-1536-2048.jpg", revision: "2ab456e19456923a1f3494becaa8e72f" },
                { url: "/splash/apple-splash-1668-2224.jpg", revision: "705048c542a3c5b19908abf4783cfd9e" },
                { url: "/splash/apple-splash-2048-2732.jpg", revision: "15998ea8d8020e2d32fcc30cb5e991ef" },
                { url: "/splash/apple-splash-640-1136.jpg", revision: "768a27cb2c9968d6c83128569e7761f0" },
                { url: "/splash/apple-splash-750-1334.jpg", revision: "59a61a5fb6d70fbe2bcd2fbfcfd8a2d1" },
            ],
            { ignoreURLParametersMatching: [] }
        ),
        e.cleanupOutdatedCaches(),
        e.registerRoute(
            "/",
            new e.NetworkFirst({
                cacheName: "start-url",
                plugins: [
                    {
                        cacheWillUpdate: async ({ request: e, response: s, event: a, state: n }) =>
                            s && "opaqueredirect" === s.type ? new Response(s.body, { status: 200, statusText: "OK", headers: s.headers }) : s,
                    },
                ],
            }),
            "GET"
        ),
        e.registerRoute(
            /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
            new e.CacheFirst({ cacheName: "google-fonts-webfonts", plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 })] }),
            "GET"
        ),
        e.registerRoute(
            /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
            new e.StaleWhileRevalidate({ cacheName: "google-fonts-stylesheets", plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })] }),
            "GET"
        ),
        e.registerRoute(
            /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
            new e.StaleWhileRevalidate({ cacheName: "static-font-assets", plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })] }),
            "GET"
        ),
        e.registerRoute(
            /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
            new e.StaleWhileRevalidate({ cacheName: "static-image-assets", plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })] }),
            "GET"
        ),
        e.registerRoute(
            /\/_next\/image\?url=.+$/i,
            new e.StaleWhileRevalidate({ cacheName: "next-image", plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })] }),
            "GET"
        ),
        e.registerRoute(
            /\.(?:mp3|wav|ogg)$/i,
            new e.CacheFirst({
                cacheName: "static-audio-assets",
                plugins: [new e.RangeRequestsPlugin(), new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
            }),
            "GET"
        ),
        e.registerRoute(
            /\.(?:mp4)$/i,
            new e.CacheFirst({
                cacheName: "static-video-assets",
                plugins: [new e.RangeRequestsPlugin(), new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
            }),
            "GET"
        ),
        e.registerRoute(
            /\.(?:js)$/i,
            new e.StaleWhileRevalidate({ cacheName: "static-js-assets", plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })] }),
            "GET"
        ),
        e.registerRoute(
            /\.(?:css|less)$/i,
            new e.StaleWhileRevalidate({ cacheName: "static-style-assets", plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })] }),
            "GET"
        ),
        e.registerRoute(
            /\/_next\/data\/.+\/.+\.json$/i,
            new e.StaleWhileRevalidate({ cacheName: "next-data", plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })] }),
            "GET"
        ),
        e.registerRoute(
            /\.(?:json|xml|csv)$/i,
            new e.NetworkFirst({ cacheName: "static-data-assets", plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })] }),
            "GET"
        ),
        e.registerRoute(
            ({ url: e }) => {
                if (!(self.origin === e.origin)) return !1;
                const s = e.pathname;
                return !s.startsWith("/api/auth/") && !!s.startsWith("/api/");
            },
            new e.NetworkFirst({ cacheName: "apis", networkTimeoutSeconds: 10, plugins: [new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 })] }),
            "GET"
        ),
        e.registerRoute(
            ({ url: e }) => {
                if (!(self.origin === e.origin)) return !1;
                return !e.pathname.startsWith("/api/");
            },
            new e.NetworkFirst({ cacheName: "others", networkTimeoutSeconds: 10, plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })] }),
            "GET"
        ),
        e.registerRoute(
            ({ url: e }) => !(self.origin === e.origin),
            new e.NetworkFirst({
                cacheName: "cross-origin",
                networkTimeoutSeconds: 10,
                plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 })],
            }),
            "GET"
        ),
        e.registerRoute(
            /^https:\/\/vitals.vercel-insights.com*/i,
            new e.NetworkOnly({ cacheName: "vercel-insights", plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 })] }),
            "POST"
        );
});
