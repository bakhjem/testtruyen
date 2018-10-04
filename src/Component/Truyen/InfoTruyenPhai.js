import React, { Component } from 'react';

class InfoTruyenPhai extends Component {
    render() {
        return (
            <div className="gioithieutruyen col-md-8 profile-info">
            <h1 className="font-green sbold uppercase">{this.props.name}</h1>
            <div className="gioithieutruyen">
                <div className="noidung show-more-height">
                {this.props.gioithieu}
                </div>
                <div className="show-more">(Xem thêm)</div>
            </div>
            </div>

        );
    }
}

export default InfoTruyenPhai;