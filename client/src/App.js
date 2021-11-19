import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import About from "./screens/About/About";
import Home from "./screens/Home/Home";
import Gallery from "./screens/Gallery/Gallery";
import ProductCreate from "./screens/ProductCreate/ProductCreate";
import ProductDetail from "./screens/ProductDetail/ProductDetail";
import ProductEdit from "./screens/ProductEdit/ProductEdit";
import SignIn from "./screens/SignIn/SignIn";
import SignOut from "./screens/SignOut/SignOut";
import SignUp from "./screens/SignUp/SignUp";
import { verifyUser } from "./services/users";
import './'

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser();
      user ? setUser(user) : setUser(null);
    };
    fetchUser();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home user={user} />} />
        <Route path="/sign-up" element={<SignUp setUser={setUser} /> } />
        <Route path="/sign-in" element={<SignIn setUser={setUser} />} />
        <Route path="/sign-out" element={<SignOut setUser={setUser} />} />
        <Route exact path="/gallery" element={<Gallery user={user} />} />
        <Route
          path="/create-product"
          element={
            user ? <ProductCreate user={user} /> : <Navigate to="/sign-up" />
          }
        />
        <Route
          exact
          path="/gallery/:id/edit"
          element={
            user ?
              <ProductEdit user={user} />
              : <Navigate to="/sign-in" />
          }
        />
        <Route exact path="/gallery/:id" element={<ProductDetail user={user} />} />
        <Route exact path="/about" element={<About user={user} />}/>
      </Routes>
    </div>
  );
};

export default App;
