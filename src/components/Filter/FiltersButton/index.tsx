import React from "react";
import styled from "styled-components";
import { MFFieldsArray } from "components/Filter/FiltersButton/types.ts";
import { FiltersValue } from "components/Filter/types.ts";

const but: MFFieldsArray = [
  { filter: "product", title: "по названию продукта" },
  { filter: "price", title: "по цене" },
  { filter: "brand", title: "по названию бренда" },
  { filter: "none", title: "по релевантности" },
];

type FilterButtonProps = {
  setFilterValue: (filter: FiltersValue) => void;
};

const FiltersButton = ({ setFilterValue }: FilterButtonProps) => {
  return (
    <>
      <TextSC>фильтровать по:</TextSC>
      <ContainersSC>
        {but.map((item) => (
          <button key={item.filter} onClick={() => setFilterValue(item.filter)}>
            {item.title}
          </button>
        ))}
      </ContainersSC>
    </>
  );
};

export default React.memo(FiltersButton);

const ContainersSC = styled.div`
  margin-bottom: 15px;

  display: flex;
  gap: 16px;
`;

const TextSC = styled.p`
  margin: 0 auto 8px;
`;
