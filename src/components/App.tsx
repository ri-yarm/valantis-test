import React from "react";
import Pagination from "components/Pagination";
import { styles } from "components/index.styles.ts";
import { useApp } from "components/useApp.ts";
import Filter from "components/Filter";
import CardList from "components/CardList";

function App() {
  const {
    total,
    ids,
    products,
    isCardsLoading,
    isIdsLoading,
    handleChangePage,
    setSearch,
  } = useApp();

  return (
    <ContainerSC>
      <h1>Поиск Ювелирных изделий</h1>

      <Filter setSearch={setSearch} />

      <CardList isCardsLoading={isCardsLoading} products={products} />

      <Pagination
        total={total}
        onPageClick={handleChangePage}
        loading={isIdsLoading || !ids}
      />
    </ContainerSC>
  );
}

const { ContainerSC } = styles;

export default React.memo(App);
