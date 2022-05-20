import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLogin } from '../../hooks/useLogin'

// STYLES
import './Login.scss'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, isPending, error } = useLogin()

  const handleLogIn = (e) => {
    e.preventDefault()

    login(email, password)
  }

  return (
    <main className='auth-wrapper'>
      <form className='auth-form' onSubmit={handleLogIn}>
        <h2>Log In</h2>

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

        {error && <small className='error'>{error}</small>}

        {isPending ? (
          <button className='btn' disabled>
            Loading...
          </button>
        ) : (
          <button className='btn' disabled={!(email && password)}>
            Log In
          </button>
        )}

        <small className='small'>
          <span>Don&apos;t have an account?</span>
          <Link to={'/signup'}>Sign Up</Link>
        </small>
      </form>
    </main>
  )
}

export default Login
