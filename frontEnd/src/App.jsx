import React from 'react';
import { createBrowserRouter , RouterProvider , Route, createRoutesFromElements } from 'react-router-dom';
import Layout from './Pages/GlobalServices/LayOut/Layout';
import Landing from './Pages/Landing/Landing';
// import { requirdAuthForLogin , requirdAuth } from './utils';

let router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
    <Route index element={<Landing/>}/> 
  </Route>
))

let App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App;