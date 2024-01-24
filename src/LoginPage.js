import React, { useState } from "react";;

/**
 * Component for rendering LoginPage
 * RoutesList -> LoginPage
 */
function LoginPage( props ) {

    // console.log("loginPage runs ...");
    // console.log("props", props);

    const { login } = props.props.props;
    const { register } = props.props.props;

    const [formData, setFormData] = useState(null);
    // const [formErrors, setFormErrors] = useState([]);

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
        login(formData);
    }

    async function handleSubmitRegister(evt) {
        evt.preventDefault();
        register(formData);
    }

    return (
        <div>

            <div className="indentMore">
                <h4 className="text-center m-4">To sign in, please enter your username and password:</h4>
                <form onSubmit={handleSubmitLogin}>
                <div className="form-group col-4 mx-auto text-start m-2">
                    <label htmlFor="username1" >Username</label>
                    <input
                    id="username1"
                    name="username"
                    type="text"
                    className="form-control"
                    onChange={handleChange}
                    />
                </div>
                <div className="form-group col-4 mx-auto text-start m-2">
                    <label htmlFor="password1" >Password</label>
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
                    <label htmlFor="username2" >Username</label>
                    <input
                    id="username2"
                    name="username"
                    type="text"
                    className="form-control"
                    onChange={handleChange}
                    />
                </div>
                <div className="form-group col-4 mx-auto text-start m-2">
                    <label htmlFor="password2" >Password</label>
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