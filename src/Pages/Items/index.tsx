import {faChessBishop, faChessKing, faChessPawn, faChessQueen} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Table from 'Components/Table';

import React, {ReactElement, useCallback, useRef, useState} from 'react';
import './styles.scss';
import useFetchSingle from "../../Hooks/useFetchSingle/hook";

type TempData = {
  name: string,
  type: string,
  level: number,
  icon: ReactElement
}

const arrData: Array<TempData> = [
  {name: 'Some Armor', type: 'Armor', level: 10, icon: <FontAwesomeIcon icon={faChessQueen}/>},
  {name: 'Some Weapon', type: 'Weapon', level: 12, icon: <FontAwesomeIcon icon={faChessKing}/>},
  {name: 'Some Trinket', type: 'Trinket', level: 20, icon: <FontAwesomeIcon icon={faChessPawn}/>},
  {name: 'Some Bow', type: 'Bow', level: 15, icon: <FontAwesomeIcon icon={faChessBishop}/>},
];

const arrColumns: Array<any> = [
  {Header: 'Name', accessor: 'name'},
  {Header: 'Type', accessor: 'type'},
  {Header: 'Level', accessor: 'level'},
  {Header: 'Icon', accessor: 'icon', disableSortBy: true},
];

type FetchDataProps = {
  pageSize: number,
  pageIndex: number
}

const Items = () => {

  const tPageSize = 1;

  const [data, setData] = useState<Array<object>>([]);
  const [loading, setLoading] = useState(false);
  const [pageCount, setPageCount] = useState(0);
  const fetchIdRef = useRef(0);

  const [pageSize, setPageSize] = useState(50);
  const [pageIndex, setPageIndex] = useState(0);

  const {data: apiData, loading: apiLoading, error: apiError, message: apiMessage} = useFetchSingle({endpoint: 'items', id: 28446});
  // const {data: apiData, loading: apiLoading} = useFetchSingle({endpoint: 'items'});

  const fetchData = useCallback(({pageSize, pageIndex}: FetchDataProps) => {
    setPageSize(pageSize);
    setPageIndex(pageIndex);

    setLoading(apiLoading);
    setData(apiData ? [apiData] : []);
    //
    // const fetchId = ++fetchIdRef.current;
    // console.log('Fetch: %d Ref: %d S: %d I:%d', fetchId, fetchIdRef.current, pageSize, pageIndex);
    // setTimeout(() => {
    //   if (fetchId === fetchIdRef.current) {
    //     const startRow = pageIndex * tPageSize;
    //     const endRow = startRow + tPageSize;
    //
    //     setData(arrData.slice(startRow, endRow));
    //
    //     setPageCount(Math.ceil(arrData.length / tPageSize));
    //
    //     // setLoading(false);
    //   }
    // }, 1000);

  }, []);

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
          <Table columns={arrColumns} data={data} loading={loading} fetchData={fetchData} pageCount={1} totalRecords={1}/>
          {/*<Table columns={arrColumns} data={data} fetchData={fetchData} loading={loading} pageCount={pageCount}*/}
          {/*       totalRecords={arrData.length}/>*/}
        </section>
      </div>
  );
};

export default Items;