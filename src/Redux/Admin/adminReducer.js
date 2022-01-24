import {
  ADMIN_SUBMIT_FAILURE,
  ADMIN_SUBMIT_REQUEST,
  ADMIN_SUBMIT_SUCCESS,
  UPDATE_SUBMIT_FAILURE,
  UPDATE_SUBMIT_REQUEST,
  UPDATE_SUBMIT_SUCCESS
} from "./actionTypes";

const initAstate = {
  users: [],
  AisLoading: false,
  AisError: false
};

export const adminReducer = (currentState = initAstate, action) => {
  switch (action.type) {
    case ADMIN_SUBMIT_REQUEST: {
      return {
        ...currentState,
        AisLoading: true,
        AisError: false
      };
    }
    case ADMIN_SUBMIT_SUCCESS: {
      return {
        ...currentState,
        users: [...action.payload.data],
        AisLoading: false,
        AisError: false
      };
    }
    case ADMIN_SUBMIT_FAILURE: {
      return {
        ...currentState,
        AisLoading: false,
        AisError: true
      };
    }

    case UPDATE_SUBMIT_REQUEST: {
      return {
        ...currentState,
        AisLoading: true,
        AisError: false
      };
    }

    case UPDATE_SUBMIT_SUCCESS: {
      return {
        ...currentState,
        AisLoading: false,
        AisError: false
      };
    }

    case UPDATE_SUBMIT_FAILURE: {
      return {
        ...currentState,
        AisLoading: false,
        AisError: true
      };
    }

    default: {
      return currentState;
    }
  }
};
