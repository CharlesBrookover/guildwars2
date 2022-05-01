import {faChessKing, faChessPawn, faChessQueen, faBackwardStep, faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {faChessPawn as chessPawn} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';
import './styles.scss';
import {Pagination, PaginationItem, PaginationLink} from 'reactstrap';

const Items = () => {
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
               <PaginationItem><PaginationLink first tag="button"><FontAwesomeIcon icon={faBackwardStep} fixedWidth /></PaginationLink></PaginationItem>
               <PaginationItem><PaginationLink previous tag="button"><FontAwesomeIcon icon={faArrowLeft} fixedWidth/></PaginationLink></PaginationItem>
               <PaginationItem><PaginationLink next tag="button" /></PaginationItem>
               <PaginationItem><PaginationLink last tag="button" /></PaginationItem>
             </Pagination>
            </div>
          </div>
        </section>
      </div>
  );
};

export default Items;