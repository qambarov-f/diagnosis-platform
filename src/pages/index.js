import React, { Component, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const MainPage = lazy(() => import("../shared/components/Mainpage/index"));
const Carousel = lazy(() => import("../shared/components/Carousel/index"));
// const Page404 = lazy(() => import("./404"));
// const Contact = lazy(() => import("./contact"));
// const Detailed = lazy(() => import("./detailed"));
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
          {/* <Route path="/contact" element={<Contact />} /> */}
          {/* <Route path="*" element={<Page404 />} /> */}
        </Routes>
      </Layout>
    );
  }
}

export default RootPage;
