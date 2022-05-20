import { useState, useEffect } from 'react'
import { taskitAuth, taskitFirestore } from '../firebase/config'
import { useAuthContext } from './useAuthContext'

export const useLogin = () => {
  const [isCancelled, setIsCancelled] = useState(false)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch } = useAuthContext()

  const login = async (email, password) => {
    setError(null)
    setIsPending(true)

    try {
      // login
      const res = await taskitAuth.signInWithEmailAndPassword(email, password)

      if (res) {
        // Update Online Status on Login
        await taskitFirestore.collection('users').doc(res.user.uid).update({
          online: true
        })

        // dispatch login action
        dispatch({ type: 'LOGIN', payload: res.user })

        if (!isCancelled) {
          setIsPending(false)
          setError(null)
        }
      }
    } catch (err) {
      if (!isCancelled) {
        setIsPending(false)
        return setError(err.message)
      }
    }
  }

  useEffect(() => {
    return () => setIsCancelled(true)
  }, [])

  return { login, isPending, error }
}
