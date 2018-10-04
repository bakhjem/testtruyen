import React, { Component } from 'react';
import axios from 'axios';
import ThumbTruyen from './ThumbTruyen';


class MoiCapNhat extends Component {
    state = {
        moicapnhat: []
      }
    
      componentDidMount() {
        axios.get(`https://m-api.iread.vn/api/book/getBooks?catId=&page=1&sort=1&size=12`)
          .then(res => {
            const moicapnhat = res.data.books;
            this.setState({ moicapnhat });
          })
      }

      getMottruyenMoi = () => {
           return(
            this.state.moicapnhat.map((newnovel,key) => (
                <ThumbTruyen key={key} name={newnovel.title} slug={'/truyen/'+newnovel.slug+'/'+newnovel.bookId} img={newnovel.avatar}></ThumbTruyen>
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
                        <span className="caption-subject bold font-yellow-casablanca uppercase"> Mới nhất </span>
                        </div>
                    </div>
                    <div className="portlet-body">
                        <div className="row">
                        {this.getMottruyenMoi()}
                        </div>
                    </div>
                    </div>
                    {/* END Portlet PORTLET*/}
                </div>
                </div>
        );
    }
}

export default MoiCapNhat;