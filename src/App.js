// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Media from "./Components/Media";
import Car from "./Components/Car";
import Name from "./Components/Name";
import Employ from "./Components/Employ.js";
import './Components/Employ.css';
import Footer from "./Components/Footer.js";
import './Components/Footer.css';



// import { Component } from 'react';


class App extends React.Component {
  render() {
    return <section> <center><h1> Hello </h1> <img src="https://cdn.pixabay.com/photo/2021/10/19/10/56/cat-6723256__340.jpg" />
      <Media image="https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662__340.jpg" src="https://player.vimeo.com/external/567321433.hd.mp4?s=b02cf1e3ba3d483402084fe4503cb30aa8d31fa1&profile_id=174" /> <Car img="https://media.istockphoto.com/photos/opened-vehicle-door-of-dark-lamborghini-sport-cars-of-famous-brand-picture-id1161338865?k=20&m=1161338865&s=612x612&w=0&h=vtS-_WNsV3n0ewZppDdgmjYeznqF8lNEK8FMzR6VpxY=" />
      <Name name="Tikva" age="25" />
      <div className="sectionOfEmploys">
        <Employ image="https://cdn.pixabay.com/photo/2017/05/19/12/38/entrepreneur-2326419__340.jpg " name="shay" job="cehbjvhjo" />
        <Employ image="https://cdn.pixabay.com/photo/2018/01/04/21/15/young-3061652__340.jpg" name="keren" job="cellko" />
        <Employ image="https://cdn.pixabay.com/photo/2019/10/06/18/21/woman-4530909__340.png " name="yafit" job="cejkgko" />
        <Employ image="https://media.istockphoto.com/photos/lead-yourself-to-a-life-of-success-picture-id1299077558?k=20&m=1299077558&s=612x612&w=0&h=PU8JRoL6gRWYh1YDPtYjP45y7BUzFS3_mzQ1H9gumwk= " name="Eden" job="cejkko" />
      </div>
      <div className = "food">
        <Footer image="https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062__340.jpg" name="Pizza" discreption="tjcnd ndls dnajl" />
        <Footer image="https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246__340.jpg" name="burgers" discreption="dhls nkld njdkla" />
        <Footer image="https://cdn.pixabay.com/photo/2017/03/23/19/57/asparagus-2169305__340.jpg" name="fish" discreption="jsl dsjl jjl" />
        <Footer image="https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971552__340.jpg" name="cake" discreption="fds ds ve" />
        <Footer image="https://cdn.pixabay.com/photo/2016/01/22/02/13/meat-1155132__340.jpg" name="meat" discreption="dbka dbskj hl" />
        <Footer image="https://cdn.pixabay.com/photo/2016/11/23/18/31/pasta-1854245__340.jpg" name="pasta" discreption="njsl hdkla hoi" />
      </div>





    </center>



    </section>

  }
}

export default App;
