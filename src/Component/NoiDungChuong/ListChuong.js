import React, { Component } from 'react';
import axios from 'axios';


class ListChuong extends Component {
    state = {
        danhsachchap: []
      }
    
      componentDidMount() {
        axios.get(`https://m-api.iread.vn/api/chapter/getChapters?bookId=`+this.props.idtruyen)
          .then(res => {
            const danhsachchap = res.data.chapters;
            this.setState({ danhsachchap });
          })
      }
    render() {
      console.log(this.props.idtruyen);
      
        return (
            <div id="showlistchuong" className="modal fade modal-scroll" tabIndex={-1} data-replace="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal" aria-hidden="true" />
        <h4 className="modal-title">Danh sách chương</h4>
      </div>
      <div className="modal-body">
        <div className="phantrang">     
          <ul className="pagination-view pagination-sm" />        
        </div>
        <div id="listchuong">
          <ul className="list-unstyled">
          { this.state.danhsachchap.map((chapter,key) => 
            <li key={key}><span className="fa fa-book" /> <a title={chapter.title} href={'/'+chapter.bookId+'/'+chapter.chapterId}>{chapter.title}</a> </li>)}
          </ul>
        </div>
      </div>
      <div className="phantrang">     
        <ul className="pagination-view pagination-sm" />        
      </div>
      <div className="modal-footer">
        <button type="button" data-dismiss="modal" className="btn dark btn-outline">Close</button>
      </div>
    </div>
  </div>
</div>

        );
    }
}

export default ListChuong;