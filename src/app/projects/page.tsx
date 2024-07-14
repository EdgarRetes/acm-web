"use client";

import Link from "next/link";
import React, { useState } from 'react';

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

      {/* Title and description */}
      <section className="min-h-fit flex flex-col items-center justify-center">
        <div className="grid grid-rows-6 grid-cols-8 items-center text-center text-white">
          <h1 className="text-xl tracking-wide font-light sm:text-[7rem] col-start-2 col-span-6 row-start-3">
            <p>Proyectos</p>
          </h1>
          <p className="row-start-5 col-start-2 col-span-6 text-justify text-lg font-light">
            Lorem ipsum dolor sit amet consectetur. Leo magna nisi aliquam in lorem enim tortor mattis.
            Dictum auctor quisque mi ac aliquam. Aliquet arcu nec ac mi libero scelerisque pellentesque odio.
            Commodo pharetra ac vitae purus. Enim rutrum metus morbi a diam at interdum aliquet.
            Ultrices cursus id duis ultricies dui non.
          </p>
        </div>
      </section>

      {/* Projects buttons */}
      <section className="min-h-fit min-w-screen flex flex-col items-center justify-center">
        <div className="grid grid-rows-1 grid-cols-6 items-center text-center text-xl font-bold text-black">
          <div className="row-start-1 col-start-1">
            <span className="invisible">
              *************************************
            </span>
          </div>
          <div className="row-start-1 col-start-2 col-span-1 p-5">
            {showICPC && (
              <button className="bg-[#dfdfdf] h-10 min-w-full rounded-full">
                ICPC
              </button>
            )}
            {!showICPC && (
              <button className="bg-[#64FFF6] h-10 min-w-full rounded-full hover:bg-[#dfdfdf]" onClick={icpc}>
                ICPC
              </button>
            )}
          </div>
          <div className="row-start-1 col-start-3 col-span-1 p-5">
            {showClasesAlgoritmos && (
              <button className="bg-[#dfdfdf] h-10 min-w-full rounded-full">
                Clases algoritmos
              </button>
            )}
            {!showClasesAlgoritmos && (
              <button className="bg-[#64FFF6] h-10 min-w-full rounded-full hover:bg-[#dfdfdf]" onClick={clasesAlgoritmos}>
                Clases algoritmos
              </button>
            )}
          </div>
          <div className="row-start-1 col-start-4 col-span-1 p-5">
            {showCommunityHub && (
              <button className="bg-[#dfdfdf] h-10 min-w-full rounded-full">
                Community Hub
              </button>
            )}
            {!showCommunityHub && (
              <button className="bg-[#64FFF6] h-10 min-w-full rounded-full hover:bg-[#dfdfdf]" onClick={communityHub}>
                Community Hub
              </button>
            )}
          </div>
          <div className="row-start-1 col-start-5 col-span-1 p-5">
            {showProyecto4 && (
              <button className="bg-[#dfdfdf] h-10 min-w-full rounded-full">
                Proyecto 4
              </button>
            )}
            {/*
            {!showProyecto4 && (
              <button className="bg-[#64FFF6] h-10 min-w-full rounded-full hover:bg-[#dfdfdf]" onClick={proyecto4}>
                Proyecto 4
              </button>
            )}
              */}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="min-h-fit flex flex-col items-center justify-center">
        {/* Project: ICPC */}
        {showICPC && (
          <div className="grid grid-rows-28 grid-cols-24 items-center text-center text-base text-white font-light">
            <div className="row-start-2 row-span-6 col-start-3 col-span-7 w-7/12 mx-auto">
              <img className="mx-auto" src="images/logos/ICPC_logo.png" alt="ICPC Logo"></img>
            </div>
            <div className="row-start-2 col-start-10 col-span-13">
              <p className="text-[#96FFF9] text-3xl text-left align-text-top font-bold">
                ¿QUÉ ES?
              </p>
            </div>
            <div className="row-start-3 row-span-5 col-start-10 col-span-13 text-justify">
              <p>
                Lorem ipsum dolor sit amet consectetur. Iaculis enim lorem pellentesque malesuada scelerisque.
                Maecenas vel mi scelerisque libero non ipsum justo urna. Dignissim sit pretium aliquam lobortis lacus.
                A ullamcorper id elit vitae sit augue.
              </p>
              <br></br>
              <p>
                Eu lacus quis odio augue viverra cras donec lacus sed. Convallis elementum risus augue etiam et.
                Ut morbi sit id vitae et mi lacus neque. Nibh adipiscing viverra purus non aliquam.
                Porta pretium scelerisque in lacus dui mauris vulputate ut. Nisl in porta vitae eget faucibus arcu blandit quam.
              </p>
            </div>
            <div className="row-start-9 col-start-1 col-span-24">
              <p className="text-[#96FFF9] text-3xl font-bold">
                ¿QUÉ HACEMOS COMO ACM?
              </p>
            </div>
            <div className="row-start-11 row-span-6 col-start-15 col-span-8 w-5/6 mx-auto">
              <img className="mx-auto object-cover" src="images/projects-icpc/primera-fecha.png" alt="ICPC Primera fecha"></img>
            </div>
            <div className="row-start-11 row-span-6 col-start-3 col-span-11 text-justify">
              <p>
                Lorem ipsum dolor sit amet consectetur. Iaculis enim lorem pellentesque malesuada scelerisque.
                Maecenas vel mi scelerisque libero non ipsum justo urna. Dignissim sit pretium aliquam lobortis lacus.
                A ullamcorper id elit vitae sit augue. 
              </p>
              <br></br>
              <p>
                Eu lacus quis odio augue viverra cras donec lacus sed. Convallis elementum risus augue etiam et.
                Ut morbi sit id vitae et mi lacus neque. Nibh adipiscing viverra purus non aliquam.
                Porta pretium scelerisque in lacus dui mauris vulputate ut. Nisl in porta vitae eget faucibus arcu blandit quam. 
              </p>
            </div>
            <div className="row-start-17 row-span-4 col-start-3 col-span-20">
              <p className="text-[#96FFF9] text-xl font-bold text-left">
                OBJETIVOS
              </p>
              <br></br>
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur. Iaculis enim lorem pellentesque malesuada scelerisque.
                Maecenas vel mi scelerisque libero non ipsum justo urna. Dignissim sit pretium aliquam lobortis lacus.
                A ullamcorper id elit vitae sit augue.
              </p>
            </div>
            <div className="row-start-21 row-span-4 col-start-3 col-span-20">
              <p className="text-[#96FFF9] text-xl font-bold text-left">
                RETOS
              </p>
              <br></br>
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur. Iaculis enim lorem pellentesque malesuada scelerisque.
                Maecenas vel mi scelerisque libero non ipsum justo urna. Dignissim sit pretium aliquam lobortis lacus.
                A ullamcorper id elit vitae sit augue.
              </p>
            </div>
            <div className="row-start-25 row-span-4 col-start-3 col-span-20">
              <p className="text-[#96FFF9] text-xl font-bold text-left">
                LOGROS
              </p>
              <br></br>
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur. Iaculis enim lorem pellentesque malesuada scelerisque.
                Maecenas vel mi scelerisque libero non ipsum justo urna. Dignissim sit pretium aliquam lobortis lacus.
                A ullamcorper id elit vitae sit augue.
              </p>
            </div>
          </div>
        )}
        {/* Project: Clases de Algoritmos */}
        {showClasesAlgoritmos && (
          <div className="mt-4 text-center text-lg text-white">
            <p>Clases Algoritmos</p>
          </div>
        )}
        {/* Project: Community Hub */}
        {showCommunityHub && (
          <div className="mt-4 text-center text-lg text-white">
            <p>Community Hub</p>
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
