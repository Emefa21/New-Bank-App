import React from 'react'
import Header from "./components/Header";
import 'antd/dist/antd.css';
import Clock from './components/Clock';
import Accounts from './components/Accounts';
// import "./App.css";


function App() {
  return (
    <div className="App">
      <Header />
      <Clock />
      <Accounts />
      
    </div>
  );
}

export default App;
