import React from 'react';
import './css/App.css';
import BookList from './screens/BookList';
import CreateBook from './screens/CreateBook';
import Navbar from './component/Navbar';
import Footer from './component/Footer.js';
import BookDetail from './screens/BookDetail';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return <BrowserRouter>
    <Navbar />
    <Route path='/' exact component={BookList} />
    <Route path='/create' exact component={CreateBook} />
    <Route path='/detail/:id' exact component={BookDetail} />
    <Footer />
  </BrowserRouter>

}

export default App;
