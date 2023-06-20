import * as api from "../api";
import { setCurrentUser } from "./currentUser";
import { fetchAllUsers } from "./users";

export const signup = (authData, navigate) => async dispatch => {
  try {
    const { data } = await api.signUp(authData);
    //console.log(data);
    dispatch({ type: "AUTH", data });
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));

    dispatch(fetchAllUsers());
    //console.log(localStorage.getItem("Profile"));
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const login = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.logIn(authData);
    //console.log('1');console.log(data);
    dispatch({ type: "AUTH", data });
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
    //console.log('2');console.log(JSON.parse(localStorage.getItem("Profile")))
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};
