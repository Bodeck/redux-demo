import React from 'react';

const Comment = ({ text, votes, id, actions }) => {
  return (
    <li className='Comment-item'>
      <div className='Comment-box'>
        <div className='Comment-text'>
          {text}
        </div>
        <div className='Comment-votes'>
          <i className="fas fa-heart"></i>
          <span> {votes}</span>
        </div>
        <button onClick={() => actions.thumbUp(id)}><i className="fas fa-thumbs-up"></i></button>
        <button onClick={() => actions.thumbDown(id)}><i className="fas fa-thumbs-down"></i></button>
        <button onClick={() => actions.removeComment(id)}><i className="fas fa-trash-alt"></i></button>
      </div>
    </li>
  )
}

export default Comment;