import React from "react";
import { MProduct } from "lib/models";
import { styles } from "components/CardList/CardListItem/index.styles.ts";

const CardListItem = ({ id, product, price, brand }: MProduct) => {
  return (
    <ContainerSC>
      {brand && <SubtitleSC>{brand}</SubtitleSC>}

      <TitleSC>{product}</TitleSC>
      <IdSC>{id}</IdSC>
      <PriceSC>{price} ₽</PriceSC>
    </ContainerSC>
  );
};

const { ContainerSC, TitleSC, SubtitleSC, PriceSC, IdSC } = styles;

export default React.memo(CardListItem);
