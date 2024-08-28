import CircularProgress from "@mui/material/CircularProgress";
import { toast } from "react-toastify";
import axios from "axios";

export const errorHelper = (formik, values) => ({
  error: formik.errors[values] && formik.touched[values] ? true : false,
  helperText:
    formik.errors[values] && formik.touched[values]
      ? formik.errors[values]
      : null,
});

export const Loader = () => (
  <div className="root_loader">
    <CircularProgress />
  </div>
);

export const showToast = (type, msg) => {
  switch (type) {
    case "SUCCESS":
      toast.success(msg, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      break;
    case "ERROR":
      toast.error(msg, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      break;
    default:
      return false;
  }
};

export const getToken = () => {
  // Recupera el token del almacenamiento local
  const token = localStorage.getItem("token");

  // Configura axios para que incluya el token en la cabecera Authorization
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  return token;
};

export const removeToken = () => {
  // Remueve el token del almacenamiento local
  localStorage.removeItem("token");

  // Elimina el token de la cabecera Authorization de axios
  delete axios.defaults.headers.common["Authorization"];
};

export const AdminTitle = ({title}) => {
  return (
    <div className='d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom'>
      <h1 className='h2'>
          { title }
      </h1>
    </div>
  );
}
