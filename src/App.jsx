import { createBrowserRouter, RouterProvider, defer } from 'react-router-dom'
import { fetchCardData } from './api/fetchCardData';

import cards from './assets/cards.json';
import { Page } from './pages';

import './App.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Page />,
    loader: ({ params }) => {
      const { page = 1 } = params;
      const maxPageSize = 75;
      const pageSize = Math.min(params.pageSize ?? maxPageSize, maxPageSize);

      return defer({
        cardResponse: fetchCardData(
          cards
            .slice((page - 1) * pageSize, page * pageSize)
            .map(card => ({
              set: card.set.toLowerCase(),
              collector_number: card.number,
            })),
        )
      })
    }
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
