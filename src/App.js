
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import NotFound from './NotFound/NotFound';
import Header from './Pages/Header/Header';
import Login from './Pages/Login/Login';

import Details from './Pages/Details/Details';
import Register from './Pages/Login/Register';
import AuthProvider from './Contexts/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';

import CancerTypes from './Pages/CancerTypes/CancerTypes';
import Appoinments from './Pages/Appointments/Appoinments';
import Doctors from './Doctors/Doctors';
import Footer from './Footer/Footer';
import ContactUs from './Pages/ContactUs/ContactUs';
// import HeaderR from './Pages/Header/HeaderR';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>

          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/cancerTypes">
              <CancerTypes></CancerTypes>
            </Route>

            <PrivateRoute exact path="/appointments">
              <Appoinments></Appoinments>
            </PrivateRoute>
            <PrivateRoute exact path="/doctors">
              <Doctors></Doctors>
            </PrivateRoute>

            <Route exact path="/contact">
              <ContactUs></ContactUs>
            </Route>
            <PrivateRoute exact path="/details/:serviceId">
              <Details></Details>
            </PrivateRoute>

            {/* <Route exact path="/login">
              <Login></Login>
            </Route> */}
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
