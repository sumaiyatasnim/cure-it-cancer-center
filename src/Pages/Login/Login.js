
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Contexts/useAuth';

const Login = () => {

    const { signInUsingGoogle, userLogin, handleEmailChange, handlePasswordChange } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
            });

    }
    return (
        <div className="container">
            {/* <form onSubmit={userLogin}>
                <h2>Please Login</h2>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label" >Email</label>
                    <div className="col-sm-10">
                        <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" placeholder="email"></input>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword3" placeholder="password"></input>
                    </div>
                </div>

                <div className="row mb-3">


                    <Link to="/register">Haven't Registered?</Link>

                </div>
                <button type="submit" className="btn btn-primary">Log In </button>
            </form> */}
            <div className="row mb-3">


                <Link to="/register">Haven't Registered?</Link>

            </div>
            <br />
            <div>
                <h3>Or</h3>
            </div>
            <button onClick={handleGoogleLogin} className="btn-success">Google Sign-in</button>
        </div>
    );
};

export default Login;