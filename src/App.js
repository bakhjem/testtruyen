import React, { Component } from 'react';
import './App.css';
import Header from './Containers/Header';
import TheLoaiPhai from './Containers/TheLoaiPhai';
import DieuHuong from './Router/DieuHuong';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Header></Header>
        <div className="clearfix"> </div>
        <div className="page-container">
        <TheLoaiPhai></TheLoaiPhai>
        <DieuHuong></DieuHuong>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
