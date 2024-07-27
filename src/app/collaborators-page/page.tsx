'use client';

import CollaboratorsForm from "~/app/_components/collaborators-form";
import { useCollaborators } from "~/app/_components/Hooks/useCollaborator";

export default function Collaborators() {

    const {data,error,isLoading} = useCollaborators();

    if(error){
        console.log(error)
    }

    if(isLoading){
        return <p className='h-screen w-full bg-gradient-to-t from-[#500889] to-[#440674] text-white flex items-center justify-center typo-calendario text-xl'>
        <img src='Img/Ellipse.png' className='size-40 animate-spin'/>
        </p>
    }

    return(
        <main className=" relative min-h-screen items-center justify-center bg-gradient-to-b from-blue-950 to-slate-900  w-[102vw] md:w-[100%] overflow-x-hidden">
            <section className="min-h-screen items-center justify-center">
                <div className="md:grid md:grid-cols-7 md:grid-rows-5 font-mono mt-28 p-2 ">
                    <div className="flex justify-center gap-3 mb-5 md:mb-0 md:row-start-2 md:col-start-4 md:col-span-2 md:flex-col">
                        <h1 className="text-sky-600 row-start-2 col-start-4 col-span-2 text-4xl md:text-6xl font-bold">
                            Nombre
                        </h1>
                        <h1 className="text-white row-start-5 col-start-4 col-span-2 text-4xl md:text-6xl font-bold">
                            Apellido
                        </h1>
                    </div>
                    <div className="flex flex-col items-center justify-center col-start-2 col-span-2 row-start-2 row-span-3">
                        <img
                        src="images/temp/circle-temp.png"
                        className="size-80 md:size-60 mb-5 md:mb-0"
                        />
                    </div>
                    <div className="text-white row-start-3 col-start-4 col-span-3 py-5 mx-7 md:mx-0 text-center md:text-left">
                        !Felicidades ____ por ser el colaborador del mes! Se reconoce tu trabajo
                        en los proyectos y eventos para fomentar la pasión por la programación en nuestra comunidad. 
                    </div>
                    <div className="text-white flex justify-center md:justify-start md:row-start-4 md:col-start-4 col-span-3 font-bold text-3xl py-6">
                        Carrera
                    </div>
                    <div className="text-white flex justify-center md:justify-start md:row-start-5 md:col-start-4 col-span-3 font-bold text-3xl">
                        Semestre
                    </div>
                </div>
            </section>
            <section className="min-h-screen text-center">
                <div className="md:grid grid-cols-7 grid-rows-12 font-mono space-y-5 px-4 md:px-36 md:py-10 " style={{ gridTemplateRows: '50px auto' } }>
                    <h1 className="text-white md:row-start-1 md:col-start-1 md:col-span-5 text-3xl md:text-4xl font-bold border-x-blue-700 border-l-8 border-spacing-12">
                        <span className="invisible">
                            ..
                        </span>
                        Conoce a nuestros colaboradores
                    </h1>
                    <span className="row-start-1 col-start-6 col-span-2"/>
                </div>
                    <div className="w-11/12 md:w-10/12 flex justify-center mx-auto">
                        <div className='flex flex-row w-full h-full justify-evenly flex-wrap'>
                            {
                                data?.map(collaborator =>{
                                    return(
                                        <div className="flex flex-col items-center justify-center p-2 md:p-4 hover:bg-blue-900 rounded-full w-1/2 md:w-52 min-h-[20rem]" key={collaborator.id}>
                                            <h2 className="text-sky-500 font-bold">
                                                {collaborator.name}
                                            </h2>
                                            <img src={collaborator.photoUrl} className="w-full h-1/2 object-cover rounded-full"/>
                                            <h3 className="text-white">
                                                <p>{collaborator.career}</p>
                                                <p>{collaborator.semester}</p>
                                            </h3>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                <CollaboratorsForm />
                <span className="invisible">
                    <p>.</p>
                    <p>.</p>
                </span>
            </section>
        </main>
    );
}