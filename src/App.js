import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Auth from './components/Auth/Auth.js';
import Header from './components/Header.js';
import item from './components/item/item.js';
import { useUser } from './context/UserContext.js';

function App() {
  const { user } = useUser();
  return (
    <div className="App">
      <Switch>
        <Route exact path="/auth/:type" component={Auth} />
        <Route exact path="/item" component={item} />
        <Route exact path="/" />
        <>
          {user && <Redirect to="/item" />}
          {!user && <Redirect to="/auth/sign-in" />}
        </>
      </Switch>
      <Header />
    </div>
  );
}

export default App;
