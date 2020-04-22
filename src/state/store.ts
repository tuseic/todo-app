import { createStore, combineReducers } from 'redux'
import { State, reducers } from 'state'

export const store = createStore(
  combineReducers<State>(reducers)
)
