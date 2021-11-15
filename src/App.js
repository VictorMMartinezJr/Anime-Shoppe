import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Context } from './context/Context';
import Navbar from './components/Navbar/Navbar';
import ShopAll from './components/ShopPages/ShopAll';

function App() {
  return (
    <div className="App">
      <Router>
        <Context>
          <Navbar />
          <Switch>
            <Route exact path='/'>
              <ShopAll />
            </Route>
          </Switch>
        </Context>
      </Router>
    </div>
  );
}

export default App;
