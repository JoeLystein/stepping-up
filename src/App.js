import './App.css';
import Mynavbar from '../src/components/my-navbar/mynavbar';
import { BrowserRouter as Router, Switch,Route} from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/mynavbar">
            <Mynavbar/>
          </Route>
        </Switch>

      </div>  
    </Router>
    
  );
}

export default App;

