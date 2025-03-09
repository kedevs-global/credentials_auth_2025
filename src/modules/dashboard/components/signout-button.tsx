'use client'

import useSignout from '@/modules/auth/hooks/use-signout'
import { DropdownMenuItem } from '@/components/ui/dropdown-menu'

function SignOutButton() {
  const { handleSignOut } = useSignout()

  return (
    <DropdownMenuItem onClick={handleSignOut}>Cerrar Sesión</DropdownMenuItem>
  )
}

export default SignOutButton
