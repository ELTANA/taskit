import { PropTypes } from 'prop-types'
import { useCollection } from '../../hooks/useCollection'
import Avatar from '../Avatar/Avatar'

// STYLES
import './Users.scss'

const Users = ({ userList, position, showName }) => {
  const { documents, error } = useCollection('users')
  // console.log(documents)

  return (
    <div className={userList}>
      {error && <div className='error'>{error}</div>}

      {documents &&
        documents.map((user) => (
          <div key={user.id} className={position}>
            <Avatar src={user.photoURL} status={user.online ? 'online' : 'offline'} />
            <span className={showName}>{user.displayName}</span>
          </div>
        ))}
    </div>
  )
}

export default Users

// Users PROPTYPES
Users.propTypes = {
  userList: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  showName: PropTypes.string.isRequired
}
