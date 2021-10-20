
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Contexts/useAuth';

const Register = () => {

    const { createUser, handleEmailChange, handlePasswordChange, signInUsingGoogle, error, toggleLogin, isLogin, handleResetPassword } = useAuth();

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

            <form onSubmit={createUser}>
                <h2 className="text-primary">Please {isLogin ? "Login" : "Register"}</h2>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" placeholder="email" required></input>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword3" placeholder="password" required></input>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Re-enter Password</label>
                    <div className="col-sm-10">
                        <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword3" placeholder="re-enter password" required></input>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-10 offset-sm-2">
                        <div className="form-check">
                            <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1"></input>
                            <label className="form-check-label" for="gridCheck1">
                                {isLogin ? "Haven't registered yet?" : "Already Registered?"}
                            </label>
                        </div>
                    </div>
                </div>

                {/* <div className="row mb-3">
                    <Link to="/login">Already Registered?</Link>
                </div> */}
                <div className="row mb-3">
                    <p className="text-danger">{error}</p>
                </div>
                <button type="submit" className="btn btn-primary">{isLogin ? "Login" : "Register"}</button>
                <button onClick={handleResetPassword} type="button" class="btn btn-secondary btn-sm">Reset Password</button>
            </form>
            <div>
                <h3>Or</h3>
            </div>
            <button onClick={handleGoogleLogin} className="btn btn-success mb-4">Google Sign-in</button>
        </div>
    );
};

export default Register;