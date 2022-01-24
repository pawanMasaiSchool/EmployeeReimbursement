import axios from "axios";
import {
  ADMIN_SUBMIT_FAILURE,
  ADMIN_SUBMIT_REQUEST,
  ADMIN_SUBMIT_SUCCESS,
  UPDATE_SUBMIT_FAILURE,
  UPDATE_SUBMIT_REQUEST,
  UPDATE_SUBMIT_SUCCESS
} from "./actionTypes";

const submitAdminRequest = () => ({
  type: ADMIN_SUBMIT_REQUEST
});

const submitAdminSuccess = (data) => ({
  type: ADMIN_SUBMIT_SUCCESS,
  payload: {
    data
  }
});
const submitAdminFailure = () => ({
  type: ADMIN_SUBMIT_FAILURE
});

const updateStatusRequest = () => ({
  type: UPDATE_SUBMIT_REQUEST
});

const updateStatusSuccess = () => ({
  type: UPDATE_SUBMIT_SUCCESS
});

const updateStatusFailure = () => ({
  type: UPDATE_SUBMIT_FAILURE
});

const sendUpdateToServer = (id, status) => async (dispatch) => {
  try {
    const updateAct = updateStatusRequest();
    dispatch(updateAct);

    let response = await axios.patch(
      `https://claiming-app.herokuapp.com/users/${id}`,
      { status: status }
    );
    if (response.status === 200) {
      const succStatus = updateStatusSuccess();
      dispatch(succStatus);
    }
  } catch {
    const failStatus = updateStatusFailure();
    dispatch(failStatus);
  }
};

const getUsers = () => async (dispatch) => {
  try {
    const getRequest = submitAdminRequest();
    dispatch(getRequest);

    let response = await axios.get(`https://claiming-app.herokuapp.com/users`);
    if (response.status === 200) {
      const succAct = submitAdminSuccess(response.data);
      dispatch(succAct);
    }
  } catch (err) {
    const failAct = submitAdminFailure();
    dispatch(failAct);
  }
};

export {
  getUsers,
  submitAdminRequest,
  submitAdminSuccess,
  submitAdminFailure,
  updateStatusRequest,
  updateStatusSuccess,
  updateStatusFailure,
  sendUpdateToServer
};
