import React, { PropTypes } from 'react'

const CommentList = props => (
  <ul className="list-group">
    {props.comments.map((x) =>(
      <li className="list-group-item" key={x.id}>
        <button
          className="btn btn-info"
          onClick={() => props.handleDelete(x.id)}>
          X
        </button>
        <span className="pull-xs-right">{x.author}</span>
        <ul className="list-group">
          <li className="list-group-item">
            <span className="pull-xs-right">{x.comment}</span>
          </li>
        </ul>
      </li>
    ))}
  </ul>
);

export default CommentList
