import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import DecisionProvider from './context/DecisionProvider';
import NavMenuBar from './components/NavMenuBar';
import ContentContainer from './components/ContentContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <DecisionProvider>
        <NavMenuBar />
        <Router>
          <Switch>
            <Route path="/">
              <ContentContainer />
            </Route>
          </Switch>
        </Router>
      </DecisionProvider>
    </div>
  );
}

export default App;
