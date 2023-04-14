import { memo } from 'react';

import { useAsyncValue } from 'react-router-dom';

import styles from './CardList.module.css';

function CardList() {
  const cardResponse = useAsyncValue();

  return (
    <div className={styles.root}>
      {cardResponse.data.map((card) => (
        <figure
          key={card.id}
          style={{ // using inlines so I can copy
            display: 'inline-block',
            padding: '2px',
            textAlign: 'center',
          }}>
          <img src={card.image_uris.normal} height="300" width="215" />
        </figure>
      ))}
    </div>
  )
}

export default memo(CardList)
