import { useState, useEffect } from 'react'
import { taskitAuth, taskitStorage, taskitFirestore } from '../firebase/config'
import { useAuthContext } from './useAuthContext'

export const useSignup = () => {
  const [isCancelled, setIsCancelled] = useState(false)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch } = useAuthContext()

  const signup = async (email, password, displayName, avatar) => {
    setError(null)
    setIsPending(true)

    try {
      // signup
      const res = await taskitAuth.createUserWithEmailAndPassword(email, password)

      if (!res) {
        throw new Error('Could not complete sign up')
      }

      if (res) {
        // Upload User Avatar
        const uploadPath = `avatars/${res.user.uid}/${avatar.name}`
        const userAvatar = await taskitStorage.ref(uploadPath).put(avatar)
        const userAvatarUrl = await userAvatar.ref.getDownloadURL()

        // add display name & Image URL to user
        await res.user.updateProfile({ displayName, photoURL: userAvatarUrl })

        // Create User Document
        await taskitFirestore.collection('users').doc(res.user.uid).set({
          online: true,
          displayName,
          photoURL: userAvatarUrl
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
        setError(err.message)
        setIsPending(false)
      }
    }
  }

  useEffect(() => {
    return () => setIsCancelled(true)
  }, [])

  return { signup, error, isPending }
}
