const withPWA = require("next-pwa");
const runtimeCaching = require("./swc/cache.js");
// next.config.js
module.exports = {
    i18n: {
        locales: ["zh-CN"],
        defaultLocale: "zh-CN",
    },
    images: {
        domains: ["seen-1302639736.file.myqcloud.com"],
    },
    webpack5: true,
};

module.exports = withPWA({
    pwa: {
        // disable: true,
        dest: "public",
        runtimeCaching,
        buildExcludes: [/middleware-manifest\.json$/],
    },
});
