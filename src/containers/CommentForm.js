import React from 'react';
import { connect } from 'react-redux';
import { addComment } from '../actions';

const CommentForm = ({dispatch}) => {
  let input;
  return (
    <form onSubmit={ event => {
      event.preventDefault();
      if (!input.value.trim()) {
        return
      };
      dispatch(addComment(input.value));
      input.value = '';
    }}>
      <textarea ref={node => input = node}/>
      <button type='submit'>Add Comment</button>
    </form>
  );
}

export default connect()(CommentForm);