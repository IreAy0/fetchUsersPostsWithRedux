export default (state = [], action) => {
  // if (action.type === 'FETCHE_POST') {
  //   return action.payload;
  // }
  // return state;
  switch (action.type) {
    case 'FETCH_POSTS':
      return action.payload;
    default:
      return state;
  }
};
