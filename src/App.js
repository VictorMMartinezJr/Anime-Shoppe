import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Context } from './context/Context';
import Navbar from './components/Navbar/Navbar';
import ShopAll from './components/ShopPages/ShopAll';
import ShopMens from './components/ShopPages/ShopMens';
import ShopWomens from './components/ShopPages/ShopWomens';

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
            <Route exact path='/mens'>
              <ShopMens />
            </Route>
            <Route exact path='/womens'>
              <ShopWomens />
            </Route>
          </Switch>
        </Context>
      </Router>
    </div>
  );
}

export default App;
