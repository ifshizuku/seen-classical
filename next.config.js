const withPWA = require("./next-pwa/index.js");
// next.config.js

module.exports = withPWA({
    pwa: {
        disable: true,
        dest: "public",
        buildExcludes: [/middleware-manifest\.json$/],
        skipWaiting: false,
    },
    i18n: {
        locales: ["zh-CN"],
        defaultLocale: "zh-CN",
    },
    images: {
        domains: ["seen-1302639736.file.myqcloud.com"],
    },
    webpack5: true,
});
