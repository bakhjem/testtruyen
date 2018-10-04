import React, { Component } from 'react';
import { BrowserRouter as Router,Link, Route } from "react-router-dom";
import Home from '../Component/Home/Home';
import TrangTruyen from '../Component/Truyen/TrangTruyen';
import TheLoaiTruyen from '../Component/TheLoai/TheLoaiTruyen';
import NoiDungChuong from '../Component/NoiDungChuong/NoiDungChuong';

class DieuHuong extends Component {
    render() {
        return (
            <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/truyen/:slug/:id" component={TrangTruyen} />
            <Route exact path="/theloai/:slug/:id" component={TheLoaiTruyen} />
            <Route exact path="/:slug/:id" component={NoiDungChuong}/>
            </div>
        );
    }
}

export default DieuHuong;