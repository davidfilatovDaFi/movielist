export const reducerMovieId = (state,action) => {
  switch (action.type) {
    case 'GET_ID': {
      state = action.payload
      return state
    }
  }
}