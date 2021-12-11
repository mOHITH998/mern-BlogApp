export const ReducerContext = (state, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return {
        user: null,
        isFetching: true,
        error: false,
      };
    case 'LOGIN_SUCCESS':
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };
    case 'LOGIN_FAILURE':
      return {
        user: null,
        isFetching: false,
        error: true,
      };
    case 'USER_REQUEST':
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case 'USER_SUCCESS':
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };
    case 'USER_FAILURE':
      return {
        user: state.user,
        isFetching: false,

        error: true,
      };
    case 'LOG_OUT':
      return {
        user: null,
        isFetching: false,
        error: false,
      };

    default:
      return state;
  }
};
