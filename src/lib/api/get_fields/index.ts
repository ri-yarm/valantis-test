import { axiosProject } from "lib/http";
import { GetFieldsArg } from "lib/api/get_fields/types.ts";

export const get_fields = ({ params }: GetFieldsArg) => {
  const data = JSON.stringify({
    action: "get_fields",
    params: {
      field: params?.field,
      limit: params?.limit,
      offset: params?.offset,
    },
  });

  return axiosProject.post("", data);
};
