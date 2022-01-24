import axios from "axios";
import {
  EMPLOYEE_SUBMIT_FAILURE,
  EMPLOYEE_SUBMIT_REQUEST,
  EMPLOYEE_SUBMIT_SUCCESS
} from "./actionTypes";

const submitRequest = () => ({
  type: EMPLOYEE_SUBMIT_REQUEST
});

const submitSuccess = () => ({
  type: EMPLOYEE_SUBMIT_SUCCESS
});
const submitFailure = () => ({
  type: EMPLOYEE_SUBMIT_FAILURE
});

const postingFormDetails = (details) => async (dispatch) => {
  try {
    const submittAction = submitRequest();
    dispatch(submittAction);
    let response = await axios.post(
      `https://claiming-app.herokuapp.com/users`,
      details
    );
    if (response.status === "201") {
      const successAction = submitSuccess();
      dispatch(successAction);
    } else {
      const failedAction = submitFailure();
      dispatch(failedAction);
    }
  } catch (err) {
    const failedAction = submitFailure();
    dispatch(failedAction);
  }
};

export { submitRequest, submitSuccess, submitFailure, postingFormDetails };
