import { useSession } from 'next-auth/react';
import { api } from '~/trpc/react';

export function useRegistration(userEmail: string | null | undefined) {
  if (userEmail) {
    const hasRegistration  = api.collaborator.getSingleCollaborator.useQuery({
      email: userEmail
    })

    return hasRegistration;
  }

  return null
  
}