import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routes/App.jsx';
import Cart from './routes/Cart.jsx';
import ErrorPage from './error-page.jsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Context from './context/Context.jsx';

const router = createBrowserRouter([
  {
    path : "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path : "/cart",
    element: <Cart />,
    errorElement: <ErrorPage />,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Context>
      <RouterProvider router={router} />
    </Context>
  </React.StrictMode>,
)
