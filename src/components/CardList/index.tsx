import React from "react";
import CardListItem from "components/CardList/CardListItem";
import { styles } from "components/CardList/index.styles.ts";
import { MProduct } from "lib/models";

interface CardList {
  isCardsLoading: boolean;
  products: MProduct[] | null | undefined;
}

const CardList = ({ isCardsLoading, products }: CardList) => {
  const uniqueProducts = products?.reduce(
    (acc: MProduct[], current: MProduct) => {
      const isDuplicate = acc.some((item) => item.id === current.id);

      if (!isDuplicate) {
        acc.push(current);
      }

      return acc;
    },
    [] as MProduct[],
  );

  return (
    <ContainerSC>
      {isCardsLoading ? (
        <p>loading</p>
      ) : (
        <ListSC>
          {uniqueProducts?.map((item) => (
            <CardListItem key={item.id} {...item} />
          ))}
        </ListSC>
      )}
    </ContainerSC>
  );
};

const { ContainerSC, ListSC } = styles;

export default React.memo(CardList);
