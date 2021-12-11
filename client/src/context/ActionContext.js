export const LoginRequest = (userInfo) => ({
  type: 'LOGIN_REQUEST',
});

export const LoginSuccess = (user) => ({
  type: 'LOGIN_SUCCESS',
  payload: user,
});

export const LoginFailure = () => ({
  type: 'LOGIN_FAILURE',
});

export const LogOut = () => ({
  type: 'LOG_OUT',
});

export const UserUpdateRequest = (userInfo) => ({
  type: 'USER_REQUEST',
});

export const UserUpdateSuccess = (user) => ({
  type: 'USER_SUCCESS',
  payload: user,
});

export const UserUpdateFailure = () => ({
  type: 'USER_FAILURE',
});

export const PostCreateRequest = () => ({
  type: 'POST_CREATE_REQUEST'
});

export const PostCreateSuccess = () => ({
  type: 'POST_CREATE_SUCCESS'
});

export const PostCreateFailure = () => ({
  type: 'POST_CREATE_FAILURE'
});



