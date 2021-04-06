import React, { useRef } from "react";
import { useLogin } from '../../utils/auth';
import { useHistory } from 'react-router-dom';

function SignInCard(props) {

    const history = useHistory();

    function redirectHome() {
        history.push("/home");
    }

    //const emailRef = useRef();
    const passwordRef = useRef();
    const usernameRef = useRef();

    // Get the helper login function from the `useLogin` hook.
    const login = useLogin();

    const handleSubmit = async e => {
        e.preventDefault();

        //const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const username = usernameRef.current.value;
        

        try {

            await login({ username, password });

            // User has been successfully logged in and added to state. Perform any additional actions you need here such as redirecting to a new page.
                console.log('logged in!')
                //redirect user to home page after login
                redirectHome();
        } catch(err) {

             // Handle error responses from the API
             if( err.response && err.response.data ) console.log(err.response.data);

        }
    }

    return (
        <div className="card card-signin flex-row my-5">
                        <div className="card-img-left d-none d-md-flex" style={{ background: `scroll center url(${process.env.PUBLIC_URL}/12-129949_gym-backgroundlogo.jpg)`}}>
                        </div>
                        <div className="card-body">
                        <form className="form-signin">
                            <div className="form-label-group">
                            <input type="text" ref={usernameRef} id="inputUserame" className="form-control" placeholder="Username" required autoFocus/>
                            <label htmlFor="inputUserame"></label>
                            </div>
            
                            <div className="form-label-group">
                            <input type="password" ref={passwordRef} id="inputPassword" className="form-control" placeholder="Password" required/>
                            <label htmlFor="inputPassword"></label>
                            </div>

                            <hr/>
            
                            <button className="btn btn-lg btn-dark btn-block text-uppercase" type="submit" onClick={handleSubmit}>Login</button>
                            <a className="d-block text-center mt-2 small" href="/">Sign up</a>
                        </form>
                        </div>
                    </div>
    )
}
export default SignInCard;