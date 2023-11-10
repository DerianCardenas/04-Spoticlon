import React, { Component } from 'react'
import '../styles/Player.css';
import '../styles/Likes.css';
import Song from '../components/Song';

export default class MyLikes extends Component {
  constructor(props) {
    super(props);
  }

  user = JSON.parse(localStorage.getItem('user'));
  usuarios = JSON.parse(localStorage.getItem('dbUsers'));

  render() {
    var songs = [];
    this.usuarios.map( (el) =>{
      if(el.username == this.user){
        console.log(el.likes);
          el.likes.map((song,index)=>
            songs.push(song)
        )
      }
    })
    return (
      <div className="content">
      <h1 className="titulo">Mis Me Gusta</h1>
          <div className="song-container">
            {
              songs.map(song => <Song song={song} />)
            }
            </div>
      </div>
    )
  }
}
