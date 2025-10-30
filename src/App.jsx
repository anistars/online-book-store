import { useState } from 'react'
import './App.css'
import TopNav from './components/TopNav.jsx'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import BrowseBooks from './pages/BrowseBooks.jsx'
import AddBook from './pages/AddBook.jsx'
import BooksDetails from './pages/BookDetails.jsx'
import NotFound from './pages/NotFound.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container text-center">
        <TopNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<BrowseBooks />} />
          <Route path="/add" element={<AddBook />} />
          <Route path="/book/:category" element={<BrowseBooks />} />
          <Route path='/books/:id' element={<BooksDetails />} />
          <Route path="/add" element={<AddBook />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  )
}

export default App
