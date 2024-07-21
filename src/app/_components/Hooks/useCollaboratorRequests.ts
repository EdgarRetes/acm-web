import { api } from "~/trpc/react";

export function useCollaboratorRequests() {
  return (
    api.collaboratorRequest.getCollaboratorRequests.useQuery()
  );
}
