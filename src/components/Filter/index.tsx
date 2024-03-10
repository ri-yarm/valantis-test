import React from "react";
import { styles } from "components/Filter/index.styles.ts";
import { FilterProps } from "components/Filter/types.ts";
import FiltersButton from "components/Filter/FiltersButton";
import { useFilter } from "components/Filter/useFilter.ts";

const Filter = (props: FilterProps) => {
  const { filterValue, inputValue, handleInputChange, handleChangeFilter } =
    useFilter(props);

  return (
    <ContainerSC>
      <FiltersButton setFilterValue={handleChangeFilter} />

      {filterValue !== "none" && (
        <InputSC
          value={inputValue}
          onChange={handleInputChange}
          placeholder={filterValue + " debounce"}
        />
      )}
    </ContainerSC>
  );
};

const { ContainerSC, InputSC } = styles;

export default React.memo(Filter);
