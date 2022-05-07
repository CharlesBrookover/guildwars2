import {
  faArrowLeft,
  faArrowRight,
  faBackwardStep,
  faForwardStep,
  faSortDown,
  faSortUp,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React, {useEffect, useMemo} from 'react';
import {usePagination, useSortBy, useTable} from 'react-table';
import {Pagination, PaginationItem, PaginationLink} from 'reactstrap';

type TableProps = {
  columns: Array<any>,
  data: Array<any>,
  fetchData: any,
  loading: boolean,
  pageCount: number,
  totalRecords: number
}

const Table = (props: TableProps) => {

  console.log(props);

  const columns = useMemo(() => props.columns, [props.columns]);
  const data = useMemo(() => props.data, [props.data]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    headers,
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
      = useTable({data, columns, initialState: {pageIndex: 0}, manualPagination: true, pageCount: props.pageCount},
      useSortBy, usePagination);

  useEffect(() => {
    props.fetchData({pageIndex, pageSize});
  }, [pageIndex, pageSize]);

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
          {props.loading ? <tr>
                <td colSpan={headers.length}>'loading'</td>
              </tr> :
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
          }
        </table>

        <section id="TablePagination">
          <div className="d-flex justify-content-end">
            <div className="me-3 d-flex align-items-baseline">
              <div className="me-2">Rows Per Page</div>
              <div>
                <select className="form-select form-select-sm" aria-label="Number of records per search page"
                        value={pageSize} onChange={e => setPageSize(Number(e.target.value))}>
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                  <option value="200">200</option>
                </select>
              </div>
            </div>
            <Pagination aria-label="Search results pages" size="sm">
              <PaginationItem onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                <PaginationLink first tag="button">
                  <FontAwesomeIcon icon={faBackwardStep} fixedWidth/>
                </PaginationLink>
              </PaginationItem>
              <PaginationItem onClick={() => previousPage()} disabled={!canPreviousPage}>
                <PaginationLink previous tag="button">
                  <FontAwesomeIcon icon={faArrowLeft} fixedWidth/>
                </PaginationLink>
              </PaginationItem>
              <PaginationItem disabled={true}>
                <PaginationLink href="#">
                  Page {pageIndex + 1} of {pageOptions.length} ({props.totalRecords || -1})
                </PaginationLink>
              </PaginationItem>
              <PaginationItem onClick={() => nextPage()} disabled={!canNextPage}>
                <PaginationLink next tag="button">
                  <FontAwesomeIcon icon={faArrowRight} fixedWidth/>
                </PaginationLink>
              </PaginationItem>
              <PaginationItem onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                <PaginationLink last tag="button">
                  <FontAwesomeIcon icon={faForwardStep} fixedWidth/>
                </PaginationLink>
              </PaginationItem>
            </Pagination>
          </div>
        </section>
      </>
  );
};

export default Table;