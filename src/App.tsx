import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import DecisionProvider from './context/DecisionProvider';
import NavMenuBar from './components/NavMenuBar';
import ContentContainer from './components/ContentContainer';
import WinningChoiceContainer from "./components/WinningChoiceContainer";
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <DecisionProvider>
        <NavMenuBar />
        <Router>
          <Switch>
            <Route path="/decision">
              <WinningChoiceContainer />
            </Route>
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
