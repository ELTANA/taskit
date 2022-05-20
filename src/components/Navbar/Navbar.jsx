import { Link } from 'react-router-dom'
import { useLogout } from '../../hooks/useLogout'
import { useAuthContext } from '../../hooks/useAuthContext'

// STYLES & IMAGES
import './Navbar.scss'
import Logo from '../../assets/images/taskit_logo.svg'

const Navbar = () => {
  const { logout, isPending } = useLogout()
  const { user } = useAuthContext()

  const handleLogout = () => {
    logout()
  }

  return (
    <div className='navbar'>
      <ul>
        <li className='logo'>
          <img src={Logo} alt='taskit logo' />
          <span>Task:it</span>
        </li>

        {user ? (
          <li>
            {isPending ? (
              <button className='btn'>Logging Out</button>
            ) : (
              <button className='btn' onClick={handleLogout}>
                Log Out
              </button>
            )}
          </li>
        ) : (
          <>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to='/signup'>Signup</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  )
}

export default Navbar
