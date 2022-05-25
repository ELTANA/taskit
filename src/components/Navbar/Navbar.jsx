// STYLES & IMAGES
import './Navbar.scss'
import Logo from '../../assets/images/taskit_logo.svg'

const Navbar = () => {
  return (
    <div className='nav-bar'>
      <ul>
        <li className='user'>
          <div className='time'>Time</div>
        </li>

        <li className='logo'>
          <img src={Logo} alt='taskit logo' />
          <span>Task:it</span>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
