'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { buttonVariants } from '@/components/ui/button';
import {
  Package,
  Boxes,
  Tag,
  ChevronUp,
  ChevronDown,
  Activity,
  Fuel,
  PieChart,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import React from 'react';

interface DashboardMenuLinkProps {
  redirect: string;
  icon?: React.ReactNode;
  title: string;
}

interface DashboardMenuLinkGroupProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export default function DashboardMenu() {
  return (
    <>
      <_DashboardMenuLinkGroup
        title='Dashboard'
        icon={<PieChart className='mr-3 h-4 w-4' />}
      >
        <_DashboardMenuLink
          redirect='/dashboard/item1'
          icon={<Fuel className='mr-3 h-4 w-4' />}
          title='Item 1'
        />
        <_DashboardMenuLink
          redirect='/dashboard/item2'
          icon={<Package className='mr-3 h-4 w-4' />}
          title='Item 2'
        />
      </_DashboardMenuLinkGroup>

      <_DashboardMenuLinkGroup
        title='Products'
        icon={<Boxes className='mr-3 h-4 w-4' />}
      >
        <_DashboardMenuLink
          redirect='/dashboard/products'
          icon={<Package className='mr-3 h-4 w-4' />}
          title='Products'
        />
        <_DashboardMenuLink
          redirect='/dashboard/categories'
          icon={<Tag className='mr-3 h-4 w-4' />}
          title='Categories'
        />
      </_DashboardMenuLinkGroup>

      <_DashboardMenuLink
        redirect='/dashboard/stock'
        icon={<Activity className='mr-3 h-4 w-4' />}
        title='Stock'
      />
    </>
  );
}

function _DashboardMenuLinkGroup({
  title,
  icon,
  children,
}: DashboardMenuLinkGroupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const isChildActive = React.Children.toArray(children).some(
      (child) =>
        React.isValidElement(child) && child.props.redirect === pathname
    );
    if (isChildActive) {
      setIsOpen(true);
    }
  }, [pathname, children]);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`justify-between rounded-md p-2 text-muted-foreground ${buttonVariants(
          { variant: 'ghost' }
        )}`}
      >
        <div className='flex items-center'>
          {icon}
          <span>{title}</span>
        </div>
        {isOpen ? (
          <ChevronUp className='h-4 w-4' />
        ) : (
          <ChevronDown className='h-4 w-4' />
        )}
      </button>
      {isOpen && <div className='ml-4 mt-1 space-y-1'>{children}</div>}
    </div>
  );
}

export function _DashboardMenuLink({
  redirect,
  icon,
  title,
}: DashboardMenuLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === redirect;

  return (
    <Link
      href={redirect}
      className={`flex w-full items-center justify-start rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-primary hover:shadow-md ${
        isActive && 'bg-accent text-primary shadow-md font-bold'
      } ${buttonVariants({ variant: 'ghost' })}`}
    >
      <div className='flex w-full items-center justify-start'>
        {icon}
        <span> {title} </span>
      </div>
    </Link>
  );
}
