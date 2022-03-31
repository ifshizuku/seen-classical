// const withPWA = require("next-pwa");
// next.config.js
module.exports = {
    i18n: {
        locales: ["zh-CN"],
        defaultLocale: "zh-CN",
    },
    webpack5: true,
    images: {
        domains: ["seen-1302639736.file.myqcloud.com"],
    },
};

// module.exports = withPWA({
//     pwa: {
//         // disable: true,
//         dest: "public",
//         buildExcludes: [/middleware-manifest.json$/],
//     },
// });
