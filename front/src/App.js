import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" exact>
        <LoginPage></LoginPage>
        </Route>
        <Route path="/signup">
          <SignUpPage></SignUpPage>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
