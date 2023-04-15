import { createStore } from "redux"
import { reducerMovieId } from "./reducers/reducerMovieId"

export const store = createStore(reducerMovieId)