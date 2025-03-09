import { toast } from 'sonner';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

function useSignout() {
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await signOut({ redirect: false });

      toast.success('Éxito', {
        description: 'Sesión cerrada',
      });

      router.replace('/');
    } catch (error) {
      toast.error('Error', {
        description: 'Error al cerrar sesión',
      });
    }
  };

  return { handleSignOut };
}

export default useSignout;
