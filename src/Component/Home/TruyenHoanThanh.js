import React, { Component } from 'react';
import axios from 'axios';
import ThumbTruyen from './ThumbTruyen';

class TruyenHoanThanh extends Component {
    state = {
        truyenhoanthanh: []
      }
    
      componentDidMount() {
        axios.get(`https://m-api.iread.vn/api/book/getBooks?catId=&page=1&sort=4&size=12&full=1`)
          .then(res => {
            const truyenhoanthanh = res.data.books;
            this.setState({ truyenhoanthanh });
          })
      }

      getTruyenHoanThanh = () => {
           return(
            this.state.truyenhoanthanh.map((comnovel,key) => (
                <ThumbTruyen key={key} name={comnovel.title} slug={'/truyen/'+comnovel.slug+'/'+comnovel.bookId} img={comnovel.avatar}></ThumbTruyen>
            ))
           ) 
      }
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    {/* BEGIN Portlet PORTLET*/}
                    <div className="portlet light boxhome">
                    <div className="portlet-title">
                        <div className="caption">
                        <i className="icon-book-open font-yellow-casablanca" />
                        <span className="caption-subject bold font-yellow-casablanca uppercase"> Truyện Hoàn Thành </span>
                        </div>
                    </div>
                    <div className="portlet-body">
                        <div className="row">
                        {this.getTruyenHoanThanh()}
                        </div>
                    </div>
                    </div>
                    {/* END Portlet PORTLET*/}
                </div>
                </div>
        );
    }
}

export default TruyenHoanThanh;