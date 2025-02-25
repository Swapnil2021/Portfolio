import { createBrowserRouter } from 'react-router-dom';
import { AppLayout } from "./components/Layout/AppLayout";

import {Home } from './pages/Home';
import { About } from './pages/about';
import { Design } from './pages/design';
import { Contact }from './pages/contact';

import './App.css'
import { RouterProvider } from 'react-router';

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path:"/",
        element:<Home/>},      
         {
          path:"about",
          element:<About/>},
        {
          path:"design",
          element:<Design/>},
          {
            path:"contact",
            element:<Contact/>

          },

    ],
  },
]);

function App(){
  return(
<RouterProvider router ={router}></RouterProvider>

  );
}
export default App
