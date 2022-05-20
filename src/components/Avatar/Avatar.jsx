import PropTypes from 'prop-types'

// STYLES
import './Avatar.scss'

const Avatar = ({ src }) => {
  return (
    <div className='avatar'>
      <img src={src} alt='user avatar' />
    </div>
  )
}

export default Avatar

// Avatar PROPTYPES
Avatar.propTypes = {
  src: PropTypes.string.isRequired
}
