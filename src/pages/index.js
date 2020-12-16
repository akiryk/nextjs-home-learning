import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Featured from '../component/Featured';
import MultiCarouselPage from '../component/MultiCarouselPage';

const Home = () => (

  <div>
    <h3 className="text-center"> Latest Videos on WayLearning </h3>
    <hr/>
    <Featured/>
    <br/>
    <h4>Cooking</h4>
    <MultiCarouselPage keyName="cooking"/>
    <br/>
    <h4>DIY Projects</h4>
      <MultiCarouselPage keyName="diy"/>
    <br/>
    <h4>Yarn & Garden</h4>
      <MultiCarouselPage keyName="fitness"/>
    <br/>
    <h4>Hobbies</h4>
      <MultiCarouselPage keyName="technology"/>
  </div>
);

export default Home;
