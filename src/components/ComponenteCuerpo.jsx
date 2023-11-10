import React, { Component } from "react";
import '../App.css';
import '../styles/Player.css';
import Song from '../components/Song'
export default class ComponenteCuerpo extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        const canciones = this.props.canciones;
        return(
            <div className="content">
                <h2>CANCIONES PARA TI</h2>
                <div className="song-container">
                {
                    canciones.map((song,index)=>
                        <Song song={song} key={index}/>
                    )
                }
                </div>
            </div>
        )  
    } 
}