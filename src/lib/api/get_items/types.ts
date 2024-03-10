import { MProduct } from "lib/models";

export type GetItemsRequest = {
  ids: string[];
};

export type GetItemsResponse = {
  result: MProduct[];
};

export type GetItemsArg = {
  params: GetItemsRequest;
};

export interface GetItemsReq extends GetItemsArg {
  action: "get_items";
}
