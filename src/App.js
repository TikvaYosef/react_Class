// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Media from "./Components/Media";
import Car from "./Components/Car";
import Name from "./Components/Name";


class App extends React.Component {
  render() {
    return <section> <center><h1> Hello </h1> <img src="https://cdn.pixabay.com/photo/2021/10/19/10/56/cat-6723256__340.jpg" />
      <Media image="https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662__340.jpg" src="https://player.vimeo.com/external/567321433.hd.mp4?s=b02cf1e3ba3d483402084fe4503cb30aa8d31fa1&profile_id=174" /> <Car img="https://media.istockphoto.com/photos/opened-vehicle-door-of-dark-lamborghini-sport-cars-of-famous-brand-picture-id1161338865?k=20&m=1161338865&s=612x612&w=0&h=vtS-_WNsV3n0ewZppDdgmjYeznqF8lNEK8FMzR6VpxY=" />
      <Name name = "Tikva" age = "25" /> </center></section>
  }
}

export default App;
