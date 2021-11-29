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
import "./Components/Food2.css";
import Food2 from "./Components/Food2.js";



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
    </center>
      <div className="foodi">
        <Footer image="https://media.istockphoto.com/vectors/pop-cake-line-icon-cake-on-a-stick-vector-illustration-isolated-on-vector-id1200078728?k=20&m=1200078728&s=612x612&w=0&h=dFxaZ5ZoIxvIBAg5Ofj3wk6WYtNrHsDKr-0MWzOLD4w=" name="Candys" discreption="njsl hdkgyugykg gyugul la hoi" />
        <Footer image="https://media.istockphoto.com/vectors/pizza-slice-food-icon-logo-vector-id1197784083?k=20&m=1197784083&s=612x612&w=0&h=C-0nxvWp1LLfvewONYtXSTkIoCtQIBPKzfqvf48TQuU=" name="Pizza" discreption="tjcfi ykfyu bklnd ndls dnajl" />
        <Footer image="https://media.istockphoto.com/vectors/cake-with-chocolate-glaze-and-marshmallows-solid-icon-birthday-vector-id1283972000?k=20&m=1283972000&s=612x612&w=0&h=WYv33XtUivf2K3J7ZxRCih7_C2s8V2rcUvT96fpdvi0=" name="cake" discreption="fdtydy ftyifk gyuguds ds ve" />
        <Footer image="https://cdn.pixabay.com/photo/2017/01/27/14/25/burger-2013191__340.png" name="burgers" discreption="dhls nkld njdkla bgkhu kjhuiho bhkhuhuiiuh gugui" />
        <Footer image="https://media.istockphoto.com/vectors/biscuit-line-icon-coconut-or-ground-almonds-cookie-macarons-symbol-vector-id1211789754?k=20&m=1211789754&s=612x612&w=0&h=ODDT083XPU7H6IPdZK_jOX57mCiEEOOuQ7HCz4BMRHM=" name="Biscuit" discreption="jsl gugligi  huiggug vvukldsjl jjl" />
        <Footer image="https://media.istockphoto.com/vectors/ice-cream-in-waffle-cone-icon-simple-sign-logo-vector-id1262580217?k=20&m=1262580217&s=612x612&w=0&h=2mp1AV8glaW9kqMRMFfU4sh_pot-_MTP2jYxEcGyXRk=" name="ice-cream" discreption="dbka hkh jioholk hihohl dbskj hl" />

      </div>
      <div className = "divOfFood2">
        <Food2 name = "Pizza" dis = "hkslhl hfkleshgli fhekls fh fhek fheigheo fheifhie" image = "https://media.istockphoto.com/vectors/fresh-pizza-with-tomato-cheese-olive-sausage-onion-vector-id1082045162?k=20&m=1082045162&s=612x612&w=0&h=lEmS1ihJ3ffKl_gnYX0cnjzJPYm0kdwc9Rp_K25l9gk="  />
        <Food2 name = "salad" dis = "ghrkugh gbrk ghrighriow ghriwhgiotw fhwrhoiw hgkwe" image = "https://media.istockphoto.com/vectors/traditional-greek-salad-with-slices-of-feta-cheese-tomatoes-olives-vector-id1308801026?k=20&m=1308801026&s=612x612&w=0&h=yI-9vatrSgMAhiKFI7RKUe7DIOym8iXr3qH7_hovjpE="/>
        <Food2 name = "dessert" dis = "fjgbkj grlkghl grhlig grilg glrks ghlih glrg grli" image = "https://media.istockphoto.com/vectors/ice-cream-sweet-dessert-balls-in-glass-cup-sundae-scoop-balls-with-vector-id1266684284?k=20&m=1266684284&s=612x612&w=0&h=VLl-22H2axUts_scDIwJSD4o6FyOn2HsJuT3VnEnwe0="/>
      </div>









    </section>

  }
}

export default App;
