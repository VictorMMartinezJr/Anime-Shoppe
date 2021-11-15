import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Context } from './context/Context';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Context>
          <Navbar />
          <Switch>
            <Route>

            </Route>
          </Switch>
        </Context>
      </Router>
    </div>
  );
}

export default App;
