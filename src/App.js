import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//Components
import Home from './Views/Home';
import Carta from './Views/Carta';
import Detail from './Views/Detail';
import Header from './Components/Header';
import Carrito from './Views/Cart';
import Pagar from './Views/Checkout';

import LoaderPage from './Components/Loader/LoaderPage';

//Iconos
import "./fontello/css/fontello.css"

import './App.css';

//Context
import {Store} from './Context/Store';


function App() {
  return (
    <Store>
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route path="/" exact>
            <Suspense delayMs={500} fallback={<LoaderPage />}>
              <Home />
            </Suspense>
          </Route>
          <Route path="/carta">
            <Suspense delayMs={500} fallback={<LoaderPage />}>
              <Carta/>
            </Suspense>
          </Route>
          <Route path="/detalle/:id?">
            <Suspense delayMs={500} fallback={<LoaderPage />}>  
              <Detail/>
            </Suspense>
          </Route>
          <Route path="/carrito">
            <Suspense delayMs={500} fallback={<LoaderPage />}>  
              <Carrito/>
            </Suspense>
          </Route>
          <Route path="/pagar">
            <Suspense delayMs={500} fallback={<LoaderPage />}>  
              <Pagar/>
            </Suspense>
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
      
      
    </Store>
  );
}

export default App;
