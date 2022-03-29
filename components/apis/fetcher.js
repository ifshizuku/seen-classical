// Plain Text Fetcher - Hitokoto
export const ptf = (url) => fetch(url).then((response) => response.text());
