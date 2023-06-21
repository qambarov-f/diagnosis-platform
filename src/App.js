import './App.css';
import Footer from './shared/components/Footer/Footer';
import Header from "./shared/components/Header/Header";
<<<<<<< HEAD
import MainPage from './shared/components/Mainpage';
import Register from "./shared/components/Register";
import Login from "./shared/components/Login";
=======
// import Register from "./shared/components/Register";
// import Login from "./shared/components/Login";
import Registration from './shared/components/Registration';
>>>>>>> efd034b3818186807060332477b3c81215a06707


function App() {
  return (
    <div className="App">
      <Header />
<<<<<<< HEAD
      <Register />
      <Login />
      <MainPage />
=======

      {/* <Register /> */}
      <Registration/>
      {/* <Login /> */}
>>>>>>> efd034b3818186807060332477b3c81215a06707
      <Footer />
    </div>
  );
}

export default App;
