import React, { Component } from 'react';
import axios from 'axios';
import InfoTruyen from './InfoTruyen';
import InfoTruyenPhai from './InfoTruyenPhai';
import DanhSachChuong from './DanhSachChuong';
import './Css/profile-2.min.css';

class TrangTruyen extends Component {
    constructor(props) {
        super(props);
        
    }
    
    state = {
        infoTruyen: [],
        id: this.props.match.params.id
      }
    
      componentDidMount() {
        axios.get(`https://m-api.iread.vn/api/group/book?bookId=`+this.props.match.params.id+`&sections=bookcase,rate,donate,likecard,vipcard&extraLikeCard=0&extraVipCard=0&extraDonate=0`)
          .then(res => {
            const infoTruyen = res.data.book.book;
            const author = res.data.book.book.author.name;
            var status = res.data.book.book.full;
            if(status !==1){
                status = "Đang Cập Nhật"
            } else {
                status = "Hoàn Thành"
            }
            const genre = res.data.book.book.catsLv1[0].catName;
            const idtacgia = res.data.book.book.author.authorId;
            this.setState({ infoTruyen,author,status,genre,idtacgia });
          })
      }
      
      getInfoTruyen = () => {
        return <InfoTruyen name={this.state.infoTruyen.title} slug={'/theloai/'+this.state.infoTruyen.slug} img={this.state.infoTruyen.avatar} author={this.state.author} status={this.state.status} genres={this.state.genre}></InfoTruyen>
        
   }
   getInfoTruyenPhai = () => {
       return <InfoTruyenPhai name={this.state.infoTruyen.title} gioithieu={this.state.infoTruyen.content}></InfoTruyenPhai>
   }
  
    render() {
        return (
            <div className="page-content-wrapper">
            {/* BEGIN CONTENT BODY */}
            <div className="page-content">
            <div className="profile">
            <div className="tabbable-line tabbable-full-width">
            <div>
             <div className="tab-pane active" id="tab_1_1">
              <div className="row">
            {this.getInfoTruyen()}
            <div className="col-md-9">
            <div className="row">
            {this.getInfoTruyenPhai()}
            <div className="tabbable-custom nav-justified">
            <ul className="nav nav-tabs nav-justified">
                <li className="active">
                <a aria-expanded="true" href="#tab_1_1_1" data-toggle="tab"> Danh sách chương </a>
                </li>  
            </ul>
            <div className="tab-content">
            <DanhSachChuong idchuong = {this.state.id}></DanhSachChuong>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
        );
    }
}

export default TrangTruyen;