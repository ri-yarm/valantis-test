import React from "react";
import ReactPaginate from "react-paginate";
import { ADS_PER_PAGE } from "lib/constants";
import { styles } from "components/Pagination/index.styles.ts";

interface PaginationProps {
  total: number | undefined;
  onPageClick: (page: number) => void;
  loading: boolean;
}

const Pagination = ({ total, loading, onPageClick }: PaginationProps) => {
  return (
    <ContainerSC>
      {loading && total ? (
        <p>loading</p>
      ) : (
        <ReactPaginate
          nextLabel="next >"
          onPageChange={({ selected }) => onPageClick(selected)}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={(total as number) / ADS_PER_PAGE}
          previousLabel="< previous"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
        />
      )}
    </ContainerSC>
  );
};

const { ContainerSC } = styles;

export default React.memo(Pagination);
