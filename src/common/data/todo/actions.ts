import { action } from 'typesafe-actions';
import { TodoActionTypes, Todo } from './types';
import { generateUUID } from 'common/utils/uuid';

export const fetchRequest = (id: string) => action(TodoActionTypes.FETCH_REQUEST, id);
export const fetchSuccess = (data: Todo) => action(TodoActionTypes.FETCH_SUCCESS, data);
export const fetchError = (message: string) => action(TodoActionTypes.FETCH_ERROR, message);

export const fetchAllRequest = () => action(TodoActionTypes.FETCH_ALL_REQUEST);
export const fetchAllSuccess = () => action(TodoActionTypes.FETCH_ALL_SUCCESS);
export const fetchAllError = (message: string) => action(TodoActionTypes.FETCH_ALL_ERROR, message);
export const addTodo = (data: Todo) => action(TodoActionTypes.ADD_TODO,data);

export const createRequest = (detail: string) => action(TodoActionTypes.CREATE_REQUEST, {
  id: generateUUID(),
  createdAt: Date.now(),
  updatedAt: Date.now(),
  detail: detail,
  complete: false
});
export const createSuccess = (data: Todo) => action(TodoActionTypes.CREATE_SUCCESS, data);
export const createError = (message: string) => action(TodoActionTypes.CREATE_ERROR, message);

export const deleteRequest = (id: string) => action(TodoActionTypes.DELETE_REQUEST, id);
export const deleteSuccess = (id: string) => action(TodoActionTypes.DELETE_SUCCESS, id);
export const deleteErrror = (message: string) => action(TodoActionTypes.DELETE_ERROR, message);

export const deleteAllRequest = () => action(TodoActionTypes.DELETE_ALL_REQUEST);
export const deleteAllSuccess = () => action(TodoActionTypes.DELETE_ALL_SUCCESS);

export const updateRequest = (payload: Todo) => action(TodoActionTypes.UPDATE_REQUEST, {
  id: payload.id,
  createdAt: payload.createdAt,
  updatedAt: Date.now(),
  detail: payload.detail,
  complete: !payload.complete
});
export const updateSuccess = (data: Todo) => action(TodoActionTypes.UPDATE_SUCCESS, data);
export const updateError = (message: string) => action(TodoActionTypes.UPDATE_ERROR, message);
