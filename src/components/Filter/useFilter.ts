import React, { useEffect, useState } from "react";
import { FilterProps, FiltersValue } from "components/Filter/types.ts";

export const useFilter = ({ setSearch }: FilterProps) => {
  const [filterValue, setFilterValue] = useState<FiltersValue>("none");
  const [inputValue, setInputValue] = useState("");

  const handleChangeFilter = (filter: FiltersValue) => {
    setFilterValue(filter);
    setInputValue("");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.target.value);

  useEffect(() => {
    const delaySearch = setTimeout(() => {
      if (filterValue === "none") {
        setSearch({ filterValue, inputValue });
        return;
      }

      if (inputValue.trim() !== "") {
        setSearch({ filterValue, inputValue });
      }
    }, 900);

    return () => clearTimeout(delaySearch);
  }, [inputValue, filterValue, setSearch]);

  return { filterValue, inputValue, handleChangeFilter, handleInputChange };
};
