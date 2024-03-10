import { axiosProject } from "lib/http";
import {
  GetItemsArg,
  GetItemsReq,
  GetItemsResponse,
} from "lib/api/get_items/types.ts";
import { AxiosResponse } from "axios";

export const get_items = ({
  params: { ids },
}: GetItemsArg): Promise<AxiosResponse<GetItemsResponse>> => {
  const data: GetItemsReq = {
    action: "get_items",
    params: { ids },
  };

  return axiosProject.postWithRetry("", data);
};
