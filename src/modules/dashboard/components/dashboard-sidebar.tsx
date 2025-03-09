import Link from 'next/link'
import { Package2 } from 'lucide-react'
import DashboardMenu from './dashboard-menu'

function DashboardSidebar() {
  return (
    <aside className='hidden w-[300px] border-r bg-muted/40 md:block'>
      <div className='flex h-full max-h-screen flex-col gap-2'>
        <header className='flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6'>
          <Link href='/' className='flex items-center gap-2 font-semibold'>
            <Package2 className='h-6 w-6' />
            <span>Kedevs</span>
          </Link>
        </header>
        <nav className='space-y-2 px-2 text-sm font-medium lg:px-4'>
          <DashboardMenu />
        </nav>
      </div>
    </aside>
  )
}

export default DashboardSidebar
