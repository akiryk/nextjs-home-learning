import React from 'react';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';

const Featured = () => (
  <div>
    <div>
      <div className='container-fluid'>
        <div className="row title" style={{ marginBottom: '20px' }}>

          <div className="col-sm-12 btn btn-warning">
            Featured
          </div>
        </div>
      </div>
      <div className='container-fluid'>
        <Carousel>
          <Carousel.Item style={{ 'height': '300px' }}>
            <img style={{ 'height': '300px' }}
                 className="d-block w-100"
                 src={'./video_player_placeholder.gif'}/>
            <Carousel.Caption>
              <h3>First Demo </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ 'height': '300px' }}>
            <img style={{ 'height': '300px' }}
                 className="d-block w-100"
                 src={'./video_player_placeholder.gif'}/>
            <Carousel.Caption>
              <h3>Second Demo</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ 'height': '300px' }}>
            <img style={{ 'height': '300px' }}
                 className="d-block w-100"
                 src={'./video_player_placeholder.gif'}/>
            <Carousel.Caption>
              <h3>Third Demo</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  </div>
);

export default Featured;
