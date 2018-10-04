import React, { Component } from 'react';
import { BrowserRouter as Router,Link, Route } from "react-router-dom";

class TheLoaiDetail extends Component {
    render() {
        return (
            <li className="nav-item  ">
                  <a href={this.props.slug} title={this.props.name} className="nav-link nav-toggle">
                    <i className="icon-tag" />
                    <span className="title">{this.props.name}</span>
                  </a>
            </li>
        );
    }
}

export default TheLoaiDetail;