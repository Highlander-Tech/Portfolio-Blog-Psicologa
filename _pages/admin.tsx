import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Admin() {
  const router = useRouter()

  useEffect(() => {
    router.push('https://prismic.io/')
  })

  return <p>Redirecting...</p>
}
