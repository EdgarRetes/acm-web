import { z } from "zod";
import { db } from "../../db";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const collaboratorsRouter = createTRPCRouter({

    createCollaborator: protectedProcedure.input(z.object({
        name:z.string(),
        career:z.string(),
        semester:z.string(),
        email:z.string(),
        photoUrl:z.string(),
    })).mutation(({input,ctx}) => {
        const updatedUser = db.user.update({
        where: { email: input.email },
        data: { role: "COLLABORATOR" },
    });
        const collaborator = db.collaborator.create({
            data:{
                name: input.name,
                career: input.career,
                semester: input.semester,
                email: input.email,
                photoUrl: input.photoUrl,
            }
        });
        return {collaborator, updatedUser};
    }),

    getCollaborators: publicProcedure.query(async () => {
        const collaborators = await db.collaborator.findMany();
        return collaborators;
    }),

    getSingleCollaborator: publicProcedure
        .input(z.object({
            email: z.string()
        }))
        .query(async (session) => {
            const collaborator = await db.collaboratorRequest.findFirst({
                where: {
                    userEmail: session.input.email
                }
            })
            
        if(collaborator?.userEmail) return collaborator.userEmail as string;
        return null
        })

    

});