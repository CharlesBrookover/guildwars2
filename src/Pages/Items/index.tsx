import {faChessPawn as chessPawn} from '@fortawesome/free-regular-svg-icons';
import {
  faArrowLeft,
  faArrowRight,
  faBackwardStep,
  faChessKing,
  faChessPawn,
  faChessQueen,
  faForwardStep,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React, {useMemo} from 'react';
import {Column, Row, usePagination, useTable} from 'react-table';
import {Pagination, PaginationItem, PaginationLink} from 'reactstrap';
import './styles.scss';

const arrData = [
  {name: 'Some Armor', type: 'Armor', level: 10, icon: 'faChessQueen'},
  {name: 'Some Weapon', type: 'Weapon', level: 12, icon: 'faChessKing'},
  {name: 'Some Trinket', type: 'Trinket', level: 20, icon: 'faChessPawn'},
  {name: 'Some Bow', type: 'Bow', level: 15, icon: 'faChessBishop'},
];

const arrColumns: Column[] = [
  {Header: 'Name', accessor: 'name'},
  {Header: 'Type', accessor: 'type'},
  {Header: 'Level', accessor: 'level'},
  {Header: 'Icon', accessor: 'icon'},
];

const Items = () => {
  const data = useMemo(() => arrData, []);
  const columns = useMemo(() => arrColumns, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    setPageSize,
    nextPage,
    previousPage,
    gotoPage,
    pageCount,
    pageOptions,
    canNextPage,
    canPreviousPage,
    state: {pageIndex, pageSize},
  } = useTable(
      {data, columns, initialState: {pageIndex: 0}}, usePagination,
  );
  // const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = useTable({data, columns});

  // const tableInstance = useTable({columns, data});
  return (
      <div className="shadow border-1 rounded" id="ItemsMain">
        <section id="ItemsSearch" className="mb-3 py-2 border-bottom border-secondary">
          <form className="row row-cols-md-2 g-3 mx-3 align-items-center">
            <div className="col">
              <label className="visually-hidden" htmlFor="itemsSearch">Search</label>
              <input type="text" id="itemsSearch" className="form-control" placeholder="Search..."/>
            </div>
            <div className="col">
              <button type="submit" className="btn btn-light me-3">Search</button>
              <button type="reset" className="btn btn-light">Clear</button>
            </div>
          </form>
        </section>

        <section id="ItemsDisplay" className="mb-3 p-2">
          <table className="table table-hover table-striped" {...getTableProps()}>
            <thead>
            {headerGroups.map(headerGroup =>
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column =>
                      <th {...column.getHeaderProps()}>{column.render('Header')}</th>,
                  )}
                </tr>,
            )}
            </thead>
            <tbody {...getTableBodyProps()}>
            {page.map((row: Row<{}>, i: any) => {
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
            <PaginationItem>
              <PaginationLink first tag="button" onClick={() => gotoPage(0)}>
                <FontAwesomeIcon icon={faBackwardStep} fixedWidth/>
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink previous tag="button" onClick={() => previousPage()} disabled={!canPreviousPage}>
                <FontAwesomeIcon icon={faArrowLeft} fixedWidth/>
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <span>Page {pageIndex + 1} of {pageOptions.length}</span>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink next tag="button" onClick={() => nextPage()} disabled={!canNextPage}>
                <FontAwesomeIcon icon={faForwardStep} fixedWidth/>
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink last tag="button" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                <FontAwesomeIcon icon={faArrowRight} fixedWidth/>
              </PaginationLink>
            </PaginationItem>
          </Pagination>

          <table className="table table-hover table-striped table-success">
            <thead>
            <tr>
              <th>Name</th>
              <th>Icon</th>
              <th>Type</th>
              <th>Level</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>Some Armor</td>
              <td><FontAwesomeIcon icon={faChessQueen}/></td>
              <td>Armor</td>
              <td>10</td>
            </tr>
            <tr>
              <td>Some Weapon</td>
              <td><FontAwesomeIcon icon={faChessKing}/></td>
              <td>Weapon</td>
              <td>10</td>
            </tr>
            <tr>
              <td>Some Trinket</td>
              <td><FontAwesomeIcon icon={faChessPawn}/></td>
              <td>Trinket</td>
              <td>10</td>
            </tr>
            <tr>
              <td>Some Gizmo</td>
              <td><FontAwesomeIcon icon={chessPawn}/></td>
              <td>Gizmo</td>
              <td>10</td>
            </tr>
            </tbody>
          </table>
        </section>
        <section id="ItemsControls">
          <div className="row row-cols-2 justify-content-end">
            <div className="col">
              <select className="form-select" aria-label="Number of records per search page">
                <option value="25" selected>25</option>
                <option value="50">50</option>
                <option value="100">100</option>
                <option value="200">200</option>
              </select>
            </div>
            <div className="col">
              <Pagination aria-label="Search results pages">
                <PaginationItem><PaginationLink first tag="button"><FontAwesomeIcon icon={faBackwardStep}
                                                                                    fixedWidth/></PaginationLink></PaginationItem>
                <PaginationItem><PaginationLink previous tag="button"><FontAwesomeIcon icon={faArrowLeft}
                                                                                       fixedWidth/></PaginationLink></PaginationItem>
                <PaginationItem><PaginationLink next tag="button"/></PaginationItem>
                <PaginationItem><PaginationLink last tag="button"/></PaginationItem>
              </Pagination>
            </div>
          </div>
        </section>
      </div>
  );
};

export default Items;