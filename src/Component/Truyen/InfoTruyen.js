import React, { Component } from 'react';


class InfoTruyen extends Component {
    render() {
        return (
            <div className="col-md-3">
            <ul className="list-unstyled">
                <li>
                <div className="img-thumb">
                    <img alt={this.props.name} src={this.props.img} />
                    <div className="caption">
                    </div>
                </div>
                </li>
                <li>
                <div className="thongtintruyen note note-success">
                    <strong>Tác giả</strong>: {this.props.author}
                </div>
                </li>
                <li>
                <div className="thongtintruyen note note-info">
                    <strong>Trạng thái</strong>: {this.props.status}
                </div>
                </li>
                <li>
                <div className="thongtintruyen note note-danger">
                    <strong>Thể loại</strong>: {this.props.genres}
                </div>
                </li>
            </ul>
            </div>

        );
    }
}

export default InfoTruyen;