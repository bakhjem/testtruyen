import React, { Component } from 'react';
import axios from 'axios';
import ThumbTruyen from '../Home/ThumbTruyen';

class TheLoaiTruyen extends Component {
    state = {
        truyentheloai: []
      }
    
      componentDidMount() {
        axios.get(`https://m-api.iread.vn/api/book/getBooks?catId=`+this.props.match.params.id+`&page=1&sort=1&size=30`)
          .then(res => {
            const truyentheloai = res.data.books;
            this.setState({ truyentheloai });
          })
      }

      getTheLoaiTruyen = () => {
           return(
            this.state.truyentheloai.map((novelgenre,key) => (
                <ThumbTruyen key={key} name={novelgenre.title} slug={'/truyen/'+novelgenre.slug+'/'+novelgenre.bookId} img={novelgenre.avatar}></ThumbTruyen>
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
                        <span className="caption-subject bold font-yellow-casablanca uppercase"> Thể Loại </span>
                        </div>
                    </div>
                    <div className="portlet-body">
                        <div className="row">
                        {this.getTheLoaiTruyen()}
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

export default TheLoaiTruyen;