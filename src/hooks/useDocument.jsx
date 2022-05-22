import { useEffect, useState } from 'react'
import { taskitFirestore } from '../firebase/config'

const useDocument = (collection, id) => {
  const [document, setDocument] = useState(null)
  const [error, setError] = useState(null)

  // FETCH REALTIME DATA
  useEffect(() => {
    const ref = taskitFirestore.collection(collection).doc(id)

    const unsubscribe = ref.onSnapshot(
      (snapshot) => {
        if (snapshot.data()) {
          setDocument({ ...snapshot.data(), id: snapshot.id })
          setError(null)
        } else {
          setError('Omo! Nothing dey here o...')
        }
      },
      (err) => {
        // console.log(err)
        setError('Failed to get Document!')
      }
    )

    return () => unsubscribe()
  }, [collection, id])

  return { document, error }
}

export default useDocument
