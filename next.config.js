module.exports = {
    i18n: {
        locales: ["zh-CN"],
        defaultLocale: "zh-CN",
    },
    images: {
        domains: ["seen-1302639736.file.myqcloud.com"],
    },
    webpack5: true,
    webpack(config) {
        config.resolve.fallback = {
            ...config.resolve.fallback, // if you miss it, all the other options in fallback, specified
            // by next.js will be dropped. Doesn't make much sense, but how it is
            // fs: false, // the solution
        }
        return config
    },
}
