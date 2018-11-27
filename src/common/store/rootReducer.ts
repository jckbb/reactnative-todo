import { combineReducers } from 'redux';
import { todoReducer } from '../data/todo/reducer';
import { createReducer } from '../../screens/Main/CreateForm/data/reducer';
import { ApplicationState } from '.';

export default combineReducers<ApplicationState>({
  todo: todoReducer,
  create: createReducer
});