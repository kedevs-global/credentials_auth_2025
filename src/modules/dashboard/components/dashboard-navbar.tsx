import { CircleUser, Menu, Package2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import Link from 'next/link'
import SignOutButton from './signout-button'
import DashboardMenu from './dashboard-menu'
import ThemeSwitch from '@/components/theme/theme-switch'
import UserLabel from './user-label'
import UserProfileLink from './user-profile-link'
import CurrentDateBadge from './current-date-badge'

function DashboardNavbar() {
  return (
    <header className='flex h-16 w-full items-center justify-between border-b bg-muted/40 px-2 md:px-4 lg:h-[60px]'>
      <div className='me-2 flex items-center md:hidden'>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant='outline'
              size='icon'
              className='shrink-0 md:hidden'
            >
              <Menu className='h-5 w-5' />
              <span className='sr-only'>Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side='left' className='flex w-[300px] flex-col'>
            <nav className='grid gap-4 py-4'>
              <Link
                href='#'
                className='flex items-center gap-2 text-lg font-semibold'
              >
                <Package2 className='h-6 w-6' />
                <span>Kedevs</span>
              </Link>
              <DashboardMenu />
            </nav>
          </SheetContent>
        </Sheet>
        <Link
          href='#'
          className='hidden items-center gap-2 text-lg font-semibold md:flex'
        >
          <Package2 className='h-6 w-6' />
          <span>Dashboard</span>
        </Link>
      </div>
      <div className='flex-1'>
        <CurrentDateBadge />
      </div>

      <ThemeSwitch />

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='secondary' size='icon' className='rounded-full'>
            <CircleUser className='h-5 w-5' />
            <span className='sr-only'>User menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          <UserLabel />
          <DropdownMenuSeparator />
          <UserProfileLink />
          <SignOutButton />
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  )
}

export default DashboardNavbar
