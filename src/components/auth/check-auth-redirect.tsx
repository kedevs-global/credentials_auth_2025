'use client'

import { useEffect } from 'react'
import SignInPage from '@/app/(ui)/auth/signin/page'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

function CheckAuthRedirect() {
  // eslint-disable-next-line
  const { data: _, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    // TODO: Show loading spinner
    if (status === 'loading') return

    if (status === 'authenticated') {
      router.replace('/dashboard')
      return
    }
  }, [status])

  return <SignInPage />
}

export default CheckAuthRedirect
