import React, { Component } from 'react'
import { CookiesProvider } from 'react-cookie';
import {Link} from 'react-router-dom'
import '../styles/LoginStyles.css'

export default class LoginView extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.onClickHandler = this.onClickHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onClickHandlerRegister = this.onClickHandlerRegister.bind(this);
    this.state = {
      username : "", password : "", checkpass : "",
    }
  }
  onClickHandler(){
    console.log("Entrar")
  }
  onClickHandlerRegister(){
    if(this.state.username==''||this.state.password==''||this.state.checkpass==''){
        alert("Llene todos los campos")
     }
     else if(this.state.checkpass != this.state.password){
      alert("Las contraseñas no coinciden")
     }
     else{
      const newUser = {
        id: Date().valueOf(),
        nombre:this.state.username,
        password:this.state.password,
        playlist:[],
        likes:[]
      }
      this.props.insertUser(newUser);
     }
      
  }
  onChangeHandler(event){
    this.state[event.target.name] = event.target.value;
  }
  
  render() {
    return (
      <div className="login-view">  
        <div className="contents">
          <div className="content-login">
          <h1>Inicia Sesión</h1>
          <form>
            <input 
              type="text" 
              className="input-text" 
              name="username" 
              onChange={this.onChangeHandler}
              placeholder="Introduzca su nombre de usuario"></input>
            <br />
            <input
              type="password" 
              className="input-text" 
              name="password"
              onChange={this.onChangeHandler}
              placeholder="Introduzca su contraseña"></input>
            <br />
            <Link to="/"
                className="input-button"
                onClick={this.onClickHandler}>
                Enviar
            </Link>
          </form>
          </div>
          <div className="content-register">
            <h1>Registrate</h1>
          <form>
            <input 
              type="text" 
              className="input-text" 
              name="username" 
              onChange={this.onChangeHandler}
              placeholder="Introduzca su nombre de usuario"></input>
            <br />
            <input
              type="password" 
              className="input-text" 
              name="password"
              onChange={this.onChangeHandler}
              placeholder="Introduzca su contraseña"></input>
            <br />
            <input
              type="password" 
              className="input-text" 
              name="checkpass"
              onChange={this.onChangeHandler}
              placeholder="Repita su contraseña"></input>
            <br />
            <Link to="/"
                className="input-button"
                onClick={this.onClickHandlerRegister}>
                Enviar
            </Link>
          </form>
          </div>
        </div>
      </div>
    )
  }
}
