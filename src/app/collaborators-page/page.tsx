"use client";

import CollaboratorsForm from "~/app/_components/collaborators-form";
import { useCollaborators } from "~/app/_components/Hooks/useCollaborator";

export default function Collaborators() {
  const { data, error, isLoading } = useCollaborators();

  if (error) {
    console.log(error);
  }

  if (isLoading) {
    return (
      <p className="typo-calendario flex h-screen w-full items-center justify-center bg-gradient-to-t from-[#500889] to-[#440674] text-xl text-white">
        <img src="Img/Ellipse.png" className="size-40 animate-spin" />
      </p>
    );
  }

  return (
    <main className=" relative min-h-screen w-[102vw] items-center justify-center overflow-x-hidden bg-gradient-to-b  from-blue-950 to-slate-900 md:w-[100%]">
      <section className="min-h-screen items-center justify-center">
        <div className="mt-28 p-2 md:grid md:grid-cols-7 md:grid-rows-5 ">
          <div className="mb-5 flex justify-center gap-3 md:col-span-2 md:col-start-4 md:row-start-2 md:mb-0 md:flex-col">
            <h1 className="col-span-2 col-start-4 row-start-2 text-4xl font-bold text-sky-600 md:text-6xl">
              Nombre
            </h1>
            <h1 className="col-span-2 col-start-4 row-start-5 text-4xl font-bold text-white md:text-6xl">
              Apellido
            </h1>
          </div>
          <div className="col-span-2 col-start-2 row-span-3 row-start-2 flex flex-col items-center justify-center">
            <img
              src="images/temp/circle-temp.png"
              className="mb-5 size-80 md:mb-0 md:size-60"
            />
          </div>
          <div className="col-span-3 col-start-4 row-start-3 mx-7 py-5 text-center text-white md:mx-0 md:text-left">
            ¡Felicidades ____ por ser el colaborador del mes! Se reconoce tu
            trabajo en los proyectos y eventos para fomentar la pasión por la
            programación en nuestra comunidad.
          </div>
          <div className="col-span-3 flex justify-center py-6 text-3xl font-bold text-white md:col-start-4 md:row-start-4 md:justify-start">
            Carrera
          </div>
          <div className="col-span-3 flex justify-center text-3xl font-bold text-white md:col-start-4 md:row-start-5 md:justify-start">
            Semestre
          </div>
        </div>
      </section>
      <section className="min-h-screen text-center">
        <div
          className="grid-cols-7 grid-rows-12 space-y-5 px-4 md:grid md:px-36 md:py-10 "
          style={{ gridTemplateRows: "50px auto" }}
        >
          <h1 className="border-spacing-12 border-l-8 border-x-blue-700 text-3xl font-bold text-white md:col-span-5 md:col-start-1 md:row-start-1 md:text-4xl">
            <span className="invisible">..</span>
            Conoce a nuestros colaboradores
          </h1>
          <span className="col-span-2 col-start-6 row-start-1" />
        </div>
        <div className="mx-auto flex w-11/12 justify-center md:w-10/12">
          <div className="flex h-full w-full flex-row flex-wrap justify-evenly">
            {data?.map((collaborator) => {
              return (
                <div
                  className="flex min-h-[20rem] w-1/2 flex-col items-center justify-center rounded-full p-2 hover:bg-blue-900 md:w-52 md:p-4"
                  key={collaborator.id}
                >
                  <h2 className="font-bold text-sky-500">
                    {collaborator.name}
                  </h2>
                  <img
                    src={collaborator.photoUrl}
                    className="h-3/5 w-full rounded-full object-cover"
                  />
                  <h3 className="text-white">
                    <p>{collaborator.career}</p>
                    <p>{collaborator.semester}</p>
                  </h3>
                </div>
              );
            })}
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
