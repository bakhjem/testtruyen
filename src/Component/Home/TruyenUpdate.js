import React, { Component } from 'react';
import axios from 'axios';
import ThumbTruyen from '../Home/ThumbTruyen';

class TruyenUpdate extends Component {
    state = {
        truyenupdate: []
      }
    
      componentDidMount() {
        axios.get(`https://m-api.iread.vn/api/book/getBooks?catId=&page=1&sort=1&size=30`)
          .then(res => {
            const truyenupdate = res.data.books;
            this.setState({ truyenupdate });
          })
      }

      getTruyenUpdate = () => {
           return(
            this.state.truyenupdate.map((updatenovel,key) => (
                <ThumbTruyen key={key} name={updatenovel.title} slug={'/truyen/'+updatenovel.slug+'/'+updatenovel.bookId} img={updatenovel.avatar}></ThumbTruyen>
            ))
           ) 
      }
    render() {
        return (
            <div className="page-content-wrapper">
            <div className="page-content">
            <div className="row">
                <div className="col-md-12">
                    {/* BEGIN Portlet PORTLET*/}
                    <div className="portlet light boxhome">
                    <div className="portlet-title">
                        <div className="caption">
                        <i className="icon-book-open font-yellow-casablanca" />
                        <span className="caption-subject bold font-yellow-casablanca uppercase"> Mới Cập Nhật </span>
                        </div>
                    </div>
                    <div className="portlet-body">
                        <div className="row">
                        {this.getTruyenUpdate()}
                        </div>
                    </div>
                    </div>
                    {/* END Portlet PORTLET*/}
                </div>
                </div>
                </div>
            </div>
        );
    }
}

export default TruyenUpdate;