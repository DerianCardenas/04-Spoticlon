import React, { Component } from "react";
import Cookies from 'universal-cookie';
import { faPlay , faHeart, faPlus} from "@fortawesome/free-solid-svg-icons";
import '../App.css';
import '../styles/Player.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cookies = new Cookies();
export default class Song extends Component {

    constructor(props) {
        super(props);
        this.play = this.play.bind(this);
        this.likeSong = this.likeSong.bind(this);
    }
    audioStatus = false;        
    like = false;    
    audio = new Audio(this.props.song.src);
    play = () => {
        if(!this.audioStatus) {
            this.audio.play();
            this.audioStatus = true;
        }
        else{
            console.log("here");
            this.audio.pause();
            this.audioStatus =false;
        }
    };
    likeSong = () =>{
        this.like = !this.like;
        if(this.like){
            let usuario = cookies.get('nombre');
            alert(usuario + " likes " + this.props.song.title)
            var likes = cookies.get('likes');
            likes.push(this.props.song);
            cookies.set('likes',likes,{path: '/'});
            console.log(cookies.get('likes'));
        }
    }
  render() {
    const track = this.props.song;
    return (
        <div className="song-player">
            <div className="song-img">
                <img src={track.img_src}/>
            <h3>{track.title} - {track.artist}</h3>
            </div>
            <div className="song-controls">
                <audio  src={track.src} autoPlay={false}></audio>
                <FontAwesomeIcon className="play" onClick={this.play} icon={faPlay}/>
                <FontAwesomeIcon className="like-song" onClick={this.likeSong} icon={faHeart}/>
                <FontAwesomeIcon className="play add"  icon={faPlus}/>
            </div>
        </div>
    )
  }
}
