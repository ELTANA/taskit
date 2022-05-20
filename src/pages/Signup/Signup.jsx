import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSignup } from '../../hooks/useSignup'

// LOADER
// import { SpinnerCircularFixed } from 'spinners-react'

// STYLES
import './Signup.scss'

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [avatar, setAvatar] = useState(null)
  const [avatarError, setAvatarError] = useState(null)
  const { signup, error, isPending } = useSignup()

  const handleFileChange = (e) => {
    setAvatar(null)
    let selected = e.target.files[0]
    // console.log(selected)

    if (!selected) {
      setAvatarError('Please select an image file!')
      return
    }
    if (!selected.type.includes('image')) {
      setAvatarError('Selected file must be an image!')
      return
    }
    if (!selected.size > 150000) {
      setAvatarError('Image file Size must be less than 150kb!')
      return
    }

    setAvatarError(null)
    setAvatar(selected)
  }

  const handleSignUp = (e) => {
    e.preventDefault()

    signup(email, password, displayName, avatar)
  }

  return (
    <main className='auth-wrapper'>
      <form className='auth-form' onSubmit={handleSignUp}>
        <h2>Sign Up</h2>

        {error && <small className='error'>{error}</small>}

        <label htmlFor='email'>
          <span>Email</span>
          <input
            type='email'
            name='email'
            placeholder='Enter Email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </label>

        <label htmlFor='password'>
          <span>Password</span>
          <input
            type='password'
            name='password'
            placeholder='Enter Password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </label>

        <label htmlFor='displayName'>
          <span>Display Name</span>
          <input
            type='text'
            name='displayName'
            placeholder='Enter Display Name'
            onChange={(e) => setDisplayName(e.target.value)}
            value={displayName}
            required
          />
        </label>

        <label htmlFor='avatar'>
          <span>Profile Avatar</span>
          <input
            type='file'
            name='avatar'
            placeholder='Upload Avatar'
            required
            onChange={handleFileChange}
            // value={avatar}
            className='file-input'
          />
          {avatarError && <small className='error'>{avatarError}</small>}
        </label>

        {isPending ? (
          <button className='btn' disabled>
            Loading...
          </button>
        ) : (
          <button className='btn' disabled={!(email && password && displayName && avatar)}>
            Sign Up
          </button>
        )}

        <small className='small'>
          <span>Do you have an account?</span>
          <Link to={'/login'}>Log In</Link>
        </small>
      </form>
    </main>
  )
}

export default SignUp
