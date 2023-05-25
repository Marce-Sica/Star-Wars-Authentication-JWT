import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import WithAuth from "../component/Auth/withAuth";

const AddPeople = () => {
    const { store, actions } = useContext(Context);
    const [name, setName] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [eyes, setEyes] = useState("");
    const [height, setHeight] = useState("");

    const navigate = useNavigate(); // initialize useNavigate hook

    const handleRegister = async (e) => {
        e.preventDefault(); // prevent form from submitting
        const response = await actions.addPeople(name, birthdate, eyes, height); // call register action
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
            <div className="container-fluid bg bg-dark p-5 mt-5">
                <div className="contactForm container rounded bg-dark border border-light p-0">
                    <div className="d-flex justify-content-center">
                        <h1 className="fs-1 fw-bold mt-5 text-light">Add new character</h1>
                    </div>
                    <div className="form-control border border-0 ps-4 pe-4 bg-dark">
                        <form>
                            <label htmlFor="name" className="form-label fs-5 text-light">
                                Character Name
                            </label>
                            <input
                                type="text"
                                className="form-control mb-3"
                                placeholder="Enter name"
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                            />
                            <label htmlFor="birthdate" className="form-label fs-5 text-light">
                                Birthdate
                            </label>
                            <input
                                type="text"
                                className="form-control mb-3"
                                placeholder="Enter birthdate"
                                onChange={(e) => {
                                    setBirthdate(e.target.value);
                                }}
                            />
                            <label htmlFor="eyes" className="form-label fs-5 text-light">
                                Eyes
                            </label>
                            <input
                                type="text"
                                className="form-control mb-3"
                                placeholder="Eyes Color"
                                onChange={(e) => {
                                    setEyes(e.target.value);
                                }}
                            />
                            <label htmlFor="height" className="form-label fs-5 text-light">
                                Height
                            </label>
                            <input
                                type="number"
                                step="any"
                                className="form-control mb-3"
                                placeholder="Enter Height"
                                onChange={(e) => {
                                    setHeight(e.target.value);
                                }}
                            />
                            <div className="d-flex justify-content-center">
                                <button
                                    type="button"
                                    className="button-save btn btn-warning fs-6 fw-bold mt-4 mb-5"
                                    onClick={handleRegister} // call handleRegister function
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

export default WithAuth(AddPeople);
