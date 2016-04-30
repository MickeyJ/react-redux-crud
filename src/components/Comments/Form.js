import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
import { addComment } from '../../actions/index'

class CommentForm extends Component {
  render(){
    const {
      fields: {author, comment},
      handleSubmit,
      resetForm
    } = this.props;
    return(
      <form onSubmit={handleSubmit(this.props.addComment)}>
        <h3>Add New Comment</h3>

        <div className="form-group">
          <label>Name</label>
          <input 
            type="text" 
            className="form-control"
            placeholder="Your Name"
            {...author}
          />
          <span className="text-help">
            {author.touched ? author.error : ''}
          </span>
        </div>

        <div className="form-group">
          <label>Comment</label>
          <input
            type="text"
            className="form-control"
            placeholder="Your Comment"
            {...comment}
          />
          <span className="text-help">
            {comment.touched ? comment.error : ''}
          </span>
        </div>
        
        <div className="btn-group">
          <button
            type="submit"
            className="btn btn-success" >
            Submit
          </button>

          <button
            className="btn btn-info"
            onClick={resetForm}>
            Clear
          </button>
        </div>
      </form>
    )
  }
}

CommentForm.propTypes = {
  fields: PropTypes.object.isRequired,
  addComment: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired
};

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
  fields: [ 'author', 'comment' ],
  validate
}, null, {addComment})(CommentForm)