import { createReducer, on } from "@ngrx/store"
import {newState} from '../state/new.state'
import * as NewActions from '../action/new.action'

const initialState: newState = {
  news: [],
  loading: false,
  isSuccess: true,
  error: '',
}

export const newsReducer = createReducer(
  initialState,
  on(NewActions.GetPaginate, (state) => {
    return {...state}
  }),
  on(NewActions.getNewsSuccess, (state, action) => {
    return {...state, news: action.news, loading: false, isSuccess: true, error: ''}
  }),
  on(NewActions.getNewsFailure, (state, action) => {
    return {...state, error: action.error, loading: false, isSuccess: false}
  }),
)
