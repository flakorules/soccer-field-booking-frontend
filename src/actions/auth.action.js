import Swal from "sweetalert2";
import { fetchNoToken } from "../helpers/fetchHelper";
import { types } from "../types/types";
import { setShowLoading } from "./ui.action";
//import { setFlagShowLoading } from "./ui.action";

export const startLogin = (formData) => {
  return async (dispatch) => {
    try {
      dispatch(setShowLoading(true));
      const { errorCode, message, data }  = await fetchNoToken(
        "User/authenticate",
        formData,
        "POST"
      );

      if (errorCode === "000") {
        localStorage.setItem("userId", data.userId);
        localStorage.setItem("userName", data.userName);
        localStorage.setItem("token", data.token);

        dispatch(
          login({
            userId: data.userId,
            userName: data.userName,
          })
        );
      } else {
        Swal.fire({
          icon: "error",
          title: "Error al autenticar:",
          html: '',
          confirmButtonText: "Aceptar",
        });
      }
      dispatch(setShowLoading(false));
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error al autenticar:",
        text: error,
        confirmButtonText: "Aceptar",
      });
    }
  };
};

const login = (data) => ({
  type: types.authLogin,
  payload: data,
});

export const logout = () => ({
  type: types.authLogout,
});