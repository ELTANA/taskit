import { Link } from 'react-router-dom'

// STYLES & IMAGES
import './Navbar.scss'
import Logo from '../../assets/taskit_logo.svg'

const Navbar = () => {
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
          <button className='btn'>Log Out</button>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
