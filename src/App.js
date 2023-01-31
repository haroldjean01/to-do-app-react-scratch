import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Auth from './components/Auth/Auth.js';
import Header from './components/Header.js';
import Todo from './components/Todo/Todo.js';
import { useUser } from './context/UserContext.js';

function App() {
  const { user } = useUser();
  return (
    <div className="App">
      <Switch>
        <Route path="/auth/:type" component={Auth} />
        <Route path="/todo" component={Todo} />
        <>
          {user && <Redirect to="/todo" />}
          {!user && <Redirect to="/auth/sign-in" />}
        </>
      </Switch>
      <Header />
    </div>
  );
}

export default App;
