import React from 'react';
import Comment from '../containers/CommentContainer';

const CommentsList = ({comments}) => {
  return (
    <ul className='Comments-list'>{comments.map((comment) => <Comment key={comment.id} {...comment} />) }</ul>
  )
}

export default CommentsList;