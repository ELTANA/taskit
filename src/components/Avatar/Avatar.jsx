import PropTypes from 'prop-types'
// STYLES
import './Avatar.scss'

const Avatar = ({ src, open, status }) => {
  return (
    <div className={`avatar ${open}`}>
      <img src={src} alt='avatar' />

      <span className={status}></span>
    </div>
  )
}

export default Avatar

// AVATAR PROPTYPES
Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  status: PropTypes.string,
  open: PropTypes.any
}
