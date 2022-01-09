import React from 'react';
import './css/App.css';
import BlogList from './screens/BlogList';
import CreateBlog from './screens/CreateBlog';
import Navbar from './component/Navbar';
import BlogDetail from './screens/BlogDetail';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return <BrowserRouter>
    <Navbar />
    <Route path='/' exact component={BlogList} />
    <Route path='/create' exact component={CreateBlog} />
    <Route path='/detail/:id' exact component={BlogDetail} />
  </BrowserRouter>
}

export default App;
