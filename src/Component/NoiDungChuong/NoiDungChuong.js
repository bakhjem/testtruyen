import React, { Component } from 'react';
import axios from 'axios';
import TopContentChuong from './TopContentChuong';
import ListChuong from './ListChuong';
import './Css/nouislider.min.css';
import './Css/nouislider.pips.css';

class NoiDungChuong extends Component {
    state = {
        noidungchap: [],
        idchap: this.props.match.params.id,
        idtruyen: this.props.match.params.slug
      }
    
      componentDidMount() {
        axios.get(`https://m-api.iread.vn/api/chapter?chapterId=`+this.props.match.params.id)
          .then(res => {
            const noidungchap = res.data.chapter;
            this.setState({ noidungchap });
          })
      }
    render() {
        return (
            <div className="page-content-wrapper">
            <div className="page-content">
            <div className="row">
            <div className="col-md-12">
            <div className="portlet box blue-soft">
            <div className="portlet-title">
            <div className="caption">
            <h1 className="read"><i className="fa icon-notebook" /> {this.state.noidungchap.title}</h1></div>
            </div>
            <TopContentChuong idchap={this.state.idchap}></TopContentChuong>
            </div>
            <ListChuong idtruyen={this.state.idtruyen}></ListChuong>
            </div>
            </div>
            </div>
            </div>

        );
    }
}

export default NoiDungChuong;