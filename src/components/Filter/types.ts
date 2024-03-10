import { MFFields } from "lib/models";

export type FiltersValue = MFFields | "none";

export type FilterProps = {
  setSearch: (params: {
    filterValue: FiltersValue;
    inputValue: string;
  }) => void;
};
