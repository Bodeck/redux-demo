import React from 'react';
import './App.css';
import CommentsListContainer from '../containers/CommentsListContainer';
import CommentForm from '../containers/CommentForm';

const App = () => {
  return (
    <div className='App'>
      <CommentForm />
      <CommentsListContainer />
    </div>
  );
}

export default App;
