import { useSession } from 'next-auth/react';

export function useAdmin() {
  const { data: session} = useSession();
  return {
    isAdmin: session?.user?.role === 'ADMIN',
  };
}