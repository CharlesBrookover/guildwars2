import {
  faArrowLeft,
  faArrowRight,
  faBackwardStep,
  faForwardStep,
  faSortDown,
  faSortUp,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React, {useMemo} from 'react';
import {usePagination, useSortBy, useTable} from 'react-table';
import {Pagination, PaginationItem, PaginationLink} from 'reactstrap';

type TableProps = {
  columns: Array<any>,
  data: Array<any>
}

const Table = (props: TableProps) => {

  const columns = useMemo(() => props.columns, [props.columns]);
  const data = useMemo(() => props.data, [props.data]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: {pageIndex, pageSize},
  }
      = useTable({data, columns, initialState: {pageIndex: 0, pageSize: 2}}, useSortBy, usePagination);

  // setPageSize(1);

  return (
      <>
        <table className="table table-hover table-striped" {...getTableProps()}>
          <thead>
          {headerGroups.map(headerGroup =>
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column =>
                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                      {column.render('Header')}
                      <span className="ms-2">
                      {column.isSorted
                          ? column.isSortedDesc
                              ? <FontAwesomeIcon icon={faSortDown}/>
                              : <FontAwesomeIcon icon={faSortUp}/>
                          : ''}
                        </span>
                    </th>,
                )}
              </tr>,
          )}
          </thead>
          <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return <tr {...row.getRowProps()}>
              {row.cells.map(cell =>
                  <td {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </td>,
              )}
            </tr>;
          })}
          </tbody>
        </table>

        <Pagination aria-label="Search results pages">
          <PaginationItem  onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            <PaginationLink first tag="button">
              <FontAwesomeIcon icon={faBackwardStep} fixedWidth/>
            </PaginationLink>
          </PaginationItem>
          <PaginationItem onClick={() => previousPage()} disabled={!canPreviousPage}>
            <PaginationLink previous tag="button" >
              <FontAwesomeIcon icon={faArrowLeft} fixedWidth/>
            </PaginationLink>
          </PaginationItem>
          <PaginationItem disabled={true}>
            <PaginationLink href="#">
              Page {pageIndex + 1} of {pageOptions.length} ({pageSize})
            </PaginationLink>
          </PaginationItem>
          <PaginationItem onClick={() => nextPage()} disabled={!canNextPage}>
            <PaginationLink next tag="button" >
              <FontAwesomeIcon icon={faArrowRight} fixedWidth/>
            </PaginationLink>
          </PaginationItem>
          <PaginationItem onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
            <PaginationLink last tag="button" >
              <FontAwesomeIcon icon={faForwardStep} fixedWidth/>
            </PaginationLink>
          </PaginationItem>
        </Pagination>
      </>
  );
};

export default Table;