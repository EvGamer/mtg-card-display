import { memo } from 'react';

import { useAsyncValue } from 'react-router-dom';

import styles from './CardList.module.css';

function CardList() {
  const cardResponse = useAsyncValue();

  return (
    <div className={styles.root}>
      {cardResponse.data.map((card) => (
        <figure key={card.id}>
          <img src={card.image_uris.normal} height="300" />
          <figcaption>{card.name}</figcaption>
        </figure>
      ))}
    </div>
  )
}

export default memo(CardList)
