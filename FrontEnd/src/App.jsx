import React from 'react';
import { createBrowserRouter , RouterProvider , Route, createRoutesFromElements} from 'react-router-dom';
import Layout from './Pages/LayOut/Layout';
import Landing from './Pages/Landing/Landing';
import Profile from './Pages/Profile/Profile';
import CreateBooks from './Pages/CreateBooks/CreateBooks';
import BrowseBooks from './Pages/BrowseBooks/BrowseBooks';
import ResetPassword from './Pages/ResetPassword/ResetPassword';
import { requirdAuth , reverceRequirdAuth } from './utils';

let router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
    <Route index element={<Landing/>}/>
    <Route path='Profile' loader={async() => await requirdAuth()} element={<Profile/>}/>
    <Route path='CreateBooks' loader={async() => await requirdAuth()} element={<CreateBooks/>}/>
    <Route path='BrowseBooks' loader={async() => await requirdAuth()} element={<BrowseBooks/>}/>
    <Route path='ResetPassword' loader={async() => await reverceRequirdAuth()} element={<ResetPassword/>}/>
  </Route>
))

let App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App;