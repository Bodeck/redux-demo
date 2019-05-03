import uuid from 'uuid';

export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN';

export const addComment = (text) => {
  return {
    type: ADD_COMMENT,
    commentId: uuid.v4(),
    text: text,
    votes: 0
  }
};

export const editComment = (commentId, editedText) => {
  return {
    type: EDIT_COMMENT,
    commentId,
    text: editedText
  }
};

export const removeComment = (commentId) => {
  return {
    type: REMOVE_COMMENT,
    commentId
  }
};

export const thumbUp = (commentId) => {
  return {
    type: THUMB_UP_COMMENT,
    commentId
  }
};

export const thumbDown = (commentId) => {
  return {
    type: THUMB_DOWN_COMMENT,
    commentId
  }
};
