import './App.css';
import Mynavbar from '../src/components/my-navbar/mynavbar';
import Home from './Pages/Home'; 
import Event from './Pages/Events';
import Annual from './Pages/Annual';
import Team from './components/my-navbar/Teams';
import Videos from './components/my-navbar/Videos'; 
import { BrowserRouter as Router, Switch,Route} from "react-router-dom";
import SignUp from './components/my-navbar/SignUp';
import Signin from './components/my-navbar/Signin';
import Myfooter from './components/my-footer/myfooter';
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

          <Route path="/video">
            <Videos/> 
          </Route>

          <Route path="/signup">
            <SignUp/> 
          </Route>

          <Route path="/signin">
            <Signin/>
          </Route>

        </Switch>
        <Myfooter/>
        
  

      </div>  
    </Router>
    
  );
}

export default App;

