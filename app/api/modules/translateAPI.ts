// eslint-disable-next-line import/extensions

import axiosClient from "../axiosClient";

const translateAPI = {
  getLanguages: () => axiosClient.get("/languages"),
  translate: (text: string, lang: string) =>
    axiosClient.post("/translate", null, {
      params: {
        q: text,
        source: "en",
        target: lang,
        format: "text",
        api_key: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      },
    }),
};

export default translateAPI;
