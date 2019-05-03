import React from 'react';

const Comment = ({ text, votes, id, actions }) => {
  return (
    <li>
      {text} <span>votes: {votes}</span>
      <button onClick={() => actions.thumbUp(id)}>Thumb Up</button>
      <button onClick={() => actions.thumbDown(id)}>Thumb Down</button>
      <button onClick={() => actions.removeComment(id)}>Delete</button>
    </li>
  )
}

export default Comment;