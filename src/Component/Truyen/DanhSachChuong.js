import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class DanhSachChuong extends Component {
    state = {
        danhsachchap: []
      }
    
      componentDidMount() {
        axios.get(`https://m-api.iread.vn/api/chapter/getChapters?bookId=`+this.props.idchuong)
          .then(res => {
            const danhsachchap = res.data.chapters;
            this.setState({ danhsachchap });
          })
      }

    render() {
        console.log(this.props.idchuong)
        return (
            
                <div className="tab-pane active" id="tab_1_1_1">
                <div id="listchuong">
                    <ul className="list-unstyled">
                    { this.state.danhsachchap.map((chapter,key) => 
                    <li key={key}><span className="fa fa-book" /> <Link  title={chapter.title} to={'/'+chapter.bookId+'/'+chapter.chapterId}>{chapter.title} </Link> </li>)}
                    </ul>
                </div>
                </div>
        );
    }
}

export default DanhSachChuong;