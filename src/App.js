import './App.css';
import React, {  Suspense, lazy } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Loading from './shared/Util/Loading';

// import Footer from './shared/components/Footer/Footer';
// import Header from "./shared/components/Header/Header";


// import CheckboxList from './shared/components/StepOne';

// import MainPage from "./shared/components/Mainpage";
// import Carousel from "./shared/components/Carousel";
// import Register from "./shared/components/Register";
// import Login from "./shared/components/Login";
// import Registration from "./shared/components/Registration";

const RootPage = lazy(() => import("./pages"));

function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<Loading />}>
          <RootPage />
        </Suspense>
      </Router>
    </div>
  );
}

export default App;

