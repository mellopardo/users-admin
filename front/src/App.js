import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <LoginPage></LoginPage>
        </Route>
        <Route path="/signup">
          <SignUpPage></SignUpPage>
        </Route>
        <Route path="/home">
          <HomePage></HomePage>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
