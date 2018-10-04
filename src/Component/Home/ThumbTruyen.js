import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class ThumbTruyen extends Component {
    render() {
        return (
            <div className="col-xs-6 col-sm-4 col-md-2">
                            <Link to={this.props.slug}>
                            <div className="img-wrap">
                                <img className="lazy" data-original={this.props.img} src={this.props.img} alt={this.props.name} />
                                <div className="caption">
                                <h6 style={{textAlign: 'center'}}>{this.props.name}</h6>
                                </div>
                            </div>
                            </Link>
           </div>
        );
    }
}

export default ThumbTruyen;