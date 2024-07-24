import { useSession } from 'next-auth/react';

export function useCollaborator() {
  const { data: session} = useSession();
  const isCollaborator = session?.user?.role === 'COLLABORATOR';
  const userEmail = session?.user?.email;
  return {
    isCollaborator,
    userEmail
  };
}