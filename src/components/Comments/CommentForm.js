import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
import { addComment } from '../../actions/index'


class CommentForm extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    addComment: PropTypes.func.isRequired
  };
  render(){
    const { fields: {author, comment}, handleSubmit } = this.props;
    return(
      <form onSubmit={handleSubmit(this.props.addComment)}>
        <h3>Add New Comment</h3>

        <div className="form-group">
          <label>Title</label>
          <input 
            type="text" 
            className="form-control" 
            {...author}
            value={author.value || ''}
          />
          <span className="text-help">
            {author.touched ? author.error : ''}
          </span>
        </div>

        <div className="form-group">
          <label>Categories</label>
          <input 
            type="text" 
            className="form-control" 
            {...comment}
            value={comment.value || ''}
          />
          <span className="text-help">
            {comment.touched ? comment.error : ''}
          </span>
        </div>
        
        <button
          type="submit"
          className="btn btn-primary" >
          Submit
        </button>
      </form>
    )
  }
}

function validate(values){
  const errors = {};
  if(!values.author){
    errors.author = 'Please Enter Your name';
  }
  if(!values.comment){
    errors.comment = 'You must say something';
  }
  return errors;
}

export default reduxForm({
  form: 'CommentForm',
  fields: [
    'author', 'comment'
  ],
  validate
}, null, {addComment})(CommentForm)