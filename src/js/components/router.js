import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Home from '../containers/Home';
import Game from '../containers/Game';
import Score from './../containers/score';
import Registration from './../containers/registration';
import Settings from './../containers/settings';

const RouterApp = () => (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/registration' component={Registration}/>
        <Route exact path='/settings' component={Settings}/>
        <Route exact path='/game' component={Game}/>
        <Route exact path='/score' component={Score}/>
      </Switch>
    </BrowserRouter>
)
export default RouterApp;