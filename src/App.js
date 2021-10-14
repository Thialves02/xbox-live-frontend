import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import './App.css';
import GeneroWithGame from './components/Genero-With-Game/GeneroWithGame';
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
        <Route path='/perfil' exact={true} component={Perfil}/>
        <Route path='/criar-perfil' exact={true} component={CriarPerfil}/>
        <Route path='/editar-perfil' exact={true} component={EditarPerfil}/>
        <Route path='/editar-perfis' exact={true} component={EditarPerfis}/>
        <Route path='/home' exact={true} component={Home}/>
        <Route path='/game/view/:id' exact={true} component={View}/>
        <Route path='/game/view/trailer/:id' exact={true} component={ViewTrailer}/>
        <Route path='/game/view/gameplay/:id' exact={true} component={ViewGameplay}/>
        <Route path='/admin' exact={true} component={Administrador}/>
        <Route path='/admin/adicionar-jogo' exact={true} component={AdicionarJogo}/>
        <Route path='/admin/editar-jogos' exact={true} component={EditarJogos}/>
        <Route path='/admin/editar-jogo/:id' exact={true} component={EditarJogo}/>
        <Route path='/admin/adicionar-categoria' exact={true} component={AdicionarCategoria}/>
        <Route path='/admin/editar-categorias' exact={true} component={EditarCategorias}/>
        <Route path='/admin/editar-categoria/:id' exact={true} component={EditarCategoria}/>
        <Route path='/genero' exact={true} component={Genero}/>
        <Route path='/genero/:id/withGame' exact={true} component={GeneroWithGame}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
