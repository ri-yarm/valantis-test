import { MFFields } from "lib/models";

export type GetFieldsArg = {
  signal: AbortSignal;
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
