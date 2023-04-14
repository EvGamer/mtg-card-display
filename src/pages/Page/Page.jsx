import React, { Suspense } from 'react';
import { useSearchParams, Link, Await, useLoaderData } from 'react-router-dom';
import { CardList } from './components/CardList';

import styles from './Page.module.css';


export function Page() {
  const [{ page }] = useSearchParams();
  const { cardResponse } = useLoaderData();

  return (
    <div className={styles.root}>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Await resolve={cardResponse} errorElement={(error) => <div>{error.message}!</div>}>
            <CardList />
          </Await>
        </Suspense>
        <div>
          {page > 1 
            ? <Link to={`?page=${Number(page) - 1}`}>Previous</Link> 
            : null
          }
          <span>Page {page}</span>
          <Link to={`?page=${Number(page) + 1}`}>Next</Link>
        </div>
      </main>
    </div>
  )
}