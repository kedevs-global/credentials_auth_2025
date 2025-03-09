import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import Link from 'next/link';

function UserProfileLink() {
  return (
    <DropdownMenuItem asChild>
      <Link href='/dashboard/profile'>
        <span>Perfil</span>
      </Link>
    </DropdownMenuItem>
  );
}

export default UserProfileLink;
