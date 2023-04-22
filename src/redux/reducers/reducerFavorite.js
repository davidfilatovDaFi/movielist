export const reducerFavorite = (state=[],action) => {
  switch (action.type) {
    case 'ADD_MOVIE': return [...state,action.payload]
    default : return state
  }
}