import React from 'react';

const Items = () => {
  return (
      <div className="shadow bg-pink">
      <form className="row row-cols-md-auto g-3 align-items-center">
          <div className="col-12">
            <label className="visually-hidden" htmlFor="itemsSearch">Search</label>
            <input type="text" id="itemsSearch" className="form-control" placeholder="Search..."/>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-light me-3">Search</button>
            <button type="reset" className="btn btn-light">Clear</button>
          </div>
      </form>
      </div>
  );
};

export default Items;