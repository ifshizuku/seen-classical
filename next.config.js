const withPWA = require("next-pwa");
const runtimeCaching = require("./swc/cache.js");
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
    webpack: {},
};

module.exports = withPWA({
    pwa: {
        // disable: true,
        dest: "public",
        runtimeCaching,
        buildExcludes: [/middleware-manifest\.json$/],
    },
});
