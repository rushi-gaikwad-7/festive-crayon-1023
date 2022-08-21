import axios from "axios";
import { getAPI } from "../../utils/fetchData";
import { validRegister } from "../../utils/valid";

export const AUTH = "AUTH";
export const ALERT = "ALERT";

export const login = (userLogin) => async (dispatch) => {
  try {
    dispatch({ type: ALERT, payload: { loading: true } });

    const res = await axios.post("/auth/login", userLogin, {
      withCredentials: true,
    });

    const data = res.data;

    

    localStorage.setItem("logged", "true");

    dispatch({
      type: AUTH,
      payload: {
        token: data.access_token,
        user: data.user,
      },
    });

    dispatch({ type: ALERT, payload: { success: res.data.msg } });
  } catch (error) {
 
    dispatch({
      type: ALERT,
      payload: { error: error.response.data.msg },
    });
  }
};

export const register = (userRegister) => async (dispatch) => {
  const check = validRegister(userRegister);

  if (check.errLength > 0)
    return dispatch({ type: ALERT, payload: { error: check.errMsg } });

  try {
    dispatch({ type: ALERT, payload: { loading: true } });

    const res = await axios.post("/auth/register", userRegister, {
      withCredentials: true,
    });

    let data = res.data;

    localStorage.setItem("logged", "true");

    dispatch({
      type: AUTH,
      payload: {
        token: data.access_token,
        user: data.user,
      },
    });

    dispatch({ type: ALERT, payload: { success: res.data.msg } });
  } catch (error) {
    dispatch({
      type: ALERT,
      payload: { error: error.response.data.msg },
    });
  }
};

export const refreshToken = () => async (dispatch) => {
  const logged = localStorage.getItem("logged");
  if (logged !== "true") return;

  try {
    dispatch({ type: ALERT, payload: { loading: true } });

    const res = await getAPI("refresh_token");
    

    const data = res.data;

    dispatch({ type: AUTH, payload: res.data });

    dispatch({ type: ALERT, payload: {} });
  } catch (error) {
    dispatch({
      type: ALERT,
      payload: { error: error.response.data.msg },
    });
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch({ type: ALERT, payload: { loading: true } });

    const res = await getAPI("logout");
   

    dispatch({ type: AUTH, payload: res.data });

    localStorage.removeItem("logged");

    dispatch({ type: ALERT, payload: { success: res.data.msg } });
  } catch (error) {
    dispatch({
      type: ALERT,
      payload: { error: error.response.data.msg },
    });
  }
};
