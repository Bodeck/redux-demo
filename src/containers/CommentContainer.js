import { connect } from 'react-redux';
import Comment from '../components/Comment';
import { thumbUp, thumbDown, removeComment } from '../actions';

const mapDispatchToProps = dispatch => ({
  actions: {
    thumbUp: (id) => dispatch(thumbUp(id)),
    thumbDown: (id) => dispatch(thumbDown(id)),
    removeComment: (id) => dispatch(removeComment(id))
  }
});

export default connect(null, mapDispatchToProps)(Comment);