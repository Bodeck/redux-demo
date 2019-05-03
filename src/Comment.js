import React from 'react';

const Comment = ({text, votes}) => {
  return (
    <li>{text} <span>votes: {votes}</span></li>
  )
}

export default Comment;