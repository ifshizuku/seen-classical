import useSWR from "swr"

// Define Type for Options
type Options = any

function useHitokoto(...options: Options) {
    // Define input data
    const {
        collection: c,
        type: encode,
        min: min_length,
        max: max_length,
        ar: aro,
    } = options

    // Default Options
    const defaultOptions = {
        collection: "anime",
        type: "json",
        min: 0,
        max: 20,
        ar: true,
    }

    if (typeof options == "undefined") {
        options = defaultOptions
    }

    // Collection Dictionary
    const collection: object = {
        anime: "a",
        comics: "b",
        game: "c",
        literature: "d",
        original: "e",
        network: "f",
        other: "g",
        movie: "h",
        poem: "i",
        ncm: "j",
        philosophy: "k",
        shake: "l",
    }

    // Pre Define for URL
    let r_encode: string, r_min_length: number, r_max_length: number

    function collectionParser(e: string) {
        // Pre Define for PUSH
        const arr: string[] = new Array("")

        // Check if collection is empty
        if (e === "") {
            // Push default collection
            arr.push(defaultOptions.collection)
        } else {
            // Space to Array
            const e_arr: string[] = e.trim().split(" ")
            e_arr.forEach((item) => {
                // Export filter result
                const i: object = Object.entries(collection)
                    .filter((t) => t[0] === item)
                    .map((t) => t[1])

                // Push to Array
                let single: string
                if (JSON.stringify(i) !== "[]") {
                    single = ["c=", i.toString()].join("")
                } else {
                    throw new Error("Collection not found")
                }
                arr.push(single)
            })
        }
        return arr.join("&")
    }

    function toCollectionConfig(e: string | undefined) {
        // Pre Define for PUSH
        let cc: string
        // Filter Undefined and Default value
        switch (typeof e) {
            case "undefined":
                cc = collectionParser(defaultOptions.collection)
                break
            case "string":
                cc = collectionParser(e)
                break
            default:
                throw new Error("Collection type error")
        }
        return cc
    }

    // Encode
    switch (encode) {
        case "json":
            r_encode = "json"
            break
        case "text":
            r_encode = "text"
            break
        case undefined:
            r_encode = defaultOptions.type
            break
        default:
            throw new Error("Encode type error")
    }

    // Length Limitition
    function isNum(value: number) {
        return typeof value === "number" && !isNaN(value)
    }

    if (isNum(min_length) && isNum(max_length)) {
        r_min_length = min_length
        r_max_length = max_length
    } else if (
        typeof min_length == "undefined" &&
        typeof max_length !== "undefined"
    ) {
        r_min_length = defaultOptions.min
        r_max_length = max_length
    } else if (
        typeof min_length !== "undefined" &&
        typeof max_length == "undefined"
    ) {
        r_min_length = min_length
        r_max_length = defaultOptions.max
    } else if (
        typeof min_length == "undefined" &&
        typeof max_length == "undefined"
    ) {
        r_min_length = defaultOptions.min
        r_max_length = defaultOptions.max
    } else {
        throw "min_length and max_length must be number"
    }

    const r_c = toCollectionConfig(c)
    // URL
    const url = `https://v1.hitokoto.cn/?${r_c}&encode=${r_encode}&min_length=${r_min_length}&max_length=${r_max_length}`

    let swrc: object
    if (typeof aro == "undefined") {
        swrc = {}
    } else {
        if (aro === false) {
            swrc = {
                revalidateOnFocus: false,
                revalidateOnReconnect: false,
                refreshInterval: 0,
                refreshWhenHidden: false,
                refreshWhenOffline: false,
                revalidateIfStale: false,
            }
        } else {
            swrc = {}
        }
    }

    const ft = (uri: string) => fetch(uri).then((response) => response.text())
    const fj = (uri: string) => fetch(uri).then((response) => response.json())

    let data: string | object | undefined, error, mutate, isValidating
    if (r_encode === "json") {
        ;({ data, error, mutate, isValidating } = useSWR(url, fj, swrc))
    } else if (r_encode === "text") {
        ;({ data, error, mutate, isValidating } = useSWR(url, ft, swrc))
    }

    return { data, error, mutate, isValidating }
}

export default useHitokoto
