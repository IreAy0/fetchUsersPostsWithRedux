/* eslint-disable import/prefer-default-export */
import PlaceHolder from '../apis/jsonPlaceholder';

export const fetchPosts = () => async (dispatch) => {
  const response = await PlaceHolder.get('/posts');
  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await PlaceHolder.get(`/users/${id}`);
  dispatch({ type: 'FETCH_USER', payload: response.data });
};
