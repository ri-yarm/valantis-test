import axios, { AxiosResponse } from "axios";
import { BASE_INTERVAL, BASE_URL } from "../constants";
import { setAuthHeaders } from "lib/functions/setApiHeaders.ts";
import { GetItemsReq } from "lib/api/get_items/types.ts";
import { GetIdsReq } from "lib/api/get_ids/types.ts";
import { GetFilterReq } from "lib/api/filter/types.ts";
import { GetFieldReq } from "lib/api/get_fields/types.ts";

const createInstance = () => {
  return axios.create({
    baseURL: BASE_URL,
    timeout: +2500,
    headers: {
      "Content-Type": "application/json",
      "X-Auth": setAuthHeaders(),
    },
  });
};

export const axiosProject = {
  postWithRetry: async (
    _: string,
    data: GetItemsReq | GetIdsReq | GetFilterReq | GetFieldReq,
    delay = BASE_INTERVAL,
  ): Promise<AxiosResponse> => {
    try {
      const reqData = JSON.stringify(data);
      return await createInstance().post(_, reqData);
    } catch (err) {
      console.log(
        "произошла ошибка, делаю повторный запрос, УВЕЛИЧИВАЮ ИНТЕРВАЛЫ, МЕЖДУ ЗАПРОСАМИ",
      );

      await new Promise((resolve) => setTimeout(resolve, delay));

      return await axiosProject.postWithRetry(_, data, delay * 1.2);
    }
  },
};
