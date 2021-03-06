import React from 'react';
import {Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/Header/Header';
import SideMenu from './components/SideMenu/SideMenu';
import Dashboard from './Dashboard';
import './App.css';

function App() {
  return (
    <>
      <SideMenu/>
      <div className="relative md:ml-64">
        <Header/>
        <div className="bg-blue-500 h-96 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <Switch>
            <Route path="/dashboard" exact component={Dashboard}/>
          </Switch>
        </div>
        </div>
      </div>
    </>
  );
}

export default App;
