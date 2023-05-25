import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const { store, actions } = useContext(Context);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const isActive = true;
    const navigate = useNavigate(); // initialize useNavigate hook

    useEffect(() => {
        console.log(email);
    }, [email]);

    useEffect(() => {
        console.log(password);
    }, [password]);

    const handleRegister = async (e) => {
        e.preventDefault(); // prevent form from submitting
        const response = await actions.register(name, email, password, isActive); // call register action
        console.log(response)
        if (response.ok) {
            navigate("/login"); // redirect to login component
        }
    };

    return (
        <>
            <div className="container-fluid bg-dark pt-5 pb-5">
                <div className="contactForm container rounded bg-dark border border-light p-0">
                    <div className="d-flex justify-content-center bg-dark">
                        <h1 className="fs-1 fw-bold mt-5 text-light">Register</h1>
                    </div>
                    <div className="form-control border border-0 ps-4 pe-4 bg-dark">
                        <form>
                            <label htmlFor="full-name" className="form-label fs-5 text-light">
                                Full Name:
                            </label>
                            <input
                                type="text"
                                className="form-control mb-3"
                                placeholder="Enter full name"
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                            />
                            <label htmlFor="email" className="form-label fs-5 text-light">
                                Email:
                            </label>
                            <input
                                type="text"
                                className="form-control mb-3"
                                placeholder="Enter email"
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                            />
                            <label htmlFor="password" className="form-label fs-5 text-light">
                                Password:
                            </label>
                            <input
                                type="password"
                                className="form-control mb-3"
                                placeholder="Enter password"
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                            />
                            <div className="d-flex justify-content-center pt-5 pb-5">
                                <button
                                    type="button"
                                    className="button-save btn btn-warning fs-6 fw-bold"
                                    onClick={handleRegister} // call handleRegister function
                                >
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;
