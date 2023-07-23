import React, { Component, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const MainPage = lazy(() => import("../shared/components/Mainpage"));
const Carousel = lazy(() => import("../shared/components/Carousel"));
const Register = lazy(() => import("../shared/components/Register"));
const Login = lazy(() => import("../shared/components/Login"));
const Registration = lazy(() => import("../shared/components/Registration"));
const Layout = lazy(() => import("../shared/components/layout/index"));

class RootPage extends Component {
  render() {
    return (
      <Layout>
        <Routes>
          <Route path="/home" element={<MainPage />} />
          <Route path="/" element={<Navigate to="/home" replace />} />

          {/* <Route path="/movie/slug=:movie_slag" element={<Detailed />} /> */}
          {/* <Route path="/movie" element={<Navigate to="/home" replace />} /> */}

          <Route path="/steps" element={<Carousel />} />
          <Route path="/giris" element={<Register />} />
          <Route path="/daxil-olmaq" element={<Login />} />
          <Route path="/qeydiyyat" element={<Registration />} />
        </Routes>
      </Layout>
    );
  }
}

export default RootPage;
