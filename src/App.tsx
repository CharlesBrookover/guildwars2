import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.scss';
import Header from './Components/Header';
import Home from './Pages/Home';
import Items from './Pages/Items';
import NoMatch from './Pages/NoMatch';

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Header/>
          <main>
            <div className="container">
              <div className="row">
                <div className="mx-auto col">
                  <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="items" element={<Items/>}/>
                    <Route path="*" element={<NoMatch/>}/>
                  </Routes>
                </div>
              </div>
            </div>
          </main>
          <footer>
            <div className="d-flex justify-content-end">
              <p className="p-3">&copy; 2022 Charles Brookover</p>
            </div>
          </footer>
        </div>
      </BrowserRouter>
  );
}

export default App;
