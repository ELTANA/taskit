import { useState } from 'react'
import { NavLink } from 'react-router-dom'

// HOOKS
import { useAuthContext } from '../../hooks/useAuthContext'
// import { useLogout } from '../../hooks/useLogout'

// COMPONENTS
import Avatar from '../Avatar/Avatar'
import Users from '../Users/Users'

// STYLES & IMAGES
import './Sidebar.scss'
import DashboardIcon from '../../assets/images/dashboard_icon.svg'
import AddIcon from '../../assets/images/add_icon.svg'
import AllUsers from '../../assets/images/users.svg'
import MenuIcon from '../../assets/images/control.svg'

const Sidebar = () => {
  const { user } = useAuthContext()

  // LOG OUT
  // const { logout, isPending } = useLogout()
  // const handleLogout = () => {
  //   logout()
  // }

  // SIDE NAVBAR
  const [show, setShow] = useState(false)
  const handleNav = () => setShow(!show)

  return (
    <>
      {user && (
        <aside className={`sidebar ${!show && 'sidebar_closed'}`}>
          <div className='menu_arrow' onClick={handleNav}>
            <img className={`arrow ${!show && 'open'}`} src={MenuIcon} alt='menu icon' />
          </div>

          <div className='sidebar-content'>
            <nav className='links'>
              <ul>
                <li className='user'>
                  <Avatar src={user.photoURL} open={show && 'avatar_open'} />
                  <span className={`displayName slide_in ${!show && 'slide_out'} `}>
                    {user.displayName}
                  </span>
                  {/* {user && (
                    <li>
                      {isPending ? (
                        <button className='nav-btn'>Logging Out</button>
                      ) : (
                        <button className='nav-btn' onClick={handleLogout}>
                          Log Out
                        </button>
                      )}
                    </li>
                  )} */}
                </li>

                <li>
                  <NavLink className='nav_link' to='/'>
                    <img className='nav_img' src={DashboardIcon} alt='dashboard icon' />
                    <span className={`slide_in ${!show && 'slide_out'}`}>Dashboard</span>
                  </NavLink>
                </li>

                <li>
                  <NavLink className='nav_link' to='/create'>
                    <img className='nav_img' src={AddIcon} alt='add project icon' />
                    <span className={`slide_in ${!show && 'slide_out'}`}>New Project</span>
                  </NavLink>
                </li>

                <li>
                  <div className='nav_link all_users'>
                    <div className='all_users_heading'>
                      <img src={AllUsers} className='all_users_img' alt='all users icon' />
                      <span className={`all_users_title ${`slide_in ${!show && 'slide_out'}`}`}>
                        All Users
                      </span>
                    </div>
                  </div>
                  <Users
                    userList={!show ? 'user-list_small' : 'user-list'}
                    position={!show ? 'position' : 'user-list-item'}
                    showName={!show ? 'show' : 'noShow'}
                  />
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
