import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Pokemon from '../components/Pokemon';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1>404: Not Found</h1>
    //todo create a global error
  },
  {
    path: '/pokemon/:pokemonID',
    element: <Pokemon />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
