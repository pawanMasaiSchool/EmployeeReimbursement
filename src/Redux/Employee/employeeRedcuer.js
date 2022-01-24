import {
  EMPLOYEE_SUBMIT_FAILURE,
  EMPLOYEE_SUBMIT_REQUEST,
  EMPLOYEE_SUBMIT_SUCCESS
} from "./actionTypes";

const initEstate = {
  EisLoading: false,
  EisError: false
};

export const employeeReducer = (currentState = initEstate, action) => {
  switch (action.type) {
    case EMPLOYEE_SUBMIT_REQUEST: {
      return {
        ...currentState,
        EisLoading: true,
        EisError: false
      };
    }

    case EMPLOYEE_SUBMIT_SUCCESS: {
      return {
        ...currentState,
        EisLoading: false,
        EisError: false
      };
    }

    case EMPLOYEE_SUBMIT_FAILURE: {
      return {
        ...currentState,
        EisLoading: false,
        EisError: true
      };
    }

    default: {
      return currentState;
    }
  }
};
