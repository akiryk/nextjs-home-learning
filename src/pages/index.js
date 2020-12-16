import React from 'react';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Featured from '../component/Featured';
import MultiCarouselPage from '../component/MultiCarouselPage';

const Home = () => (
  <div>
    <h3 className="text-center"> Latest Videos on WayLearning </h3>
    <hr/>
    <Featured/>
    <br/>
    <h4>Cooking</h4>
    <MultiCarouselPage/>
    <br/>
    <h4>DIY Projects</h4>
    <MultiCarouselPage/>
    <br/>
    <h4>Yarn & Garden</h4>
    <MultiCarouselPage/>
    <br/>
    <h4>Hobbies</h4>
    <MultiCarouselPage/>
  </div>
);

export default Home;
