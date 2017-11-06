import { RECEIVE_ALBUM_DETAIL } from '../actions/album_actions';

const AlbumReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALBUM_DETAIL:
      return action.album;
    default:
      return state;
  }
};

export default AlbumReducer;
