import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//Components
import Carousel from './Components/Carousel';
import Header from './Components/Header';
import CardItem from './Components/CardItem';
import LoaderPage from './Components/Loader/LoaderPage';

//Bootstrap 
import {CardGroup, Container} from 'react-bootstrap';
//Iconos
import "./fontello/css/fontello.css"

import './App.css';



function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route path="/" exact>
            <Suspense fallback={<LoaderPage />}>
              <Carousel />
              <h1>Productos destacados</h1>
              
            </Suspense>
          </Route>
          <Route path="/carta">
            <div className="carta">
              <h1>Carta</h1>
            </div>
          </Route>
          <Route path="*">
            <h1>404 Not Found</h1>
          </Route>
        </Switch>
      </BrowserRouter>
      {/* <Header/>
      <Carousel/>
      <h1 className="text-center mt-2">Productos destacados</h1>
      <Container fluid className="d-flex justify-content-center">
        <CardGroup>
          {Array.from({ length: 3 }).map((_, idx) => (
              <CardItem key={idx}/>
          ))}
        </CardGroup>
      </Container> */}
      
      
    </>
  );
}

export default App;
