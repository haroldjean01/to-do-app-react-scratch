import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Auth from './components/Auth/Auth.js';
import Header from './Header/Header.js';
import Items from './components/Items/Items.js';
import { useUser } from './context/UserContext.js';

function App() {
  const { user } = useUser();
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/auth/:type" component={Auth} />
        <Route exact path="/item" component={Items} />
        <Route exact path="/" />
        <>
          {user && <Redirect to="/item" />}
          {!user && <Redirect to="/auth/sign-in" />}
        </>
      </Switch>
    </div>
  );
}

export default App;
