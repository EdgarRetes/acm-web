"use client";

import Link from "next/link";
import React, { useState } from 'react';
import { Carrusel_ICPC } from "~/app/_components/carousel_icpc";
import { Carrusel_alg } from "~/app/_components/carousel_alg";

const Projects = () => {

  const [showICPC, setShowICPC] = useState(true);
  const [showClasesAlgoritmos, setShowClasesAlgoritmos] = useState(false);
  const [showCommunityHub, setShowCommunityHub] = useState(false);
  const [showProyecto4, setShowProyecto4] = useState(false);

  const icpc = () => {
    setShowICPC(true);
    setShowClasesAlgoritmos(false);
    setShowCommunityHub(false);
    setShowProyecto4(false);
  }
  const clasesAlgoritmos = () => {
    setShowICPC(false);
    setShowClasesAlgoritmos(true);
    setShowCommunityHub(false);
    setShowProyecto4(false);
  }
  const communityHub = () => {
    setShowICPC(false);
    setShowClasesAlgoritmos(false);
    setShowCommunityHub(true);
    setShowProyecto4(false);
  }
  const proyecto4 = () => {
    setShowICPC(false);
    setShowClasesAlgoritmos(false);
    setShowCommunityHub(false);
    setShowProyecto4(true);
  }

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white"> {/*  from-[#020F46] to-[#0E152A] */}

      {/* Space for navbar */}
      <section className="h-16 invisible"></section>

      {/* Title and description */}
      <section className="min-h-fit flex flex-col items-center justify-center">
        <div className="grid grid-rows-7 grid-cols-24 items-center text-center text-white">
          <p className="sm:text-[6.8rem] tracking-wide font-light col-start-3 col-span-20 row-start-2 row-span-3">
            Proyectos
          </p>
          <p className="row-start-5 row-span-3 col-start-3 col-span-20 text-justify text-lg font-light">
          En esta sección encontrarás las iniciativas en las que estamos trabajando actualmente.
          Te invitamos a unirte y participar en nuestros proyectos. No necesitas experiencia previa
          para contribuir, te podemos recomendar distintos recursos para que aprendas lo necesario.
          No dudes en contactarnos si tienes alguna pregunta.
          </p>
        </div>
      </section>

      {/* Projects buttons */}
      <section className="min-h-fit flex flex-col items-center justify-center">
        <div className="grid grid-rows-1 grid-cols-5 items-center text-center text-xl font-bold text-white">
          <div className="row-start-1 col-start-1">
            <span className="invisible">
              ************************************************************
            </span>
          </div>
          <div className="row-start-1 col-start-2 col-span-1 p-5">
            {showICPC && (
              <button className="bg-indigo-800 h-fit min-w-full rounded-full">
                ICPC
              </button>
            )}
            {!showICPC && (
              <button className="bg-indigo-600 h-fit min-w-full rounded-full hover:bg-indigo-800" onClick={icpc}>
                ICPC
              </button>
            )}
          </div>
          <div className="row-start-1 col-start-3 col-span-1 p-5">
            {showClasesAlgoritmos && (
              <button className="bg-indigo-800 h-fit min-w-full rounded-full">
                Clases algoritmos
              </button>
            )}
            {!showClasesAlgoritmos && (
              <button className="bg-indigo-600 h-fit min-w-full rounded-full hover:bg-indigo-800" onClick={clasesAlgoritmos}>
                Clases algoritmos
              </button>
            )}
          </div>
          <div className="row-start-1 col-start-4 col-span-1 p-5">
            {showCommunityHub && (
              <button className="bg-indigo-800 h-fit min-w-full rounded-full">
                Community Hub
              </button>
            )}
            {!showCommunityHub && (
              <button className="bg-indigo-600 h-fit min-w-full rounded-full hover:bg-indigo-800" onClick={communityHub}>
                Community Hub
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="min-h-fit flex flex-col items-center justify-center">
        {/* Project: ICPC */}
        {showICPC && (
          <div className="grid grid-rows-28 grid-cols-24 items-center text-center text-lg text-white font-light">
            <div className="row-start-2 row-span-8 col-start-3 col-span-7 w-10/12 mx-auto">
              <img className="mx-auto" src="images/logos/ICPC_logo.png" alt="ICPC Logo"></img>
            </div>
            <div className="row-start-2 col-start-10 col-span-13">
              <p className="text-indigo-600 text-3xl align-text-top font-bold">
                ¿QUÉ ES?
              </p>
            </div>
            <div className="row-start-4 row-span-7 col-start-10 col-span-13 text-justify">
              <p>
                El <Link className="underline text-indigo-400 hover:bg-indigo-900" href="https://icpc.global/">
                Concurso Internacional de Programación Universitaria, ICPC</Link> por sus siglas en inglés,
                es un concurso de programación algorítmica para estudiantes universitarios.
                Equipos de tres, que representan a su universidad, trabajan para resolver los problemas
                del mundo real, fomentando la colaboración, la creatividad, la innovación y la capacidad
                de desempeñarse bajo presión. A través del entrenamiento y la competencia, los equipos
                se desafían entre sí para elevar el nivel de lo posible. En pocas palabras, es el
                concurso de programación más antiguo, más grande y más prestigioso del mundo.
              </p>
              <br></br>
              <p>
                En México, el proceso del ICPC está compuesto por 4 fases.
                Se inicia con el <span className="font-semibold text-indigo-400">#GranPremioMX</span>,
                que se utiliza para seleccionar a los equipos que participarán en la eliminatoria regional
                <span className="font-semibold text-indigo-400"> #ICPCMX</span>.
                De esta eliminatoria sigue el campeonato regional
                <span className="font-semibold text-indigo-400"> #LATAMRegionalChampionship</span>, y
                los ganadores de esta última pasan a la final mundial
                <span className="font-semibold text-indigo-400"> #ICPCWF</span>.
              </p>
            </div>
            <div className="row-start-12 row-span-2 col-start-3 col-span-11">
              <p className="text-indigo-600 text-3xl font-bold">
                NUESTRA CONTRIBUCIÓN
              </p>
            </div>
            <div className="row-start-14 row-span-6 col-start-14 col-span-9 w-5/6 mx-auto">
              <img className="mx-auto object-cover" src="images/projects-icpc/primera-fecha.PNG" alt="ICPC Primera fecha"></img>
            </div>
            <div className="row-start-14 row-span-6 col-start-3 col-span-11 text-justify">
              <p>
                Nuestro objetivo es incentivar a más personas a participar en el ICPC, preparándolos en los diferentes
                temas de programación competitiva para que tengan una participación destacada en las distintas fases,
                así como brindarles instalaciones apropiadas y un ambiente tranquilo a la hora de realizar los exámenes.
              </p>
              <br></br>
              <p>
                Queremos formar una comunidad entusiasmada en el uso de la programación para la resolución de
                problemas matemáticos y computacionales.
              </p>
            </div>
            <div className="row-start-22 row-span-2 col-start-14 col-span-9">
              <p className="text-indigo-600 text-3xl font-bold">
                RESULTADOS
              </p>
            </div>
            <div className="row-start-24 row-span-3 col-start-14 col-span-9">
              <p className="text-justify">
                En el semestre Enero-Junio 2024 se restableció el campus como sede para la primera fase
                del ICPC, y se inscribieron varios equipos para inciar con las primeras dos fechas del
                <span className="font-semibold"> #GranPremioMX2024</span>.
              </p>
            </div>
            <div className="row-start-22 row-span-7 col-start-3 col-span-10 flex justify-center items-center">
              <Carrusel_ICPC/>
            </div>
          </div>
        )}
        {/* Project: Clases de Algoritmos */}
        {showClasesAlgoritmos && (
          <div className="grid grid-rows-13 grid-cols-24 items-center text-center text-lg text-white font-light">
            <div className="row-start-2 col-start-3 col-span-20">
              <p className="text-indigo-600 text-3xl align-text-top font-bold">
                NUESTRAS CLASES DE ALGORITMOS
              </p>
            </div>
            <div className="row-start-4 row-span-10 col-start-14 col-span-8 text-justify">
              <p>
                En el mundo de la programación competitiva es necesario conocer diversos algoritmos
                y estructuras de datos para resolver los problemas que se plantean en los concursos.
                Es por ello que, a través de clases durante semana Tec, hemos empezado a introducir a los
                colaboradores en los temas de programación competitiva. Las presentaciones usadas
                en las clases anteriores se pueden encontrar en la página
                de <Link className="underline text-indigo-400 hover:bg-indigo-900"
                href={"/ResourcesACM"}>recursos</Link>.
              </p>
              <br></br>
              <p>
                Conocer estos temas brinda grandes ventajas en la agilidad de resolución de problemas,
                en la creatividad y en la innovación. Asimismo, las entrevistas laborales en el sector de
                ciencias de la computación suelen estar basadas en todos estos temas. En las clases podrás
                resolver dudas y poner en práctica todo lo aprendido; además, podrás conocer a personas
                que te cuenten sus experiencias y te aconsejen para que puedas mejorar en un futuro. 
                ¡Aprovecha al máximo estos conocimiento y recuerda que estamos para apoyarnos!
              </p>
            </div>
            <div className="row-start-4 row-span-10 col-start-3 col-span-10 flex justify-center items-center">
              <Carrusel_alg/>
            </div>
          </div>
        )}
        {/* Project: Community Hub */}
        {showCommunityHub && (
          <div className="grid grid-rows-37 grid-cols-24 items-center text-center text-lg text-white font-light">
            <div className="row-start-2 col-start-3 col-span-20">
              <p className="text-indigo-600 text-3xl align-text-top font-bold">
                ¿QUÉ ES?
              </p>
            </div>
            <div className="row-start-4 row-span-3 col-start-3 col-span-20">
              <p className="text-justify">
                Community Hub es un proyecto de ACM y sus colaboradores para nuestra comunidad.
                A través de este proyecto, brindaremos servicios de software gratuitos a organizaciones
                de servicio comunitario que lo requieran.
              </p>
            </div>
            <div className="row-start-8 col-start-3 col-span-20">
              <p className="text-indigo-600 text-3xl font-bold">
                FORMATO DE TRABAJO
              </p>
            </div>
            <div className="row-start-10 row-span-5 col-start-3 col-span-4">
              <img className="mx-auto max-h-32" src="images/projects-community-hub/contacto.png" alt="contacto"></img>
            </div>
            <div className="row-start-10 row-span-5 col-start-8 col-span-4">
              <img className="mx-auto max-h-32" src="images/projects-community-hub/plan.png" alt="plan"></img>
            </div>
            <div className="row-start-10 row-span-5 col-start-13 col-span-4">
              <img className="mx-auto max-h-32" src="images/projects-community-hub/work1.png" alt="work"></img>
            </div>
            <div className="row-start-10 row-span-5 col-start-18 col-span-4">
              <img className="mx-auto max-h-32" src="images/projects-community-hub/delivery.png" alt="website"></img>
            </div>
            <div className="row-start-15 row-span-5 col-start-3 col-span-4">
              <p className="font-bold">
                Contacto con la organización
              </p>
              <p>
                Se determinan las necesidades y requerimientos de la organización.
              </p>
            </div>
            <div className="row-start-15 row-span-5 col-start-8 col-span-4">
              <p className="font-bold">
                Planeación
              </p>
              <p>
                Se asignan roles y actividades dentro del grupo.
              </p>
            </div>
            <div className="row-start-15 row-span-5 col-start-13 col-span-4">
              <p className="font-bold">
                Realización del proyecto
              </p>
              <p>
                Durante el semestre se trabaja con el plan realizado
                y se muestran avances a la organización para seguimiento
                y posibles modificaciones.
              </p>
            </div>
            <div className="row-start-15 row-span-5 col-start-18 col-span-4">
              <p className="font-bold">
                Entrega del proyecto
              </p>
              <p>
                Entrega del producto final a la organización.
              </p>
            </div>
            <div className="row-start-22 col-start-3 col-span-20">
              <p className="text-indigo-600 text-3xl font-bold">
                QUERÉTARO SÍ SONRÍE
              </p>
            </div>
            <div className="row-start-24 row-span-4 col-start-3 col-span-20">
              <p className="text-justify">
                Conoce la organización con la que estaremos trabajando este 
                semestre: <Link className="underline text-indigo-400 hover:bg-indigo-900"
                href="https://www.instagram.com/qrosisonrie/">Querétaro sí sonríe</Link>.
                Esta fundación atiende de manera multidisciplinaria el tratamiento
                de fisura labio palatina en niños.
              </p>
              <br></br>
              <p className="text-justify">
                Ayudemos a este grupo de médicos a seguir ofreciendo más tratamientos y que
                puedan difundir su causa de una manera más puntual. Contáctanos para apoyar en
                el desarrollo de este proyecto.
              </p>
            </div>
            <div className="row-start-29 row-span-9 col-start-3 col-span-10">
              <img className="mx-auto max-h-72" src="images/projects-community-hub/equipo-qrosisonrie.jpg" alt="médicos"></img>
            </div>
            <div className="row-start-29 row-span-9 col-start-13 col-span-10">
              <img className="mx-auto max-h-72" src="images/projects-community-hub/qrosisonrie.jpg" alt="Querétaro sí sonríe"></img>
            </div>
          </div>
        )}
        {/* Project: Proyecto 4 */}
        {showProyecto4 && (
          <div className="mt-4 text-center text-lg text-white">
            <p>Proyecto 4</p>
          </div>
        )}
      </section>
      
      <section className="invisible">
        <p>...</p>
        <p>...</p>
        <p>...</p>
      </section>
    </main>
  );
}

export default Projects;
