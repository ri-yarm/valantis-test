export type GetIdsRequest = {
  offset?: number;
  limit?: number;
};
export type GetIdsResponse = {
  result: string[];
};

export type GetIdsArgs = {
  params?: GetIdsRequest;
};
