import { useState } from "react";
import { MFFields } from "lib/models";
import { useQuery } from "@tanstack/react-query";
import { get_ids } from "lib/api/get_ids";
import { filter } from "lib/api/filter";
import { ADS_PER_PAGE } from "lib/constants";
import { get_items } from "lib/api/get_items";

export const useApp = () => {
  const [page, setPage] = useState(1);
  const [{ filterValue, inputValue }, setSearch] = useState<{
    filterValue: MFFields | "none";
    inputValue: string;
  }>({ filterValue: "none", inputValue: "" });

  const handleChangePage = (page: number) => {
    setPage(page);
  };

  const { data: ids, isLoading: isIdsLoading } = useQuery({
    queryKey: ["ids", filterValue, inputValue],
    queryFn: async () => {
      try {
        let value: string | number | null = inputValue;

        if (filterValue !== "none") {
          if (filterValue === "price") {
            value = parseInt(inputValue);
          } else if (filterValue === "brand" && inputValue === "") {
            value = null;
          }

          const response = await filter({
            params: { [filterValue]: value },
          });

          return response.data.result;
        }

        const response = await get_ids({});
        return response.data.result;
      } catch (err) {
        console.log(err);
        return null;
      }
    },
  });

  const { data: products, isLoading: isProductsLoading } = useQuery({
    queryKey: ["products", ids, page],
    enabled: !!ids,
    queryFn: async () => {
      try {
        if (!ids) return null;

        const offset = page * ADS_PER_PAGE;
        const response = await get_items({
          params: {
            ids: ids.slice(offset, ADS_PER_PAGE + offset),
          },
        });

        return response.data.result;
      } catch (err) {
        console.log(err);
        return null;
      }
    },
  });

  const isCardsLoading = isProductsLoading || isIdsLoading || !products;
  const total = ids?.length && Math.ceil(ids.length);

  return {
    total,
    ids,
    products,
    isCardsLoading,
    isIdsLoading,
    handleChangePage,
    setSearch,
  };
};
