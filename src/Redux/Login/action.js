import {
  LOGIN_REQUEST,
  LOGIN_REQUEST_FAILURE,
  LOGIN_REQUEST_SUCCESS
} from "./actionTypes";

export const loginRequest = () => ({
  type: LOGIN_REQUEST
});

export const loginRequestSuccess = (typeOfUser) => ({
  type: LOGIN_REQUEST_SUCCESS,
  payload: {
    user: typeOfUser
  }
});

export const loginRequestFailure = () => ({
  type: LOGIN_REQUEST_FAILURE
});
