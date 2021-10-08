import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import './App.css';
import CriarPerfil from './pages/Criar-Perfil/CriarPerfil';
import EditarPerfil from './pages/Editar-Perfil/EditarPerfil';
import EditarPerfis from './pages/Editar-Perfis/EditarPerfis';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Perfil from './pages/Perfil/Perfil';
import Registro from './pages/Registro/Registro';
import View from './pages/view/View';

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route path='/' exact component={Login}/>
        <Route path='/registro' exact={true} component={Registro}/>
        <Route path='/perfil' exact={true} component={Perfil}/>
        <Route path='/criar-perfil' exact={true} component={CriarPerfil}/>
        <Route path='/editar-perfil' exact={true} component={EditarPerfil}/>
        <Route path='/editar-perfis' exact={true} component={EditarPerfis}/>
        <Route path='/home' exact={true} component={Home}/>
        <Route path='/game/view/:id' exact={true} component={View}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
