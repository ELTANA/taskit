import { Link } from 'react-router-dom'
import { useLogout } from '../../hooks/useLogout'

// STYLES & IMAGES
import './Navbar.scss'
import Logo from '../../assets/taskit_logo.svg'

const Navbar = () => {
  const { logout, isPending } = useLogout()

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

        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/signup'>Signup</Link>
        </li>
        <li>
          {!isPending ? (
            <button className='btn' onClick={handleLogout}>
              Log Out
            </button>
          ) : (
            <button className='btn'>Logging Out</button>
          )}
        </li>
      </ul>
    </div>
  )
}

export default Navbar
