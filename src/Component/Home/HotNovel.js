import React, { Component } from 'react';
import axios from 'axios';
import ThumbTruyen from '../Home/ThumbTruyen';

class HotNovel extends Component {
    state = {
        hotnovel: []
      }
    
      componentDidMount() {
        axios.get(`https://m-api.iread.vn/api/bxh/book/hot?page=1&size=30`)
          .then(res => {
            const hotnovel = res.data.books;
            this.setState({ hotnovel });
          })
      }

      getHotNovel = () => {
           return(
            this.state.hotnovel.map((hotnovels,key) => (
                <ThumbTruyen key={key} name={hotnovels.title} slug={'/truyen/'+hotnovels.slug+'/'+hotnovels.bookId} img={hotnovels.avatar}></ThumbTruyen>
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
                        <span className="caption-subject bold font-yellow-casablanca uppercase"> Truyện Hot </span>
                        </div>
                    </div>
                    <div className="portlet-body">
                        <div className="row">
                        {this.getHotNovel()}
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

export default HotNovel;