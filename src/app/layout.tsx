"use client";

import { useEffect, useState} from 'react';
import { createBrowserRouter, RouterProvider, RouterProviderProps } from 'react-router-dom';
import './globals.css';
import App from '../components/App';
import ErrorGen from '../components/ErrorGen';
import { wrapCreateBrowserRouter } from '@sentry/react';
import { YourCustomRootErrorBoundary } from './customErrorBoundary';


const sentryCreateBrowserRouter = wrapCreateBrowserRouter(createBrowserRouter);
const browserRouter = sentryCreateBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <YourCustomRootErrorBoundary />, // Error boundary for this route
    
  },
  {
    path: "/throw-error",
    element: <ErrorGen />, // Route that throws an error
    errorElement: <YourCustomRootErrorBoundary />,  // Error boundary for this route
  },
])


export default function RootLayout() {
  //const [router, setRouter] = useState<RouterProviderProps['router'] | null>(); // Correct type for router

  //useEffect(() => {
    //setRouter(browserRouter); // Set Router object in state
  //}, []);

 // if (!router) {
  //  return <div>Loading...</div>; // Fallback during SSR
  //}

  return (
    <html lang="en">
      <body>
          <RouterProvider router={browserRouter} />
      </body>
    </html>
  );
}