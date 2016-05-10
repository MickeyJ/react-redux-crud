import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {getComments, deleteComment} from '../../actions/'

import CommentForm from './CommentForm'
import CommentList from './CommentList'

class CommentIndex extends Component{
  componentWillMount(){
    this.props.getComments();
  }
  handleDelete(id){
    this.props.deleteComment(id);
  }
  render(){
    return(
      <main id="comment-box">
        <CommentForm />
        <CommentList
          comments={this.props.comments}
          handleDelete={this.handleDelete.bind(this)} 
        />
      </main>
    )
  }
}

CommentIndex.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
  getComments: PropTypes.func.isRequired,
  deleteComment: PropTypes.func.isRequired
};

function mapStateToProps(state){
  return { comments: state.comments.all}
}

export default connect(mapStateToProps, {
  getComments,
  deleteComment
})(CommentIndex);
