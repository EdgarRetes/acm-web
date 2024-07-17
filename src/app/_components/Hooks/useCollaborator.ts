import { api } from "~/trpc/react";

export function useCollaborators() {
  return (
    api.collaborator.getCollaborators.useQuery()
  );
}
