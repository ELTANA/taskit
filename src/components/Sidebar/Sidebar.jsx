import { NavLink } from 'react-router-dom'
import Avatar from '../Avatar/Avatar'
import { useAuthContext } from '../../hooks/useAuthContext'

// STYLES & IMAGES
import './Sidebar.scss'
import DashboardIcon from '../../assets/images/dashboard_icon.svg'
import AddIcon from '../../assets/images/add_icon.svg'

const Sidebar = () => {
  const { user } = useAuthContext()
  return (
    <>
      {user && (
        <aside className='sidebar'>
          <div className='sidebar-content'>
            <div className='user'>
              <Avatar src={user.photoURL} />
              <p>{user.displayName}</p>
            </div>

            <nav className='links'>
              <ul>
                <li>
                  <NavLink to='/'>
                    <img src={DashboardIcon} alt='dashboard icon' />
                    <span>Dashboard</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/create'>
                    <img src={AddIcon} alt='add project icon' />
                    <span>New Project</span>
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
      )}
    </>
  )
}

export default Sidebar
