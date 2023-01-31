import { Route, Switch } from 'react-router-dom';
import './App.css';
import Auth from './components/Auth/Auth.js';
import Header from './components/Header.js';
import Todo from './components/Todo/Todo.js';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/auth/:type" component={Auth} />
        <Route path="/todo" component={Todo} />
      </Switch>
      <Header />
    </div>
  );
}

export default App;
