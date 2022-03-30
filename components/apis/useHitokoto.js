import useSWR from "swr";

function useHitokoto(options) {
    const collection = {
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
    };

    const { collection: c, type: encode, min: min_length, max: max_length, ar: aro } = options;

    // 传入格式为字符串，不同单词用空格隔开，例如"anime comics" and output "c=a&c=b"
    function toCollectionConfig(e) {
        // 判空与默认值
        if (typeof e !== "string") {
            if (typeof e == "undefined") {
                return "c=a";
            } else {
                throw "Collection must be a string";
            }
        }
        let arr = new Array();
        const s_o = e.trim().split(" ");
        s_o.forEach((element) => {
            // 将匹配的导出为对象
            const i = Object.entries(collection)
                .filter((e) => e[0] === element)
                .map((e) => e[1]);

            // 声明数据
            let single;
            if (JSON.stringify(i) !== "[]") {
                single = ["c=", i.toString()].join("");
            } else {
                throw "Collection not found";
            }
            arr.push(single);
        });
        return arr.join("&");
    }

    const r_c = toCollectionConfig(c);

    // 预先声明参数
    let r_encode, r_min_length, r_max_length;

    if (encode === "json") {
        r_encode = "json";
    } else if (encode === "text") {
        r_encode = "text";
    } else if (typeof encode == "undefined") {
        r_encode = "json";
    } else {
        throw "encode must be json or text";
    }

    function isNum(value) {
        return typeof value === "number" && !isNaN(value);
    }

    // 判空与默认值
    if (isNum(min_length) && isNum(max_length)) {
        r_min_length = min_length;
        r_max_length = max_length;
    } else if (typeof min_length == "undefined" && typeof max_length !== "undefined") {
        r_min_length = 0;
        r_max_length = max_length;
    } else if (typeof min_length !== "undefined" && typeof max_length == "undefined") {
        r_min_length = min_length;
        r_max_length = 20;
    } else if (typeof min_length == "undefined" && typeof max_length == "undefined") {
        r_min_length = 0;
        r_max_length = 20;
    } else {
        throw "min_length and max_length must be number";
    }

    const url = `https://v1.hitokoto.cn/?${r_c}&encode=${r_encode}&min_length=${r_min_length}&max_length=${r_max_length}`;

    const ptf = (url) => fetch(url).then((response) => response.text());
    const ptj = (url) => fetch(url).then((response) => response.json());

    // 判空与默认值
    let swrc;
    if (aro === false) {
        swrc = {
            revalidateOnFocus: false,
            revalidateOnReconnect: false,
            refreshInterval: 0,
            refreshWhenHidden: false,
            refreshWhenOffline: false,
            revalidateIfStale: false,
        };
    } else if (aro === true) {
        swrc = {
            revalidateOnFocus: true,
            revalidateOnReconnect: true,
        };
    } else if (typeof aro == "undefined") {
        swrc = {
            revalidateOnFocus: true,
            revalidateOnReconnect: true,
        };
    } else {
        throw "aro must be true or false";
    }

    // 选择合适的方法
    let data, error, mutate;
    if (r_encode === "json") {
        ({ data, error, mutate } = useSWR(url, ptj, swrc));
    } else if (r_encode === "text") {
        ({ data, error, mutate } = useSWR(url, ptf, swrc));
    }

    return { data, error, mutate };
}

export default useHitokoto;
