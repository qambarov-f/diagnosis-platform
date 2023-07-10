import './App.css';
import Footer from './shared/components/Footer/Footer';
import Header from "./shared/components/Header/Header";


// import CheckboxList from './shared/components/StepOne';

// import MainPage from "./shared/components/Mainpage";
import Carousel from "./shared/components/Carousel";
// import Register from "./shared/components/Register";
// import Login from "./shared/components/Login";
// import Registration from "./shared/components/Registration";
function App() {
  return (
    <div className="App">
      <Header />

      <Carousel />

      {/* <CheckboxList /> */}

      {/* <MainPage /> */}
      {/* <Register /> */}
      {/* <Registration/> */}
      {/* <Login /> */}
      <Footer />
    </div>
  );
}
export default App;
