import { combineReducers, createStore } from "redux"
import { reducerMovieId } from "./reducers/reducerMovieId"
import { reducerFavorite } from "./reducers/reducerFavorite"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { reducerSearch } from "./reducers/reducerSearch"

const rootReducer = combineReducers({
  id: reducerMovieId,
  favorite: reducerFavorite,
  search: reducerSearch
})

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer)
export const persistor = persistStore(store)