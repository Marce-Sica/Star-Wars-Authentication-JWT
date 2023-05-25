import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import WithAuth from "../component/Auth/withAuth";

const AddPlanet = () => {
    const { store, actions } = useContext(Context);
    const [name, setName] = useState("");
    const [passengers, setPassengers] = useState("");
    const [length, setLength] = useState("");
    const [cargoCapacity, setCargoCapacity] = useState("");

    const navigate = useNavigate(); // initialize useNavigate hook

    const handleRegister = async (e) => {
        e.preventDefault(); // prevent form from submitting
        const response = await actions.addVehicle(name, passengers, length, cargoCapacity); // call register action
        console.log(response)
        if (response.ok) {
            actions.initialFetchUsersData()
            navigate("/"); // redirect to home component
        } else {
            alert("error, try again")
        }
    };

    return (
        <>
            <div className="container-fluid bg-dark p-5 mt-5">
                <div className="contactForm container rounded bg-dark border border-light p-0">
                    <div className="d-flex justify-content-center">
                        <h1 className="fs-1 fw-bold mt-5 text-light">Add new vehicle</h1>
                    </div>
                    <div className="form-control border border-0 ps-4 pe-4 bg-dark">
                        <form>
                            <label htmlFor="name" className="form-label fs-5 text-light">
                                Vehicle Name:
                            </label>
                            <input
                                type="text"
                                className="form-control mb-3"
                                placeholder="Enter name"
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                            />
                            <label htmlFor="passengers" className="form-label fs-5 text-light">
                                Passengers:
                            </label>
                            <input
                                type="text"
                                className="form-control mb-3"
                                placeholder="Enter passengers"
                                onChange={(e) => {
                                    setPassengers(e.target.value);
                                }}
                            />
                            <label htmlFor="length" className="form-label fs-5 text-light">
                                Length:
                            </label>
                            <input
                                type="text"
                                className="form-control mb-3"
                                placeholder="Enter length"
                                onChange={(e) => {
                                    setLength(e.target.value);
                                }}
                            />
                            <label htmlFor="cargoCapacity" className="form-label fs-5 text-light">
                                Cargo Capacity:
                            </label>
                            <input
                                type="number"
                                step="any"
                                className="form-control mb-3"
                                placeholder="Enter cargo capacity"
                                onChange={(e) => {
                                    setCargoCapacity(e.target.value);
                                }}
                            />
                            <div className="d-flex justify-content-center">
                                <button
                                    type="button"
                                    className="button-save btn btn-warning fs-6 fw-bold mt-4 mb-5"
                                    onClick={handleRegister}
                                >
                                    Add
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WithAuth(AddPlanet);
