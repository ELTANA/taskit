import { BrowserRouter, Routes, Route } from 'react-router-dom'

// STYLES
import './App.scss'

// PAGES & COMPONENTS
import Dashboard from './pages/Dashboard/Dashboard'
import Create from './pages/Create/Create'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import Projects from './pages/Projects/Projects'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/SIdebar/Sidebar'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Sidebar />
        <article className='wrapper'>
          <Navbar />
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/create' element={<Create />} />
            <Route path='/projects/:id' element={<Projects />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
          </Routes>
        </article>
      </BrowserRouter>
    </div>
  )
}

export default App
