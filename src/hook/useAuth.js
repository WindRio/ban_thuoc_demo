import { useDispatch, useSelector } from "react-redux";
import { authAction } from "../actions";

export const useAuth = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  const handleLogin = (element) => {
    dispatch(authAction.loginSuccess(element));
  };
  const handleLogOut = () => {
    dispatch(authAction.logoutSuccess());
  };
  return {
    token,
    handleLogin,
    handleLogOut,
  };
};