import React from 'react';

import { Switch, Route } from 'react-router-dom';

import HomePage from './Components/pages/homepage/homepage.components';
import ShopPage from './Components/pages/shop/shop.components';

import './App.css';



function App() {
  return (
    <div>
      <Switch >
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>

    </div>
  );
}

export default App;
