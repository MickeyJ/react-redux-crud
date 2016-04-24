import React, { Component } from 'react'
import { connect } from 'react-redux'
import { 
  getComments,
  deleteComment
} from '../../actions/'

import CommentForm from './CommentForm'

class CommentIndex extends Component{
  componentWillMount(){
    this.props.getComments();
  }
  handleDelete(id){
    this.props.deleteComment(id);
  }
  renderComments(){
    return (
      this.props.comments.map((x) =>(
        <li className="list-group-item" key={x.id}>
          <button
            className="btn btn-info"
            onClick={() => this.handleDelete(x.id)}>
            X
          </button>
          <span className="pull-xs-right">{x.author}</span>
          <ul className="list-group">
            <li className="list-group-item">
              <span className="pull-xs-right">{x.comment}</span>
            </li>
          </ul>
        </li>
      ))
    )
  }
  render(){
    require('./comments.scss');
    return(
      <main id="comment-box">
        <CommentForm />
        <ul className="list-group">
          {this.renderComments()}
        </ul>
      </main>
    )
  }
}

function mapStateToProps(state){
  return { comments: state.comments.all}
}

export default connect(mapStateToProps, {
  getComments,
  deleteComment
})(CommentIndex);
