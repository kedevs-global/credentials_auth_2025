'use client'

import { DropdownMenuLabel } from '@/components/ui/dropdown-menu'
import { useSession } from 'next-auth/react'

export function UserLabel() {
  const { data: session } = useSession()

  return <DropdownMenuLabel> {session?.user?.username} </DropdownMenuLabel>
}

export default UserLabel
