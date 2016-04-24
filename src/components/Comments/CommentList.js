import React, { PropTypes } from 'react'

const CommentList = props => (
  <ul className="list-group">
    {props.comments.map((x) =>(
      <li className="list-group-item" key={x.id}>
        <span className="pull-xs-right"> - {x.author}</span>
        <ul className="list-group">
          <li className="list-group-item">
            <button
              className="btn btn-secondary"
              onClick={() => props.handleDelete(x.id)}>
              X
            </button>
            <span className="pull-xs-right c-text">{x.comment}</span>
          </li>
        </ul>
      </li>
    ))}
  </ul>
);

export default CommentList
