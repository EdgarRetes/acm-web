import Link from "next/link";

import { CreatePost } from "~/app/_components/create-post";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";

export default async function Collaborators() {
    return(
        <main className=" relative min-h-screen items-center justify-center bg-gradient-to-b from-blue-950 to-slate-900">
            <section className="min-h-screen items-center justify-center">
                <div className="grid grid-cols-7 grid-rows-8 font-mono">
                    <h1 className="text-sky-600 row-start-4 col-start-4 col-span-2 text-6xl font-bold">
                        Nombre
                    </h1>
                    <h1 className="text-white row-start-5 col-start-4 col-span-2 text-6xl font-bold">
                        Apellido
                    </h1>
                    <div className="text-white row-start-6 col-start-4 col-span-3 py-1">
                        !Felicidades ____ por ser el colaborador del mes! Se reconoce tu trabajo
                        en los proyectos y eventos para fomentar la pasión por la programación en nuestra comunidad. 
                    </div>
                    <div className="text-white row-start-7 col-start-4 col-span-3 font-bold text-3xl py-6">
                        Carrera
                    </div>
                    <div className="text-white row-start-8 col-start-4 col-span-3 font-bold text-3xl">
                        Semestre
                    </div>
                    <div className="flex flex-col items-center justify-center col-start-2 col-span-2 row-start-4 row-span-3">
                        <img
                        src="images/temp/circle-temp.png"
                        className="size-60"
                        />
                    </div>
                </div>
            </section>
            <section className="min-h-screen items-center justify-center text-center">
                <div className="grid grid-cols-10 grid-rows-12 font-mono space-y-5" style={{ gridTemplateRows: '50px auto' }}>
                    <h1 className="text-white row-start-1 col-start-2 col-span-5 text-4xl font-bold border-x-blue-700 border-l-8 border-spacing-12">
                    <span className="invisible">
                        ..
                    </span>
                        Conoce a nuestros colaboradores
                    </h1>

                    {/* Primera fila */}
                    <div className="flex flex-col items-center justify-center row-start-2 col-start-2 p-4 hover:bg-blue-900 rounded-full">
                        <h2 className="text-sky-500 font-bold">
                            Nombre
                        </h2>
                        <img src="images/temp/circle-temp.png"/>
                        <h3 className="text-white">
                            <p>Carrera</p>
                            <p>Semestre</p>
                        </h3>
                    </div>
                    <div className="flex flex-col items-center justify-center row-start-2 col-start-3 p-4 hover:bg-blue-900 rounded-full">
                        <h2 className="text-sky-500 font-bold">
                            Nombre
                        </h2>
                        <img src="images/temp/circle-temp.png"/>
                        <h3 className="text-white">
                            <p>Carrera</p>
                            <p>Semestre</p>
                        </h3>
                    </div>
                    <div className="flex flex-col items-center justify-center row-start-2 col-start-4 p-4 hover:bg-blue-900 rounded-full">
                        <h2 className="text-sky-500 font-bold">
                            Nombre
                        </h2>
                        <img src="images/temp/circle-temp.png"/>
                        <h3 className="text-white">
                            <p>Carrera</p>
                            <p>Semestre</p>
                        </h3>
                    </div>
                    <div className="flex flex-col items-center justify-center row-start-2 col-start-5 p-4 hover:bg-blue-900 rounded-full">
                        <h2 className="text-sky-500 font-bold">
                            Nombre
                        </h2>
                        <img src="images/temp/circle-temp.png"/>
                        <h3 className="text-white">
                            <p>Carrera</p>
                            <p>Semestre</p>
                        </h3>
                    </div>
                    <div className="flex flex-col items-center justify-center row-start-2 col-start-6 p-4 hover:bg-blue-900 rounded-full">
                        <h2 className="text-sky-500 font-bold">
                            Nombre
                        </h2>
                        <img src="images/temp/circle-temp.png"/>
                        <h3 className="text-white">
                            <p>Carrera</p>
                            <p>Semestre</p>
                        </h3>
                    </div>
                    <div className="flex flex-col items-center justify-center row-start-2 col-start-7 p-4 hover:bg-blue-900 rounded-full">
                        <h2 className="text-sky-500 font-bold">
                            Nombre
                        </h2>
                        <img src="images/temp/circle-temp.png"/>
                        <h3 className="text-white">
                            <p>Carrera</p>
                            <p>Semestre</p>
                        </h3>
                    </div>
                    <div className="flex flex-col items-center justify-center row-start-2 col-start-8 p-4 hover:bg-blue-900 rounded-full">
                        <h2 className="text-sky-500 font-bold">
                            Nombre
                        </h2>
                        <img src="images/temp/circle-temp.png"/>
                        <h3 className="text-white">
                            <p>Carrera</p>
                            <p>Semestre</p>
                        </h3>
                    </div>
                    <div className="flex flex-col items-center justify-center row-start-2 col-start-9 p-4 hover:bg-blue-900 rounded-full">
                        <h2 className="text-sky-500 font-bold">
                            Nombre
                        </h2>
                        <img src="images/temp/circle-temp.png"/>
                        <h3 className="text-white">
                            <p>Carrera</p>
                            <p>Semestre</p>
                        </h3>
                    </div>

                    {/* Segunda fila */}
                    <div className="flex flex-col items-center justify-center row-start-3 col-start-2 p-4 hover:bg-blue-900 rounded-full">
                        <h2 className="text-sky-500 font-bold">
                            Nombre
                        </h2>
                        <img src="images/temp/circle-temp.png"/>
                        <h3 className="text-white">
                            <p>Carrera</p>
                            <p>Semestre</p>
                        </h3>
                    </div>

                    <div className="flex flex-col items-center justify-center row-start-3 col-start-3 p-4 hover:bg-blue-900 rounded-full">
                        <h2 className="text-sky-500 font-bold">
                            Nombre
                        </h2>
                        <img src="images/temp/circle-temp.png"/>
                        <h3 className="text-white">
                            <p>Carrera</p>
                            <p>Semestre</p>
                        </h3>
                    </div>
                    <div className="flex flex-col items-center justify-center row-start-3 col-start-4 p-4 hover:bg-blue-900 rounded-full">
                        <h2 className="text-sky-500 font-bold">
                            Nombre
                        </h2>
                        <img src="images/temp/circle-temp.png"/>
                        <h3 className="text-white">
                            <p>Carrera</p>
                            <p>Semestre</p>
                        </h3>
                    </div>
                    <div className="flex flex-col items-center justify-center row-start-3 col-start-5 p-4 hover:bg-blue-900 rounded-full">
                        <h2 className="text-sky-500 font-bold">
                            Nombre
                        </h2>
                        <img src="images/temp/circle-temp.png"/>
                        <h3 className="text-white">
                            <p>Carrera</p>
                            <p>Semestre</p>
                        </h3>
                    </div>
                    <div className="flex flex-col items-center justify-center row-start-3 col-start-6 p-4 hover:bg-blue-900 rounded-full">
                        <h2 className="text-sky-500 font-bold">
                            Nombre
                        </h2>
                        <img src="images/temp/circle-temp.png"/>
                        <h3 className="text-white">
                            <p>Carrera</p>
                            <p>Semestre</p>
                        </h3>
                    </div>
                    <div className="flex flex-col items-center justify-center row-start-3 col-start-7 p-4 hover:bg-blue-900 rounded-full">
                        <h2 className="text-sky-500 font-bold">
                            Nombre
                        </h2>
                        <img src="images/temp/circle-temp.png"/>
                        <h3 className="text-white">
                            <p>Carrera</p>
                            <p>Semestre</p>
                        </h3>
                    </div>
                    <div className="flex flex-col items-center justify-center row-start-3 col-start-8 p-4 hover:bg-blue-900 rounded-full">
                        <h2 className="text-sky-500 font-bold">
                            Nombre
                        </h2>
                        <img src="images/temp/circle-temp.png"/>
                        <h3 className="text-white">
                            <p>Carrera</p>
                            <p>Semestre</p>
                        </h3>
                    </div>
                    <div className="flex flex-col items-center justify-center row-start-3 col-start-9 p-4 hover:bg-blue-900 rounded-full">
                        <h2 className="text-sky-500 font-bold">
                            Nombre
                        </h2>
                        <img src="images/temp/circle-temp.png"/>
                        <h3 className="text-white">
                            <p>Carrera</p>
                            <p>Semestre</p>
                        </h3>
                    </div>
                </div>
            </section>
        </main>
    );
}