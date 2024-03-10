export type FilterArg = {
  params: FilterRequest;
};

export type FilterRequest = Record<string, number | string | null>;

export type FilterResponse = {
  result: string[];
};

export interface GetFilterReq extends FilterArg {
  action: "filter";
}
