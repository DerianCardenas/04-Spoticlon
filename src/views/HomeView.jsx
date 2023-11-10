import React, { Component } from 'react'
import ComponenteCuerpo from '../components/ComponenteCuerpo'
export default class HomeView extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <ComponenteCuerpo canciones={this.props.songList}/>
    )
  }
}
