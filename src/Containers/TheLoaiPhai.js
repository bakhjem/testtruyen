import React, { Component } from 'react';
import axios from 'axios';
import TheLoaiDetail from '../Component/TheLoai/TheLoaiDetail';

class TheLoaiPhai extends Component {
    state = {
        theloai: []
      }
    
      componentDidMount() {
        axios.get(`https://m-api.iread.vn/api/category/getStatsCatsLv1`)
          .then(res => {
            const theloai = res.data.cats;
            this.setState({ theloai });
          })
      }

      getMotTheLoai = () => {
           return(
            this.state.theloai.map((genre,key) => (
                <TheLoaiDetail key={key} name={genre.catName} slug={'/theloai/'+genre.slug+'/'+genre.catId}></TheLoaiDetail>
            ))
           ) 
      }
    render() {
      
        return (
            <div className="page-sidebar-wrapper">
            <div className="page-sidebar navbar-collapse collapse">
              <ul className="page-sidebar-menu" data-keep-expanded="false" data-auto-scroll="false" data-slide-speed={200}>
                <li className="nav-item start ">
                  <a title="Đọc truyện online" href="trang-chu/" className="nav-link nav-toggle">
                    <i className="icon-home" />
                    <span className="title">Trang chủ</span>
                  </a>
                </li>
                <li className="heading">
                  <h3 className="uppercase">Thống Kê</h3>
                </li>
                <li className="nav-item  ">
                  <a title="Đọc truyện online mới nhất" href="moi-nhat/" className="nav-link nav-toggle">
                    <i className="icon-star" />
                    <span className="title">Mới nhất</span>
                  </a>
                </li>
                <li className="nav-item  ">
                  <a title="Đọc truyện online được xem nhiều nhất" href="xem-nhieu/" className="nav-link nav-toggle">
                    <i className="icon-badge" />
                    <span className="title">Xem nhiều</span>
                  </a>
                </li>
                <li className="heading">
                  <h3 className="uppercase">Thể loại</h3>
                </li>
                {this.getMotTheLoai()}
              </ul>
              {/* END SIDEBAR MENU */}
            </div>
            {/* END SIDEBAR */}
          </div>
          
           
        );
    }
}

export default TheLoaiPhai;