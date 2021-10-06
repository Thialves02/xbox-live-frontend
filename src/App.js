import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import './App.css';
import CriarPerfil from './pages/Criar-Perfil/CriarPerfil';
import EditarPerfil from './pages/Editar-Perfil/EditarPerfil';
import EditarPerfis from './pages/Editar-Perfis/EditarPerfis';
import Login from './pages/Login/Login';
import Perfil from './pages/Perfil/Perfil';
import Registro from './pages/Registro/Registro';

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
