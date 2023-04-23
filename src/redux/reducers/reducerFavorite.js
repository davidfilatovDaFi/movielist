export const reducerFavorite = (state=[],action) => {
  switch (action.type) {
    case 'ADD_MOVIE': {
      return state.map(m => m.id).includes(action.payload.id)
        ? state
        : [...state,action.payload]
    }
    case 'REMOVE_MOVIE' : return state.filter(m => m.id !== action.payload)
    default : return state
  }
}