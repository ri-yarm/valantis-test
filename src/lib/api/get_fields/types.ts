import { MFFields } from "lib/models";

export type GetFieldsArg = {
  params?: GetFieldsTRequest;
};

export type GetFieldsTRequest = {
  field?: MFFields;
  offset?: number;
  limit?: number;
};

export type GetFieldsResponse = {
  result: (string | number | null)[];
};

export interface GetFieldReq extends GetFieldsArg {
  action: "get_fields";
}
