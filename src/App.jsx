import React from 'react';
import Cookies from 'universal-cookie';
import MyLikes from './views/MyLikes'
import MyLibrary from './views/MyLibrary'
import NotFound from './views/NotFound'
import LoginView from './views/LoginView'
import HomeView from './views/HomeView'

import {useState} from 'react';
import {Link,Route,Routes} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faHome, faPlusSquare, faSearch, faWindowRestore } from '@fortawesome/free-solid-svg-icons'
import './App.css'
import './styles/MenuStyles.css'

const cookies = new Cookies();

const songList = [
  {title:"Chase",artist:"Batta",img_src:"https://static.wikia.nocookie.net/jjba/images/c/c2/Jojo_OP6.jpg",src:'/content/chase.mp3'},
  {title:"Chronos",artist:"STEREO DIVE FOUNDATION",img_src:"https://static.wikia.nocookie.net/shokugekinosoma/images/1/16/Chronos_single.jpeg",src:'/content/Chronos.mp3'},
  {title:"Dejaria Todo",artist:"Chayanne",img_src:"https://images.hive.blog/DQmYJLwoXUzpMZeNLrUjamfdiosyWPEjWqmcBgVoZBsG3bZ/chayanne_dejaria-todo.jpg",src:'/content/DejariaTodo.mp3'},
  {title:"Fuiste Tu",artist:"Ricardo Arjona",img_src:"https://i.scdn.co/image/ab67616d0000b273ed9ec8c63b0bf9ca14c28878",src:'/content/FuisteTu.mp3'},
  {title:"Inventame",artist:"Marco Antonio Solís",img_src:"https://i.scdn.co/image/ab67616d0000b273f80915e2639e129202f14e3b",src:'/content/Inventame.mp3'},
  {title:"Love Me Again",artist:"John Newmann",img_src:"https://i.pinimg.com/474x/10/a2/c8/10a2c8d49f17907df358dd6721079b70--love-me-again-john-newman.jpg",src:'/content/LoveMeAgain.mp3'}
]
function App () {
  const [usuario,setUser] = useState(null);
  const cerrarSesion=(event) =>{
    alert("Cerrando sesión")
    cookies.set('id', "", {path: '/'});
    cookies.set('nombre',"",{path: '/'});
    cookies.set('passwd',"",{path: '/'});
    cookies.set('playlist',"",{path: '/'});
    cookies.set('likes',"",{path: '/'});
  }
  const insertUser = (user)=>{
    cookies.set('id', user.id, {path: '/'});
    cookies.set('nombre',user.nombre,{path: '/'});
    cookies.set('passwd',user.passwd,{path: '/'});
    cookies.set('playlist',user.playlist,{path: '/'});
    cookies.set('likes',user.likes,{path: '/'});
    console.log(user);
    var newUser = {};
    newUser.id=cookies.get('id'),
    newUser.user=cookies.get('nombre'),
    newUser.passwd=cookies.get('passwd'),
    newUser.playlist=cookies.get('playlist'),
    newUser.likes=cookies.get('likes')
    setUser(newUser);
  }
    return(
      usuario
        ?
      <div className="App">
        <div className="login">
            <div className="cont-datos">        
                <h1>Bienvenido {usuario.user}</h1>
                <button className="close-sesion" onClick={cerrarSesion}> Cerrar sesion</button>
            </div>
        </div>
          <header className="component-menu">
              <img 
                  className="logo-menu" 
                  src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"/>
              <nav>
                  <ul className="menu-items">
                      <div className="block-1">    
                          <li>
                              <FontAwesomeIcon icon={faHome} /> 
                              <Link className="active" to="/">Inicio</Link></li>
                          <li>
                              <FontAwesomeIcon icon={faSearch} /> 
                              <Link to="/search">Buscar</Link></li>
                          <li>
                              <FontAwesomeIcon icon={faWindowRestore} /> 
                              <Link to="/library">Tu Biblioteca</Link></li>
                      </div>
                      <div className="block-2">
                          <li>
                              <FontAwesomeIcon icon={faPlusSquare} /> 
                              <Link to="/create">Crear Playlist</Link></li>
                          <li>
                              <FontAwesomeIcon icon={faHeart}  /> 
                              <Link to="/likes">Tus Me Gusta</Link></li>
                      </div>
                      <div className="block-3">
                          <li><Link to="/cookies">Cookies</Link></li>
                          <li><Link to="/privacity">Privacidad</Link></li>
                      </div>
                  </ul>
              </nav>
          </header>
          <div className="container-body">
            <Routes>
              <Route path="*" element={<NotFound/>}></Route>
              <Route path="/" element={<HomeView songList={songList} />}></Route>
              <Route path="/likes" element={<MyLikes/>}></Route>
              <Route path="/library" element={<MyLibrary/>}></Route>
              <Route path="/login" element={<LoginView/>}></Route>
            </Routes>
          </div>
      </div> :
      <LoginView
        insertUser = {insertUser}
      />
    )
}
export default App

