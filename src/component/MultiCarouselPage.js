import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import Link from 'next/link';
import styles from './MultiCarouselPage.module.scss';
import Card from 'react-bootstrap/Card';
import { allData } from './data/data';

export default (props) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  const dataKey = props.keyName;
  return (
    <div>
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
        {allData[dataKey].map((data, i) => (
          <div style={{ height: 300, background: '#EEE' }} key={i}>
            <Link href={`details/${data.id}`}>
              <a className={styles.cardLink}>
                <Card style={{ height: '100%' }}>
                  <Card.Img
                    style={{ height: '70%' }}
                    variant="top"
                    src={data.image}
                  />
                  <Card.Body>
                    <Card.Title>{data.title}</Card.Title>
                  </Card.Body>
                </Card>
              </a>
            </Link>
          </div>
        ))}
      </ItemsCarousel>
    </div>
  );
};
