import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { 
  getComments,
  deleteComment
} from '../../actions/'

import CommentForm from './CommentForm'
import CommentList from './CommentList'

class CommentIndex extends Component{
  static propTypes ={
    comments: PropTypes.array.isRequired,
    getComments: PropTypes.func.isRequired,
    deleteComment: PropTypes.func.isRequired
  };
  componentWillMount(){
    this.props.getComments();
  }
  handleDelete(id){
    this.props.deleteComment(id);
  }
  render(){
    require('./comments.scss');
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

function mapStateToProps(state){
  return { comments: state.comments.all}
}

export default connect(mapStateToProps, {
  getComments,
  deleteComment
})(CommentIndex);
