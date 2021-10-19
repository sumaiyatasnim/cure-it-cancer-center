
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Contexts/useAuth';

const Register = () => {

    const { createUser, handleEmailChange, handlePasswordChange, signInUsingGoogle } = useAuth();

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
                <h2 className="text-primary">Please Register</h2>
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

                    <Link to="/login">Already Registered?</Link>


                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
            <div>
                <h3>Or</h3>
            </div>
            <button onClick={handleGoogleLogin} className="btn-success">Google Sign-in</button>
        </div>
    );
};

export default Register;