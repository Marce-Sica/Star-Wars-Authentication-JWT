import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import CardPeople from "../component/cardPeople.jsx";
import CardVehicle from "../component/cardVehicle.jsx";
import CardPlanets from "../component/cardPlanets.jsx";
import UsersPeople from "../component/usersPeople.jsx";
import UsersPlanets from "../component/usersPlanets.jsx";
import UsersVehicles from "../component/usersVehicles.jsx";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="bg-dark pt-5 d-flex align-items-center flex-column">
      <>
        {store.userLogin ? (
          <>
            <div className="d-flex bg-dark mt-5">
              <h1 className="text-warning text-center bg-dark p-3">Characters</h1>
              <Link to="/add-people">
                <button type="button" className="btn btn-danger ms-3 mt-4">
                  Add New Character
                </button>
              </Link>
            </div>
            <UsersPeople />

            <div className="d-flex">
              <h1 className="text-warning ms-5 p-3">Vehicles</h1>
              <Link to="/add-vehicle">
                <button type="button" className="btn btn-danger ms-3 mt-4">
                  Add New Vehicle
                </button>
              </Link>
            </div>
            <UsersVehicles />

            <div className="d-flex">
              <h1 className="text-warning ms-5 p-3">Planets</h1>
              <Link to="/add-planet">
                <button type="button" className="btn btn-danger ms-3 mt-4">
                  Add New Planet
                </button>
              </Link>
            </div>
            <UsersPlanets />
          </>
        ) : (
          <>
            <div className="text-warning d-flex flex-column align-items-center">
              <h1 className="ms-5">Characters</h1>
              <CardPeople />
              <h1 className="ms-5">Planets</h1>
              <CardPlanets />
              <h1 className="ms-5">Vechicles</h1>
              <CardVehicle />
            </div>
          </>
        )}
      </>
    </div>
  );
};
