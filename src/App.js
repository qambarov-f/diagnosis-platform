import './App.css';
import Footer from './shared/components/Footer/Footer';
import Header from "./shared/components/Header/Header";
import MainPage from './shared/components/Mainpage';
import Register from "./shared/components/Register";
import Login from "./shared/components/Login";


function App() {
  return (
    <div className="App">
      <Header />
      <Register />
      <Login />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
