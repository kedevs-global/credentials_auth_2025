'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import ThemeSwitch from '@/components/theme/theme-switch';
import {
  ArrowRight,
  DollarSign,
  LineChart,
  PieChart,
  Wallet,
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useState } from 'react';

function SignInPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  // eslint-disable-next-line
  const { data: _, status } = useSession();

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    setIsLoading(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      username: formData.get('username') as string,
      password: formData.get('password') as string,
    };

    const response = await signIn('credentials', {
      redirect: false,
      ...data,
    });
    setIsLoading(false);

    if (!response?.ok) {
      toast.error('Error', {
        description: 'Error al iniciar sesión',
      });
      return;
    }
    toast.success('Éxito', {
      description: 'Sesión iniciada',
    });

    router.replace('/dashboard');
    form.reset();
  };

  return (
    <main className='relative flex min-h-screen flex-col lg:flex-row'>
      <aside className='relative hidden bg-gradient-to-br from-primary/90 to-primary-foreground bg-cover bg-center lg:block lg:w-2/3'>
        <div className='absolute inset-0 bg-black/10'></div>
        <div className='relative z-10 flex h-full flex-col items-center justify-center p-12 text-white'>
          <div className='mb-8 flex items-center space-x-2'>
            <Wallet className='h-10 w-10' />
            <h1 className='text-3xl font-bold'>FinanceTrack</h1>
          </div>
          <h2 className='mb-6 text-center text-4xl font-bold tracking-tight'>
            Controla tus finanzas con facilidad
          </h2>
          <p className='mb-8 max-w-md text-center text-lg text-white/90'>
            Gestiona tus gastos, establece presupuestos y visualiza tus finanzas
            de manera intuitiva.
          </p>

          <div className='mt-12 grid grid-cols-2 gap-8'>
            <div className='flex flex-col items-center rounded-lg bg-white/10 p-6 backdrop-blur-sm transition-all hover:bg-white/20'>
              <PieChart className='mb-4 h-12 w-12' />
              <h3 className='mb-2 text-xl font-semibold'>Análisis detallado</h3>
              <p className='text-center text-sm text-white/80'>
                Visualiza tus gastos con gráficos interactivos
              </p>
            </div>
            <div className='flex flex-col items-center rounded-lg bg-white/10 p-6 backdrop-blur-sm transition-all hover:bg-white/20'>
              <LineChart className='mb-4 h-12 w-12' />
              <h3 className='mb-2 text-xl font-semibold'>Seguimiento</h3>
              <p className='text-center text-sm text-white/80'>
                Monitorea tus finanzas en tiempo real
              </p>
            </div>
          </div>
        </div>
      </aside>

      <article className='mx-auto flex h-screen w-full max-w-md flex-col items-center justify-center p-8 lg:w-1/3'>
        <section className='absolute right-4 top-4'>
          <ThemeSwitch />
        </section>

        <Card className='w-full space-y-6 p-8 shadow-lg'>
          <div className='flex items-center justify-center space-x-2'>
            <DollarSign className='h-8 w-8 text-primary' />
            <h2 className='text-2xl font-bold'>FinanceTrack</h2>
          </div>

          <div className='text-center'>
            <h2 className='text-2xl font-bold'>Iniciar Sesión</h2>
            <p className='mt-2 text-sm text-muted-foreground'>
              Accede a tu cuenta para gestionar tus gastos
            </p>
          </div>

          <form
            className='mt-8 w-full items-center space-y-5'
            onSubmit={handleSubmit}
          >
            <div className='space-y-2'>
              <Input
                type='text'
                placeholder='Usuario'
                name='username'
                className='border-input/60 bg-background/50 transition-all focus-visible:ring-primary'
                required
              />
            </div>

            <div className='space-y-2'>
              <Input
                type='password'
                placeholder='Contraseña'
                name='password'
                className='border-input/60 bg-background/50 transition-all focus-visible:ring-primary'
                required
              />
            </div>

            <Button className='w-full group' disabled={isLoading}>
              {isLoading ? (
                <span className='flex items-center justify-center'>
                  <span className='mr-2 h-4 w-4 animate-spin rounded-full border-2 border-background border-t-transparent'></span>
                  Cargando...
                </span>
              ) : (
                <span className='flex items-center justify-center'>
                  Iniciar sesión
                  <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
                </span>
              )}
            </Button>
          </form>
        </Card>

        <footer className='mt-8 text-center text-xs text-muted-foreground'>
          © {new Date().getFullYear()} FinanceTrack. Todos los derechos
          reservados.
        </footer>
      </article>
    </main>
  );
}

export default SignInPage;
