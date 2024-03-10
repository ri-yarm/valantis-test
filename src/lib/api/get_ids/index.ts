import { axiosProject } from "lib/http";
import {
  GetIdsArgs,
  GetIdsReq,
  GetIdsResponse,
} from "lib/api/get_ids/types.ts";
import { AxiosResponse } from "axios";

export const get_ids = ({
  params,
}: GetIdsArgs): Promise<AxiosResponse<GetIdsResponse>> => {
  const data: GetIdsReq = {
    action: "get_ids",
    params: { offset: params?.offset, limit: params?.limit },
  };

  return axiosProject.postWithRetry("", data);
};
