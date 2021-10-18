
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import NotFound from './NotFound/NotFound';
import Header from './Pages/Header/Header';
// import HeaderR from './Pages/Header/HeaderR';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        {/* <HeaderR></HeaderR> */}
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
