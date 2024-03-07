import { axiosProject } from "lib/http";
import { GetIdsArgs, GetIdsResponse } from "lib/api/get_ids/types.ts";

export const get_ids = ({ params }: GetIdsArgs) => {
  const data = JSON.stringify({
    action: "get_ids",
    params: { offset: params?.offset, limit: params?.limit },
  });

  return axiosProject.post<GetIdsResponse>("", data);
};
