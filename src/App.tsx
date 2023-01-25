import React from 'react';
import './App.css';
import {Header} from "./components/header";
import {Card} from "./components/card";

const App = () => {
  return (
    <div>
      <Header/>
      <div className={'pink-line'}/>
      <Card/>
    </div>
  );
}

export default App;
