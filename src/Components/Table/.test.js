import {faChessBishop, faChessKing, faChessPawn, faChessQueen} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {render} from '@testing-library/react';
import React from 'react';
import Table from './index';

const arrData = [
  {name: 'Some Armor', type: 'Armor', level: 10, icon: <FontAwesomeIcon icon={faChessQueen}/>},
  {name: 'Some Weapon', type: 'Weapon', level: 12, icon: <FontAwesomeIcon icon={faChessKing}/>},
  {name: 'Some Trinket', type: 'Trinket', level: 20, icon: <FontAwesomeIcon icon={faChessPawn}/>},
  {name: 'Some Bow', type: 'Bow', level: 15, icon: <FontAwesomeIcon icon={faChessBishop}/>},
  {name: 'Some Armor 2', type: 'Armor', level: 10, icon: <FontAwesomeIcon icon={faChessQueen}/>},
  {name: 'Some Weapon 2', type: 'Weapon', level: 12, icon: <FontAwesomeIcon icon={faChessKing}/>},
  {name: 'Some Trinket 2', type: 'Trinket', level: 20, icon: <FontAwesomeIcon icon={faChessPawn}/>},
  {name: 'Some Bow 2', type: 'Bow', level: 15, icon: <FontAwesomeIcon icon={faChessBishop}/>},
  {name: 'Some Armor 3', type: 'Armor', level: 10, icon: <FontAwesomeIcon icon={faChessQueen}/>},
  {name: 'Some Weapon 3', type: 'Weapon', level: 12, icon: <FontAwesomeIcon icon={faChessKing}/>},
  {name: 'Some Trinket 3', type: 'Trinket', level: 20, icon: <FontAwesomeIcon icon={faChessPawn}/>},
  {name: 'Some Bow 3', type: 'Bow', level: 15, icon: <FontAwesomeIcon icon={faChessBishop}/>},
];

const arrColumns = [
  {Header: 'Name', accessor: 'name'},
  {Header: 'Type', accessor: 'type'},
  {Header: 'Level', accessor: 'level'},
  {Header: 'Icon', accessor: 'icon', disableSortBy: true},
];

describe('Table tests', () => {

  it('Table displays', () => {
    render(<Table columns={arrColumns} data={arrData} loading={false} fetchData={jest.fn()} pageCount={1}
                  totalRecords={12}/>);


  });

  it('Table Snapshot', () => {
    render(<Table columns={arrColumns} data={arrData} loading={false} fetchData={jest.fn()} pageCount={1}
                  totalRecords={12}/>);



  });
});

