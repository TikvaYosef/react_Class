// import './App.css';
import React from 'react';


class Media extends React.Component {
  render(){
      console.log(this.props)
    return <section> <center><h1> Hello </h1>,<img src ={this.props.image}/><video controls src ={this.props.src}></video></center></section>
  }
}

export default Media;
