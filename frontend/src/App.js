
import './App.css';
import { useState } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

//screens
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Cartscreen from './screens/Cartscreen';

//components
import Navbar from './components/Navbar';
import Backdrop from './components/Backdrop';
import SideDrawer from './components/SideDrawer';

function App() {

 const [sideToggle, setSideToggle] = useState(false);

  return (
    <BrowserRouter>
  
      <Navbar click={() => setSideToggle(true) }/>
      <SideDrawer show={sideToggle} click={() =>setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() =>setSideToggle(false)}/>
      <main>
        <Switch> 
          <Route component= {HomeScreen} path ="/" exact />
          <Route component={ ProductScreen} path="/product/:id" exact />
          <Route component={Cartscreen} path="/cart" exact />
        </Switch>
      </main>
   
   </BrowserRouter> 
  );
}

export default App;
