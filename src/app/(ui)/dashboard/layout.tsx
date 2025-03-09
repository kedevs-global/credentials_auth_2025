import DashboardSidebar from '@/modules/dashboard/components/dashboard-sidebar'
import DashboardNavbar from '@/modules/dashboard/components/dashboard-navbar'

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex min-h-screen w-full overflow-auto'>
      <DashboardSidebar />
      <div className='flex w-full flex-col overflow-auto'>
        <DashboardNavbar />
        <main className='flex-1 overflow-x-auto p-4 lg:p-6'>{children}</main>
      </div>
    </div>
  )
}

export default DashboardLayout
