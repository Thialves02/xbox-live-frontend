import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import './App.css';
import GeneroWithGame from './components/Genero-With-Game/GeneroWithGame';
import GuardedRoute from './components/GuardedRoute/GuardedRoute';
import PerfisEdit from './components/Perfis-Edit/PerfisEdit';
import AdicionarCategoria from './pages/Adicionar-Categoria/AdicionarCategoria';
import AdicionarJogo from './pages/Adicionar-Jogo/AdicionarJogo';
import Administrador from './pages/Administrador/Administrador';
import CriarPerfil from './pages/Criar-Perfil/CriarPerfil';
import EditarCategoria from './pages/Editar-Categoria/EditarCategoria';
import EditarCategorias from './pages/Editar-Categorias/EditarCategorias';
import EditarJogo from './pages/Editar-Jogo/EditarJogo';
import EditarJogos from './pages/Editar-Jogos/EditarJogos';
import EditarPerfil from './pages/Editar-Perfil/EditarPerfil';
import EditarPerfis from './pages/Editar-Perfis/EditarPerfis';
import Favoritos from './pages/Favoritos/Favoritos';
import Genero from './pages/Genero/Genero';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Perfil from './pages/Perfil/Perfil';
import Registro from './pages/Registro/Registro';
import ViewGameplay from './pages/View-Gameplay/ViewGameplay';
import ViewTrailer from './pages/View-Trailer/ViewTrailer';
import View from './pages/view/View';

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route path='/' exact component={Login}/>
        <Route path='/registro' exact={true} component={Registro}/>
        <GuardedRoute path='/perfil' exact={true} component={Perfil}/>
        <GuardedRoute path='/criar-perfil' exact={true} component={CriarPerfil}/>
        <GuardedRoute path='/editar-perfil' exact={true} component={EditarPerfil}/>
        {/* <GuardedRoute path='/editar-perf' exact={true} component={PerfisEdit}/>  */}     {/* /////// */}
        <GuardedRoute path='/editar-perfis/:id' exact={true} component={EditarPerfis}/>
        <GuardedRoute path='/home' exact={true} component={Home}/>
        <GuardedRoute path='/game/view/:id' exact={true} component={View}/>
        <GuardedRoute path='/game/view/trailer/:id' exact={true} component={ViewTrailer}/>
        <GuardedRoute path='/game/view/gameplay/:id' exact={true} component={ViewGameplay}/>
        <GuardedRoute path='/admin' exact={true} component={Administrador}/>
        <GuardedRoute path='/admin/adicionar-jogo' exact={true} component={AdicionarJogo}/>
        <GuardedRoute path='/admin/editar-jogos' exact={true} component={EditarJogos}/>
        <GuardedRoute path='/admin/editar-jogo/:id' exact={true} component={EditarJogo}/>
        <GuardedRoute path='/admin/adicionar-categoria' exact={true} component={AdicionarCategoria}/>
        <GuardedRoute path='/admin/editar-categorias' exact={true} component={EditarCategorias}/>
        <GuardedRoute path='/admin/editar-categoria/:id' exact={true} component={EditarCategoria}/>
        <GuardedRoute path='/genero' exact={true} component={Genero}/>
        <GuardedRoute path='/genero/:id/withGame' exact={true} component={GeneroWithGame}/>
        <GuardedRoute path='/favoritos' exact={true} component={Favoritos}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
