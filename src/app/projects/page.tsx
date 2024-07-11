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
            <span className="">Proyectos</span>
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
      <section className="min-h-fit flex flex-col items-center justify-center">
        <div className="grid grid-rows-2 grid-cols-4 items-center text-center text-2xl font-bold text-black">
          <div className="row-start-1 col-start-1">
            <span className="invisible">
              *****Clases algoritmos*****
            </span>
          </div>
          <div className="row-start-1 col-start-1 col-span-1 p-5">
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
          <div className="row-start-1 col-start-2 col-span-1 p-5">
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
          <div className="row-start-1 col-start-3 col-span-1 p-5">
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
          <div className="row-start-1 col-start-4 col-span-1 p-5">
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
          <div className="mt-4 text-center text-lg text-white">
            <p>ICPC</p>
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

    </main>
  );
}

export default Projects;
