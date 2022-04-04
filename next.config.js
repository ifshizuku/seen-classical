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
            ...config.resolve.fallback,
        }
        return config
    },
}
