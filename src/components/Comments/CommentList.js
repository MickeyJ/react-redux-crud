import React from 'react'
import dateFormat from 'dateformat'

const CommentList = props => (
  <ul className="list-group">
    {props.comments.map((x) =>(
      <li className="list-group-item" key={x.id}>
        <span className="pull-xs-right">
          {x.author}
        </span>
        <span className="pull-xs-right c-date"> 
          - {dateFormat(x.date, "h:MM tt")}
        </span>
        <ul className="list-group">
          <li className="list-group-item">
            <button
              className="btn btn-secondary"
              onClick={() => props.handleDelete(x.id)}>
              X
            </button>
            <span className="pull-xs-right c-text">
              {x.comment}
            </span>
          </li>
        </ul>
      </li>
    ))}
  </ul>
);
export default CommentList
