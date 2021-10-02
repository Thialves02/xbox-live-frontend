import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import './App.css';
import Registro from './pages/Registro/Registro';

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route path='/' exact component={Registro}/>
        {/* <Route path='/' />
        <Route path='/' />
        <Route path='/'/>
        <Route path='/' /> */}
      </Switch>
    </Router>
    </div>
  );
}

export default App;
