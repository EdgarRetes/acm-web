'use client';

import { useCollaboratorRequests } from "~/app/_components/Hooks/useCollaboratorRequests";
import { api } from "~/trpc/react";
import { useRouter } from 'next/navigation';
import { Refresh } from "@mui/icons-material";

export default function adminDashboard() {
    const router = useRouter();
    const {data,error,isLoading} = useCollaboratorRequests();
    const createCollaboratorMutation = api.collaborator.createCollaborator.useMutation()
    const deleteCollaboratorRequestMutation = api.collaboratorRequest.deleteCollaboratorRequest.useMutation();

    if(error){
        console.log(error)
    }

    if(isLoading){
        return <p className='h-screen w-full bg-gradient-to-t from-[#500889] to-[#440674] text-white flex items-center justify-center typo-calendario text-xl'>
        <img src='Img/Ellipse.png' className='size-40 animate-spin'/>
        </p>
    }

    const addCollaborator = (collaboratorRequest: any) => {
        createCollaboratorMutation.mutate({
            name: collaboratorRequest.name,
            career: collaboratorRequest.career,
            semester: `${collaboratorRequest.semester}° Semestre`,
            email: collaboratorRequest.userEmail,
            photoUrl: collaboratorRequest.photoUrl,
        }, {
            onError(error, variables, context) {
                console.log({
                    error
                })
            },
            onSuccess(variables, context) {
                alert(`Se agrego el colaborador: "${collaboratorRequest.name}"`)
                deleteCollaboratorRequest(collaboratorRequest.id);
            },
            }
        )
    };

    const deleteCollaboratorRequest = (id: string) => {
        deleteCollaboratorRequestMutation.mutate({
            id: id,
        }, {
            onError(error, variables, context) {
                console.log({
                    error
                })
            },
            onSuccess(data, variables, context) {
                router.refresh();
                alert(`Se eliminó solicitud: "${id}"`)
                console.log(`Solicitud de colaborador con ID: ${id} eliminada.`);
            },
        })
    };

    return(
        <main className=" relative min-h-screen items-center justify-center bg-gradient-to-b from-blue-950 to-slate-900 text-white">
        {
        
                <div className="items-center justify-center">
                    <div className="p-6 px-0">
                        <div className="invisible mt-20">
                            .
                        </div>
                        <table className="w-full min-w-max table-auto text-left">
                            <thead>
                            <tr>
                                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                <p className="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">Nombre</p>
                                </th>
                                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                <p className="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">Semestre</p>
                                </th>
                                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                <p className="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">Carrera</p>
                                </th>
                                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                <p className="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">E-Mail</p>
                                </th>
                                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                <p className="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">Agregar</p>
                                </th>
                                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                <p className="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70"></p>
                                </th>
                            </tr>
                            </thead>
                    {data?.map(collaboratorRequest => {
                        return(
                            <tbody  key={collaboratorRequest.id}>
                                <tr>
                                <td className="p-4 border-b border-blue-gray-50">
                                <div className="flex items-center gap-3">
                                    <img src={collaboratorRequest.photoUrl} className="inline-block relative object-center !rounded-full w-12 h-12 object-cover robject-contain p-1"/>
                                    <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">{collaboratorRequest.name}</p>
                                </div>
                                </td>
                                <td className="p-4 border-b border-blue-gray-50">
                                <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">{collaboratorRequest.semester}</p>
                                </td>
                                <td className="p-4 border-b border-blue-gray-50">
                                <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">{collaboratorRequest.career}</p>
                                </td>
                                <td className="p-4 border-b border-blue-gray-50">
                                <div className="w-max">
                                    <div className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                                    <span className="">{collaboratorRequest.userEmail}</span>
                                    </div>
                                </div>
                                </td>
                                <td className="p-4 border-b border-blue-gray-50">
                                <div className="w-max flex">
                                    <div className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                                        <button onClick={() => addCollaborator(collaboratorRequest)} className="btn-class bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                            Agregar
                                        </button>
                                    </div>
                                    <div className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal ml-2">
                                        <button onClick={() => deleteCollaboratorRequest(collaboratorRequest.id)} className="btn-class bg-red-900 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                            Quitar
                                        </button>
                                    </div>
                                </div>
                                </td>
                                <td className="p-4 border-b border-blue-gray-50">
                                </td>
                            </tr>
                            </tbody>);
                        })}
                        </table> 
                    </div>
                </div>
        }
        </main>
    );
}