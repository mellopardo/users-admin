import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import SignUpPage from './pages/SignUpPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <SignUpPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
