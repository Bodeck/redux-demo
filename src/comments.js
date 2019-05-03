import { ADD_COMMENT, REMOVE_COMMENT, THUMB_DOWN_COMMENT, THUMB_UP_COMMENT, EDIT_COMMENT } from './actions';

export default function comments(state = [], action) {
  switch (action.type) {
    case ADD_COMMENT:
      return [{
        id: action.commentId,
        text: action.text,
        votes: 0
      }, ...state];
    case REMOVE_COMMENT:
      return state.filter((comment) => comment.id !== action.commentId);
    case EDIT_COMMENT:
      return state.map((comment) => {
        if (comment.id === action.commentId) {
          return Object.assign({}, comment, { text: action.text });
        } else {
          return comment;
        }
      });
    case THUMB_UP_COMMENT:
      return state.map((comment) => {
        if (comment.id === action.commentId) {
          return Object.assign({}, comment, { votes: comment.votes + 1});
        } else {
          return comment;
        }
      });
    case THUMB_DOWN_COMMENT:
      return state.map((comment) => {
        if (comment.id === action.commentId) {
          return Object.assign({}, comment, { votes: comment.votes - 1 });
        } else {
          return comment;
        }
      });
    default:
      return state;
  }
};
