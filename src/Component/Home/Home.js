import React, { Component } from 'react';
import TruyenHot from './TruyenHot';
import MoiCapNhat from './MoiCapNhat';
import TruyenHoanThanh from './TruyenHoanThanh';

class Home extends Component {
    render() {
        return (
            <div className="page-content-wrapper">
            {/* BEGIN CONTENT BODY */}
            <div className="page-content">
            <TruyenHot></TruyenHot>
            <MoiCapNhat></MoiCapNhat>
            <TruyenHoanThanh></TruyenHoanThanh>
            </div>
            </div>

        );
    }
}

export default Home;