import { axiosProject } from "lib/http";
import { GetItemsArg, GetItemsResponse } from "lib/api/get_items/types.ts";

export const get_items = ({ params: { ids } }: GetItemsArg) => {
  const data = JSON.stringify({
    action: "get_items",
    params: { ids },
  });

  return axiosProject.post<GetItemsResponse>("", data);
};
