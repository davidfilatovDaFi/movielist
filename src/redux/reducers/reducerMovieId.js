
export const reducerMovieId = (state=localStorage.getItem('id'),action) => {
  switch (action.type) {
    case 'GET_ID': {
      return action.payload
    }
    default : return state
  }
}