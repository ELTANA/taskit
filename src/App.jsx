import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

// STYLES
import './App.scss'

// PAGES & COMPONENTS
import Dashboard from './pages/Dashboard/Dashboard'
import Create from './pages/Create/Create'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import Projects from './pages/Projects/Projects'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import Users from './components/Users/Users'

const App = () => {
  const { user, authIsReady } = useAuthContext()

  return (
    <div className='App'>
      {authIsReady && (
        <BrowserRouter>
          {user && <Sidebar />}

          <article className='wrapper'>
            {user && <Navbar />}
            <Routes>
              {/* DASHBOARD PAGE */}
              <Route
                path='/'
                element={user ? <Dashboard /> : <Navigate to='/login' replace={true} />}
              />

              {/* CREATE PAGE */}
              <Route
                path='/create'
                element={user ? <Create /> : <Navigate to='/login' replace={true} />}
              />

              {/* PROJECTS PAGE */}
              <Route
                path='/projects/:id'
                element={user ? <Projects /> : <Navigate to='/login' replace={true} />}
              />

              {/* LOGIN PAGE */}
              <Route
                path='/login'
                element={!user ? <Login /> : <Navigate to='/' replace={true} />}
              />

              {/* SIGN UP PAGE */}
              <Route
                path='/signup'
                element={!user ? <Signup /> : <Navigate to='/' replace={true} />}
              />
            </Routes>
          </article>
          {user && <Users />}
        </BrowserRouter>
      )}
    </div>
  )
}

export default App
