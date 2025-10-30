import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TopNav from './components/TopNav.jsx'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import BrowseBooks from './pages/BrowseBooks.jsx'
import AddBook from './pages/AddBook.jsx'
import CategoryBooks from './pages/CategoryBooks.jsx'
import BooksDetails from './pages/BookDetails.jsx'
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
          <Route path="*" element={<h2 className='mt-5'>404 - Page Not Found</h2>} />
          
        </Routes>
      </div>
    </>
  )
}

export default App
