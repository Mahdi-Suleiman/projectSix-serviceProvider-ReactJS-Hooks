import './App.scss';
import { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import NavBar from './components/navbar/navbar';
import HomePage from './pages/homepage/homepage';
import Footer from './components/footer/footer';
import LoginPage from "./pages/login-page/login-page"
import RegisterPage from "./pages/register-page/register-page"
import GlassesPage from './pages/glasses-page/glasses-page';
import RoomsPage from './pages/rooms-page/rooms-page';
import DetailedGlasses from './components/detailed-glass/detailed-glass';
import glasses from './data/glasses/glasses';
import rooms from './data/rooms/rooms';
import DetailedRoom from './components/detailed-room/detailed-room';
import CartPage from './pages/cart-page/cart-page';
import CheckoutPage from './pages/checkout-page/checkout-page';
import Userprofile from './pages/user-profile/user-profile';


function App() {
  const [loggedUser, setLoggedUser] = useState(JSON.parse(localStorage.getItem("loggedUser")));

  return (
    <div className="App">
      <NavBar loggedUser={loggedUser} setLoggedUser={setLoggedUser} />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/login" element={<LoginPage setLoggedUser={setLoggedUser} />} />
        <Route exact path="/register" element={<RegisterPage setLoggedUser={setLoggedUser} />} />
        <Route exact path="/glasses" element={<GlassesPage />} />
        <Route exact path="/rooms" element={<RoomsPage />} />
        <Route exact path="/glasses/:title" element={<DetailedGlasses glasses={glasses} setLoggedUser={setLoggedUser} />} />
        <Route exact path="/glasses/:title" element={<DetailedGlasses setLoggedUser={setLoggedUser} />} />
        <Route exact path="/rooms/:title" element={<DetailedRoom rooms={rooms} />} />
        <Route exact path="/cart" element={<CartPage setLoggedUser={setLoggedUser} />} />
        <Route exact path="/checkout" element={<CheckoutPage setLoggedUser={setLoggedUser} />} />
        <Route exact path="/profile" element={<Userprofile setLoggedUser={setLoggedUser} loggedUser={loggedUser} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
