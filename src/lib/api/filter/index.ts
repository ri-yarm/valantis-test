import { axiosProject } from "lib/http";
import {
  FilterArg,
  FilterResponse,
  GetFilterReq,
} from "lib/api/filter/types.ts";
import { AxiosResponse } from "axios";

export const filter = ({
  params,
}: FilterArg): Promise<AxiosResponse<FilterResponse>> => {
  const data: GetFilterReq = {
    action: "filter",
    params: params,
  };

  return axiosProject.postWithRetry("", data);
};
