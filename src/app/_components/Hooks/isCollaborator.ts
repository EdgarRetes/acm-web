import { useSession } from 'next-auth/react';

export function useCollaborator() {
  const { data: session} = useSession();
  return {
    isCollaborator: session?.user?.role === 'COLLABORATOR',
  };
}