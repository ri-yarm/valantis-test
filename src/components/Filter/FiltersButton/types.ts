import { FiltersValue } from "components/Filter/types.ts";

type MFFieldObject = {
  filter: FiltersValue;
  title: string;
};

export type MFFieldsArray = Array<MFFieldObject>;
