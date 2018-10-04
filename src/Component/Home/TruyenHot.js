import React, { Component } from 'react';
import axios from 'axios';
import ThumbTruyen from './ThumbTruyen';

class TruyenHot extends Component {
    state = {
        truyenhot: []
      }
    
      componentDidMount() {
        axios.get(`https://m-api.iread.vn/api/bxh/book/hot?page=1&size=12`)
          .then(res => {
            const truyenhot = res.data.books;
            this.setState({ truyenhot });
          })
      }

      getMotTruyenHot = () => {
           return(
            this.state.truyenhot.map((hotnovel,key) => (
                <ThumbTruyen key={key} name={hotnovel.title} slug={'/truyen/'+hotnovel.slug+'/'+hotnovel.bookId} img={hotnovel.avatar}></ThumbTruyen>
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
                        <span className="caption-subject bold font-yellow-casablanca uppercase"> Đang HOT </span>
                        </div>
                    </div>
                    <div className="portlet-body">
                        <div className="row">
                        {this.getMotTruyenHot()}
                        </div>
                    </div>
                    </div>
                    {/* END Portlet PORTLET*/}
                </div>
                </div>

        );
    }
}

export default TruyenHot;