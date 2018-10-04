import React, { Component } from 'react';
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';

class TopContentChuong extends Component {
    state = {
        contentchap: []
      }
    
      componentDidMount() {
        axios.get(`https://m-api.iread.vn/api/chapter/content?chapterId=`+this.props.idchap)
          .then(res => {
            const contentchap = res.data.data;
            this.setState({ contentchap });
          })
      }
      layidchuong = (value) =>{
        return this.props.idchap;
      }
    render() {
      console.log(this.props.idchap)
        const html = this.state.contentchap.content;
        return (
            <div id="bodynoidung" className="portlet-body">
            <div className="control toolboxkhung">
              <div className="btn-group btn-group btn-group-justified toolbox">
                <a href="#" className="btn  blue <?php echo $distruoc;?>"><span className="glyphicon glyphicon-chevron-left" /> Trước </a>
                <a data-toggle="modal" href="#showlistchuong" className="btn red"> List chương </a>
                <a href="#" className="btn green <?php echo $dissau;?>"> Sau <span className="glyphicon glyphicon-chevron-right" /></a>
              </div>
            </div>
            <div className="control toolboxkhung">
            <div className="btn-group btn-group btn-group-justified toolbox">
                <a href="#" className="btn green fullscreen"> Toàn màn hình </a>
                <a className="btn dark nenden btn-nenden"> Nền đen </a>
                <a className="btn btn-default nentrang btn-nentrang"> Nền trắng </a>
            </div>
            </div>
            <div id="kichthuoc" className="noUi-success" />
            <div id="noidungchap">
            { ReactHtmlParser(html) }
            </div>
            <div className="control toolboxkhung">
              <div className="btn-group btn-group btn-group-justified toolbox">
                <a href="#" className="btn  blue <?php echo $distruoc;?>"><span className="glyphicon glyphicon-chevron-left" /> Trước </a>
                <a data-toggle="modal" href="#showlistchuong" className="btn red"> List chương </a>
                <a href="#" className="btn green <?php echo $dissau;?>"> Sau <span className="glyphicon glyphicon-chevron-right" /></a>
              </div>
            </div>
            <div className="control toolboxkhung">
            <div className="btn-group btn-group btn-group-justified toolbox">
                <a href="#" className="btn green fullscreen"> Toàn màn hình </a>
                <a className="btn dark nenden btn-nenden"> Nền đen </a>
                <a className="btn btn-default nentrang btn-nentrang"> Nền trắng </a>
            </div>
            </div>
          </div>
        );
    }
}

export default TopContentChuong;