import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

import { useDispatch, useSelector } from "react-redux";
import { errorHelper, Loader } from "../../utils/tools";
import SecondaryLogo from "../../assets/images/ColombinaLogo2.svg"
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { registerUser, signInUser } from "../../store/actions/users";

const Auth = () => {
  // comp
  const [register, setRegister] = useState(false);
  let navigate = useNavigate();
  // redux
  const users = useSelector((state) => state.users);
  const notifications = useSelector((state) => state.notifications);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: { email: "Carlos@gmail.com", password: "testing123" },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Sorry the email is required")
        .email("This is not a valid email"),
      password: Yup.string().required("Sorry the password is required"),
    }),
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const handleSubmit = (values) => {
    if (register) {
      dispatch(registerUser(values));
    } else {
      dispatch(signInUser(values));
    }
  };

  useEffect(() => {
    // Donde manejas la notificación de éxito
if (notifications.global.success) {
  if (notifications.global.msg === 'Registration successful. Please log in.') {
    navigate('/auth')
  } else {
    // Redirigir al dashboard
    navigate('/dashboard');
  }
}
  });

  return (
    <div className="auth_container">
      <img alt="Secondary-logo" className="logo-img" src={SecondaryLogo}/>
      {users.loading ? (
        <Loader />
      ) : (
        <Box
          sx={{
            "& .MuiTextField-root": { width: "100%", marginTop: "20px" },
          }}
          component="form"
          onSubmit={formik.handleSubmit}
        >
          <TextField
            name="email"
            label="Ingresa tu correo"
            variant="outlined"
            {...formik.getFieldProps("email")}
            {...errorHelper(formik, "email")}
          />

          <TextField
            name="password"
            label="Ingresa tu contraseña"
            type="password"
            variant="outlined"
            {...formik.getFieldProps("password")}
            {...errorHelper(formik, "password")}
          />

          <div className="mt-2">
            <Button
              variant="contained"
              color="primary"
              type="submit"
              size="large"
            >
              {register ? "Registrarse" : "Iniciar Sesion"}
            </Button>
            <Button
              className="mt-3"
              variant="outlined"
              color="secondary"
              size="small"
              onClick={() => setRegister(!register)}
            >
               {!register ? "Registrarse" : "Iniciar Sesion"}
            </Button>
          </div>
        </Box>
      )}
    </div>
  );
};

export default Auth;
