import React, { useContext, useEffect } from "react";
import { Context } from "./store/appContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import DetailedPeople from "./component/detailedPeople.jsx";
import DetailedVehicle from "./component/detailedVehicle.jsx";
import DetailedPlanets from "./component/detailedPlanets.jsx";
import Login from "./pages/login.jsx";
import Register from "./pages/register.jsx";
import UsersDetailedPeople from "./component/usersDetailedPeople.jsx";
import UsersDetailedPlanet from "./component/usersDetailedPlanet.jsx";
import UsersDetailedVehicle from "./component/usersDetailedVehicle.jsx";
import AddPeople from "./pages/addPeople.jsx";
import AddPlanet from "./pages/addPlanet.jsx";
import AddVehicle from "./pages/addVehicle.jsx";

import { Navbar } from "./component/navbar";
// import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
  const { store, actions } = useContext(Context);
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  useEffect(() => {
    actions.initialFetchSwapi();
  }, []);

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Demo />} path="/demo" />
            <Route element={<Single />} path="/single/:theid" />
            <Route element={<Login />} path="/login" />
            <Route element={<Register />} path="/register" />
            <Route element={<AddPeople />} path="/add-people" />
            <Route element={<AddPlanet />} path="/add-planet" />
            <Route element={<AddVehicle />} path="/add-vehicle" />
            <Route element={<h1>Not found!</h1>} />
            <Route element={<DetailedPeople />} path="/people/:uid" />
            <Route element={<UsersDetailedPeople />} path="/userspeople/:id" />
            <Route element={<DetailedVehicle />} path="/vehicle/:uid" />
            <Route
              element={<UsersDetailedVehicle />}
              path="/usersvehicle/:id"
            />
            <Route element={<DetailedPlanets />} path="/planets/:uid" />
            <Route element={<UsersDetailedPlanet />} path="/usersplanet/:id" />
            <Route element={<h1>Not found! 404</h1>} path="*" />
          </Routes>
          {/* <Footer /> */}
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
