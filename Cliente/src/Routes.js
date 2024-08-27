import React, { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/navigation/header";
import MainLayout from "./hoc/mainLayout";
import Auth from "./components/auth";
import Home from "../src/components/home";
import Dashboard from "../src/components/dashboard";
import { Loader } from "../src/utils/tools";
import AuthGuard from "./hoc/authGuard";
import RegistroDetalle from "./components/registroDetalle";

const Router = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <BrowserRouter>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <MainLayout>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/dashboard" element={<AuthGuard><Dashboard /></AuthGuard>} />
              <Route path="/registro" element={<RegistroDetalle />} />
              <Route path="/auth" element={<Auth />} />
            </Routes>
          </MainLayout>
        </>
      )}
    </BrowserRouter>
  );
};

export default Router;
