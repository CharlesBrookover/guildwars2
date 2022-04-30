import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import Home from './pages/Home';
import Items from './pages/Items';
import NoMatch from './pages/NoMatch';

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Header/>
          <main>
            <div className="row">
              <div className="mx-auto col-10 bg-danger">
                <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="items" element={<Items/>}/>
                  <Route path="*" element={<NoMatch/>}/>
                </Routes>
              </div>
            </div>
          </main>
          <footer>
            <p>&copy; 2022 Charles Brookover</p>
          </footer>
        </div>
      </BrowserRouter>
  );
}

export default App;
