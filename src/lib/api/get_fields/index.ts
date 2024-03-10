import { axiosProject } from "lib/http";
import {
  GetFieldReq,
  GetFieldsArg,
  GetFieldsResponse,
} from "lib/api/get_fields/types.ts";
import { AxiosResponse } from "axios";

export const get_fields = ({
  params,
}: GetFieldsArg): Promise<AxiosResponse<GetFieldsResponse>> => {
  const data: GetFieldReq = {
    action: "get_fields",
    params: {
      field: params?.field,
      limit: params?.limit,
      offset: params?.offset,
    },
  };

  return axiosProject.postWithRetry("", data);
};
