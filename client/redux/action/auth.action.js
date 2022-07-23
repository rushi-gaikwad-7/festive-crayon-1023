import axios from "axios";
import { getAPI } from "../../utils/FetchData";
import { validRegister } from "../../utils/Valid";

export const AUTH = "AUTH";
export const ALERT = "ALERT";

export const login = (userLogin) => async (dispatch) => {
  try {
    dispatch({ type: ALERT, payload: { loading: true } });

    const res = await axios.post("/auth/login", userLogin, {
      withCredentials: true,
    });

    const data = res.data;

    // console.log("res: ", res);

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
    console.log("error: ", error);
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
    // console.log("res: ", res);

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
    console.log("res: ", res);

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
