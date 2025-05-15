'use client';

import {usePathname} from 'next/navigation';
import {useRouter} from 'next/navigation';
import {useEffect} from 'react';

type Props = {
  children: React.ReactNode;
};

const AuthGuard = ({children}: Props) => {
  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    if (pathName !== '/register') {
      const isLogged = localStorage.getItem('isLogged');
      if (!isLogged) {
        router.push('/login');
      }
    }
  }, [pathName]);

  return children;
};

export default AuthGuard;
