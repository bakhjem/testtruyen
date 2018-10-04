import React, { Component } from 'react';
import { BrowserRouter as Router,Link, Route } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            
            <div className="page-header navbar">
            {/* BEGIN HEADER INNER */}
            <div className="page-header-inner ">
                {/* BEGIN LOGO */}
                <div className="page-logo">
                <Link title="Đọc truyện Online" to="/">
                    <img title="Đọc truyện Online" alt="Đọc truyện Online" src="/images/logo.svg" height="70px" style={{margin: '1px 10px 0 10px'}} /> </Link>
                </div>
                {/* END LOGO */}
                {/* BEGIN RESPONSIVE MENU TOGGLER */}
                <a href="javascript:;" className="menu-toggler responsive-toggler" data-toggle="collapse" data-target=".navbar-collapse"> </a>
                {/* END RESPONSIVE MENU TOGGLER */}
                {/* BEGIN PAGE TOP */}
                <div className="page-top">
                {/* BEGIN HEADER SEARCH BOX */}
                <form className="search-form" action="/" method="GET">
                    <div className="input-group">
                    <input type="text" className="form-control input-sm" placeholder="Nhập tên truyện hoặc tác giả muốn tìm kiếm..." name="s" />
                    <span className="input-group-btn">
                        <a href="javascript:;" className="btn submit">
                        <i className="icon-magnifier" />
                        </a>
                    </span>
                    </div>
                </form>
                {/* END HEADER SEARCH BOX */}
                </div>
                {/* END PAGE TOP */}
            </div>
            {/* END HEADER INNER */}
            </div>
        );
    }
}

export default Header;