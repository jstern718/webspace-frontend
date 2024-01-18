import React, { useState } from "react";
import { useLocation } from "react-router-dom";

/**
 * Component for rendering Login Page
 *
 * RoutesList -> LoginPage
 */
function LoginPage({ login, register }) {
    const [formData, setFormData] = useState(null);
    const [formErrors, setFormErrors] = useState([]);

    /**
     * Saves form data on user input changes
     */
    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(oldData => ({ ...oldData, [name]: value }));
    }

    /**
     * Submits form information and calls login from parent component
     */
    async function handleSubmitLogin(evt) {
        evt.preventDefault();
        try {
            console.log("formData", formData);
            await login(formData);
        } catch (errors) {
            console.log("error");
       }
    }

    async function handleSubmitRegister(evt) {
        evt.preventDefault();
        try {
            console.log("formData", formData);
            register(formData);
        } catch (errors) {
            console.log("error");
       }
    }


    return (
        <div>

            <div className="indentMore">
                <h4 className="text-center m-4">To sign in, please enter your username and password:</h4>
                <form onSubmit={handleSubmitLogin}>
                <div className="form-group col-4 mx-auto text-start m-2">
                    <label htmlFor="username" >Username</label>
                    <input
                    id="username1"
                    name="username"
                    type="text"
                    className="form-control"
                    onChange={handleChange}
                    />
                </div>
                <div className="form-group col-4 mx-auto text-start m-2">
                    <label htmlFor="password" >Password</label>
                    <input
                        id="password1"
                        name="password"
                        type="password"
                        className="form-control"
                        onChange={handleChange}
                    />
                </div>
                    <div className="form-group col-4 mx-auto m-4">
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>

            <div className="indentMore">
                <h4 className="text-center m-4">To register, please choose a username and password:</h4>
                <form onSubmit={handleSubmitRegister}>
                <div className="form-group col-4 mx-auto text-start m-2">
                    <label htmlFor="username" >Username</label>
                    <input
                    id="username2"
                    name="username"
                    type="text"
                    className="form-control"
                    onChange={handleChange}
                    />
                </div>
                <div className="form-group col-4 mx-auto text-start m-2">
                    <label htmlFor="password" >Password</label>
                    <input
                        id="password2"
                        name="password"
                        type="password"
                        className="form-control"
                        onChange={handleChange}
                    />
                </div>
                    <div className="form-group col-4 mx-auto m-4">
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>



        </div>
    );
}

export default LoginPage;