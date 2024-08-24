import { createAsyncThunk } from "@reduxjs/toolkit";
import { errorGlobal, successGlobal } from "../reducers/notifications";
import axios from "axios";
import { getToken, removeToken } from "../../utils/tools";

export const registerUser = createAsyncThunk(
  "users/registerUser",
  async ({ email, password }, { dispatch }) => {
    try {
      const request = await axios.post(`http://localhost:3000/api/v1/users`, {
        email: email,
        password: password,
      });

      dispatch(successGlobal("Registration successful. Please log in."));
      return { data: null, auth: false };
    } catch (error) {
      dispatch(errorGlobal(error.response.data.message));
      throw error;
    }
  }
);

export const signInUser = createAsyncThunk(
  "users/signInUser",
  async ({ email, password }, { dispatch }) => {
    try {
      const response = await axios.post(
        `http://localhost:3000/api/v1/auth/login`,
        {
          email: email,
          password: password,
        }
      );

      // Obtiene el token de la respuesta del servidor
      const token = response.data.token;

      // Guarda el token en el almacenamiento local
      localStorage.setItem("token", token);

      // Configura el token en los headers de autorización de axios
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      
      dispatch(successGlobal("Welcome back !!!"));
      return { data: response.data.user, auth: true };
    } catch (error) {
      dispatch(errorGlobal(error.response.data.message));
      throw error;
    }
  }
);
export const signOut = createAsyncThunk("users/signOut", async () => {
  removeToken();
  // Elimina el estado de autenticación del almacenamiento local
  localStorage.removeItem("auth");
});
