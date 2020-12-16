import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import Card from 'react-bootstrap/Card';
import { allData } from './data/data';

export default (props) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  const dataKey = props.keyName;
  console.log('sainish', allData[dataKey]);
  return (
    <div style={{ padding: `0 ${chevronWidth}px` }}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={4}
        gutter={20}
        leftChevron={<button>{'<'}</button>}
        rightChevron={<button>{'>'}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        {allData[dataKey].map((e, i) =>
          <div style={{ height: 400, background: '#EEE' }} key={i}>

            <Card style={{ height: '100%' }}>
              <Card.Img style={{ height: '70%' }} variant="top" src={e.image}/>
              <Card.Body>
                <Card.Title>{e.title}</Card.Title>
              </Card.Body>
            </Card>
          </div>,
        )}
      </ItemsCarousel>
    </div>
  );
};
