'use client';
import {useEffect} from 'react';
import {useRouter} from 'next/navigation';

type Props = {
  children: React.ReactNode;
};

const AuthGuard = ({children}: Props) => {
  const router = useRouter();

  useEffect(() => {
    const isLogged = localStorage.getItem('isLogged');

    if (!isLogged) {
      router.push('/login');
      return;
    }
  }, [router]);

  return children;
};

export default AuthGuard;
