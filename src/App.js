import './App.css';
import Mynavbar from '../src/components/my-navbar/mynavbar';
import Home from './components/my-navbar/Home'; 
import Event from './components/my-navbar/Events';
import Annual from './components/my-navbar/Annual';
import Team from './components/my-navbar/Teams'
import { BrowserRouter as Router, Switch,Route} from "react-router-dom";
function App() {
  return (
    <Router>
       <Mynavbar/>
      <div className="App">
        <Switch>
          <Route path="/Home" exact>
            <Home/>
          </Route>

          <Route path="/events" exact>
            <Event/>
          </Route>

          <Route path="/annual">
            <Annual/>
          </Route>

          <Route path="/team">
            <Team/> 
          </Route>
        </Switch>

      </div>  
    </Router>
    
  );
}

export default App;

