"use client";

import React, { useState } from 'react';

const Resources_ACM = () => {
    const [showGuia, setShowGuia] = useState(false);
    const [showTutoriales, setShowTutoriales] = useState(false);
    const [showPresentaciones, setShowPresentaciones] = useState(false);
    const [showRecomendaciones, setShowRecomendaciones] = useState(false);
    const [showRoadMap, setShowRoadMap] = useState(false);

    const guia = () => {
        setShowGuia(true);
        setShowTutoriales(false);
        setShowPresentaciones(false);
        setShowRecomendaciones(false);
        setShowRoadMap(false);
    }

    const tutoriales = () => {
        setShowGuia(false);
        setShowTutoriales(true);
        setShowPresentaciones(false);
        setShowRecomendaciones(false);
        setShowRoadMap(false);
    }

    const presentaciones = () => {
        setShowGuia(false);
        setShowTutoriales(false);
        setShowPresentaciones(true);
        setShowRecomendaciones(false);
        setShowRoadMap(false);
    }

    const recomendaciones = () => {
        setShowGuia(false);
        setShowTutoriales(false);
        setShowPresentaciones(false);
        setShowRecomendaciones(true);        
        setShowRoadMap(false);
    }


    return (
        <main className="flex min-h-screen flex-col bg-gradient-to-b from-[#500889] to-[#200039] p-8 font-serif text-base  w-full">
            {/* Title */}
            <div className="tracking-wide">
                <p className=" text-white font-semibold text-center mt-52 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                    RECURSOS
                </p>
            </div>
            <div className="max-w-6xl mx-auto overflow-hidden">
                <div className="p-8">
                    <div className="tracking-wide">
                        {/* Description */}
                        <h1 className="mt-6 text-white font-bold text-lg text-center sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl">
                            ¡Hola Comunidad!
                        </h1>
                        <p className="mt-4 text-white text-center text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl">
                            En nuestro grupo estudiantil estamos comprometidos en ayudarte a mejorar tus habilidades de programación. Por eso, hemos recopilado todos los enlaces y presentaciones que usamos durante nuestras "Semanas Tec". Estos recursos contienen información útil y práctica que beneficiará a toda la comunidad.
                        </p>
                        <p className="mt-9 text-white text-center text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl">
                            Para ver el contenido oprime cualquiera de los cuatro botones de abajo
                        </p>
                    </div>
                </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
                <button 
                    className={`bg-violet-700 ${!showGuia ? 'hover:bg-violet-400' : ''} text-center text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl rounded m-6 w-56 h-16 text-white`}
                    onClick={guia}
                >
                    GUÍA
                </button>
                <button 
                    className={`bg-violet-700 ${!showTutoriales ? 'hover:bg-violet-400' : ''} text-center text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl p-4 rounded m-6 w-56 h-16 text-white`}
                    onClick={tutoriales}
                >
                    TUTORIALES
                </button>
                <button 
                    className={`bg-violet-700 ${!showPresentaciones ? 'hover:bg-violet-400' : ''} text-center text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl p-4 rounded m-6 w-56 h-16 text-white`}
                    onClick={presentaciones}
                >
                    PRESENTACIONES
                </button>
                <button 
                    className={`bg-violet-700 ${!showRecomendaciones ? 'hover:bg-violet-400' : ''} text-center text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl p-4 rounded m-6 w-56 h-16 text-white`}
                    onClick={recomendaciones}
                >
                    RECOMENDACIONES
                </button>

            </div>

            {/* Resources ACM */}
            <section className="flex flex-wrap ">
                {/* GUIDES*/}
                {showGuia && (
                    <div className="flex flex-col m-8 items-center justify-center text-center">
                        <div className="w-full">
                            <div className="h-24">
                                <div style={{ borderLeft: '10px solid #D688DC', height: '100%' }} className="flex items-center ml-24 mt-10">
                                    <p className="text-white font-bold font-serif ml-6 text-lg text-center sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl"> GUÍAS ICPC </p>
                                </div>
                            </div>
                            {/* Define what each logo means */}
                            <div className="flex flex-wrap justify-center text-white font-serif ">
                                <div className="m-8 text-center">
                                    <img 
                                        src="images/icons/user-guide.png"
                                        className="w-32 h-auto "
                                        alt="user-guide"
                                    />
                                    <p className="m-4 text-center text-sm-2 sm:text-sm md:text-base lg:text-base xl:text-base"> LIBROS </p>
                                </div>               
                                <div className="m-8 text-center">
                                    <img 
                                        src="images/icons/e-learning.png"
                                        className="w-32 h-auto "
                                        alt="e-learning"
                                    />
                                    <p className="mt-4 text-center text-sm-2 sm:text-sm md:text-base lg:text-base xl:text-base"> CURSOS </p>
                                </div>                                
                                    <div className="m-8 text-center">
                                        <img 
                                            src="images/icons/practice.png"
                                            className="w-32 h-auto "
                                            alt="practice"
                                        />
                                        <p className="mt-4 w-32 text-center text-sm-2 sm:text-sm md:text-base lg:text-base xl:text-base"> PAGINAS PARA PRACTICAR </p>
                                    </div>
                                    <div className="m-8 text-center">
                                        <img 
                                            src="images/icons/problem_set.png"
                                            className="w-32 h-auto "
                                            alt="problem_set"
                                        />
                                        <p className="m-4 text-center text-sm-2 sm:text-sm md:text-base lg:text-base xl:text-base"> PROBLEMSETS </p>
                                    </div>
                            </div>
                            {/*Start of guide*/}
                            <div className="flex flex-wrap">
                                {/*First column*/}
                                <div className="w-full md:w-1/3">
                                    <div className="flex items-center mt-12">
                                        <a href="https://cses.fi/book/book.pdf" target="_blank" rel="noopener noreferrer" className="block text-white hover:underline w-full">
                                            <button className="bg-transparent hover:underline p-4 rounded-full flex items-center justify-center">
                                                <img
                                                            src="images/icons/user-guide.png"
                                                            className="w-32 h-auto "
                                                            alt="user-guide"
                                                        />                                    
                                                    <p className="text-white ml-6 text-center text-sm-2 sm:text-sm md:text-base lg:text-base xl:text-lg"> Competitive Programmer's Handbook </p>
                                            </button>
                                        </a>
                                    </div>
                                    <div className="flex items-center mt-12">
                                        <a href="https://omegaup.com/course/introduccion_a_cpp/" target="_blank" rel="noonpener noreferrer" className="block text-white hover:underline w-full">
                                            <button className="bg-transparent hover:underline p-4 rounded-full   flex items-center justify-center">
                                                <img src="images/icons/e-learning.png" className="w-32 h-auto " alt="e-learning"  />
                                                <p className="text-white ml-16 text-center text-sm-2 sm:text-sm md:text-base lg:text-base xl:text-lg"> Introducción a C++ </p>
                                            </button>
                                        </a>
                                    </div>
                                    <div className="flex items-center mt-12">
                                        <a href="https://codeforces.com/" target="_blank" rel="noonpener noreferrer" className="block text-white hover:underline w-full">
                                            <button className="bg-transparent hover:underline p-4 rounded-full flex  items-center justify-center">
                                                <img src="images/icons/practice.png" className="w-32 h-auto "  alt="practice"  />
                                                <p className="text-white ml-20 text-center text-sm-2 sm:text-sm md:text-base lg:text-base xl:text-lg"> Codeforces </p>
                                            </button>
                                        </a>
                                    </div>
                                </div>
                                {/* Second column*/}
                                <div className="w-full md:w-1/3">
                                   <div className="flex items-center mt-12">
                                        <a href="https://cses.fi/problemset/" target="_blank" rel="noopener noreferrer" className="block text-white hover:underline w-full text-center">
                                            <button className="bg-transparent hover:underline p-4 rounded-full flex items-center justify-center ">
                                                <img src="images/icons/problem_set.png" className="w-32 h-auto" alt="problem-set" />
                                                <p className="text-white ml-10 text-center text-sm-2 sm:text-sm md:text-base lg:text-base xl:text-lg ">CSES Problem Set</p>
                                            </button>
                                        </a>
                                    </div>
                                    <div className="flex items-center mt-12">
                                        <a href="https://earthshakira.github.io/a2oj-clientside/server/Ladders.html" target="_blank" rel="noopener noreferrer" className="block text-white hover:underline w-full text-center">
                                            <button className="bg-transparent hover:underline p-4 flex items-center justify-center ">
                                                <img src="images/icons/problem_set.png" className="w-32 h-auto" alt="problem-set" />
                                                <p className="text-white ml-14 text-center text-sm-2 sm:text-sm md:text-base lg:text-base xl:text-lg ">Practice Ladders </p>
                                            </button>
                                        </a>
                                    </div>
                                    <div className="flex items-center mt-12">
                                        <a href="https://drive.google.com/file/d/1F7LcdQzaUMJFbb5DVNBQEgNKQiTNnDVv/view" target="_blank" rel="noopener noreferrer" className="block text-white hover:underline w-full text-center">
                                            <button className="bg-transparent hover:underline p-4 flex items-center justify-center ">
                                                <img src="images/icons/user-guide.png" className="w-32 h-auto" alt="user-guide" />
                                                <p className="text-white ml-6 text-center text-sm-2 sm:text-sm md:text-base lg:text-base xl:text-lg">Data Structures and Algorithms in C++  </p>
                                            </button>
                                        </a>
                                    </div>
                                </div>
                                {/* Third column*/}
                                <div className=" w-full md:w-1/3">
                                    <div className="mt-10">
                                        <a href="https://usaco.guide/" target="_blank" rel="noopener noreferrer" className="block text-white hover:underline w-full text-center">
                                            <button className="bg-transparent p-4 rounded-full flex items-center justify-center">
                                                <img src="images/icons/e-learning.png" className="w-32 h-auto "  alt="e-learning"  />
                                                <p className=" text-center text-sm-2 sm:text-sm md:text-base lg:text-base xl:text-lg ml-24"> USACO Guide </p>
                                            </button>
                                        </a>
                                    </div>
                                    <div className="mt-10">
                                        <a href="https://files.gitter.im/SamZhangQingChuan/sam/DA1g/Steven-Halim_-Felix-Halim-Competitive-Programming-3_-The-New-Lower-Bound-of-Programming-Contests-Lulu.com-_2013_.pdf" target="_blank" rel="noopener noreferrer" className="block text-white hover:underline w-full text-center">
                                            <button className="bg-transparent p-4 rounded-full flex items-center justify-center">
                                                <img src="images/icons/user-guide.png" className="w-32 h-auto "  alt="user-guide"  />
                                                <p className=" text-center text-sm-2 sm:text-sm md:text-base lg:text-base xl:text-lg ml-12"> Competitive Programming 3 </p>
                                            </button>
                                        </a>
                                    </div>   
                                    <div className="mt-10">
                                        <a href="https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=604&limit=15&limitstart=0" target="_blank" rel="noopener noreferrer" className="block text-white hover:underline w-full text-center">
                                            <button className="bg-transparent p-4 rounded-full flex items-center justify-center">
                                                <img src="images/icons/problem_set.png" className="w-32 h-auto "  alt="problem_set"  />
                                                <p className="text-center text-sm-2 sm:text-sm md:text-base lg:text-base xl:text-lg ml-24"> Online Judge  </p>
                                            </button>
                                        </a>
                                    </div>                                                                
                                </div>
                            </div>

                            {/*Section 2*/}
                            <div className=" w-full justify-center">
                                <div className="h-24 mb-8">
                                        <div style={{ borderLeft: '10px solid #D688DC', height: '100%' }} className="flex items-center ml-24 mt-10">
                                            <p className="text-white font-bold font-serif ml-6 text-lg text-center sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl"> OTRAS GUÍAS </p>
                                        </div>
                                    </div>
                            </div>
                            <div className="flex flex-wrap">
                                {/*First column*/}
                                <div className="w-full md:w-1/3 justify-center ">
                                    |<div className="mt-2">
                                        <a href="https://omegaup.com/course/introduccion_a_algoritmos/" target="_blank" rel="noopener noreferrer" className="block text-white hover:underline w-full text-center">
                                            <button className="bg-transparent p-4 rounded-full flex items-center justify-center">
                                                <img src="images/icons/e-learning.png" className="w-32 h-auto "  alt="e-learning"  />
                                                <p className=" text-center text-sm-2 sm:text-sm md:text-base lg:text-base xl:text-lg ml-24"> Introducción a Algoritmos  </p>
                                            </button>
                                        </a>
                                    </div> 
                                    <div className="mt-10">
                                        <a href="https://omegaup.com/course/introduccion_a_algoritmos_ii/" target="_blank" rel="noopener noreferrer" className="block text-white hover:underline w-full text-center">
                                            <button className="bg-transparent p-4 rounded-full flex items-center justify-center">
                                                <img src="images/icons/e-learning.png" className="w-32 h-auto "  alt="e-learning"  />
                                                <p className=" text-center text-sm-2 sm:text-sm md:text-base lg:text-base xl:text-lg ml-24">Introducción a Algoritmos - Parte II   </p>
                                            </button>
                                        </a>
                                    </div> 
                                </div>
                                {/*Second column*/}
                                <div className="md:w-1/3 w-full justify-center">
                                    <div className="mt-10">
                                        <a href="https://www.hackerearth.com/practice/problems/?limit=20&offset=0" target="_blank" rel="noopener noreferrer" className="block text-white hover:underline w-full text-center">
                                            <button className="bg-transparent p-4 rounded-full flex items-center justify-center">
                                                <img src="images/icons/practice.png"className="w-32 h-auto "  alt="practice"  />
                                                <p className=" text-center text-sm-2 sm:text-sm md:text-base lg:text-base xl:text-lg ml-24">Hacker Earth  </p>
                                            </button>
                                        </a>
                                    </div>  
                                    <div className="mt-10">
                                        <a href="https://omegaup.com/" target="_blank" rel="noopener noreferrer" className="block text-white hover:underline w-full text-center">
                                            <button className="bg-transparent p-4 rounded-full flex items-center justify-center">
                                                <img src="images/icons/practice.png"className="w-32 h-auto "  alt="practice"  />
                                                <p className=" text-center text-sm-2 sm:text-sm md:text-base lg:text-base xl:text-lg ml-24">OmegaUp</p>
                                            </button>
                                        </a>
                                    </div>                               
                                </div>
                                {/*Third column*/}
                                <div className="w-full md:w-1/3 justify-center">
                                <div className="mt-10">
                                        <a href="https://leetcode.com/problemset/" target="_blank" rel="noopener noreferrer" className="block text-white hover:underline w-full text-center">
                                            <button className="bg-transparent p-4 rounded-full flex items-center justify-center">
                                                <img src="images/icons/practice.png"className="w-32 h-auto "  alt="practice"  />
                                                <p className="text-center text-sm-2 sm:text-sm md:text-base lg:text-base xl:text-lg ml-24"> LeetCode</p>
                                            </button>
                                        </a>
                                    </div>  
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {/* TUTORIALS*/}
                {showTutoriales && (
                    <div className="flex flex-wrap text-white font-serif justify-center text-center">
                        <p className="text-center text-sm-2 sm:text-sm md:text-base lg:text-base xl:text-lg justify-center m-10">
                            Para una comprensión más amplia del tema, podemos ver videos de YouTube que explican una serie de conceptos. 
                            Incluso podemos profundizar en un solo tema viendo varios videos al respecto.
                            De esta manera, podremos entender con mayor claridad todos los aspectos del tema. 
                            Por ello te dejamos una serie de playlists y videos que te ayudarán a entender y practicar mejor sobre varios temas.. 
                        </p>
                        <div className="w-full md:w-1/3 text-white font-serif text-center p-4 justify-center mb-20">
                            <a href="https://www.youtube.com/playlist?list=PLot-Xpze53leNZQd0iINpD-MAhMOMzWvO" target="_blank" rel="noonpener noreferrer" className="block hover:cursor-pointer">
                                <button className="bg-transparent hover:underline p-4 rounded-full flex items-center justify-center">
                                    <img src="images/icons/youtube.png" className="w-12 h-auto m-2" alt="youtube"/>
                                    <p className="text-center text-sm-2 sm:text-sm md:text-base lg:text-base xl:text-lg"> Binary Search </p>                                
                                </button>
                            </a>
                            <a href="https://www.youtube.com/playlist?list=PLEJXowNB4kPxse7iinEzb6FivjtQVxOXI" target="_blank" rel="noonpener noreferrer" className="block hover:cursor-pointer">
                                <button className="bg-transparent hover:underline p-4 rounded-full flex items-center justify-center">
                                    <img src="images/icons/youtube.png" className="w-12 h-auto m-2" alt="youtube"/>
                                    <p className="text-center text-sm-2 sm:text-sm md:text-base lg:text-base xl:text-lg"> Sorting Algorithms </p>                                
                                </button>
                            </a>
                            <a href="https://www.youtube.com/playlist?list=PLEJXowNB4kPzEvxN8ed6T13Meet7HP3h0" target="_blank" rel="noonpener noreferrer" className="block hover:cursor-pointer">
                                <button className="bg-transparent hover:underline p-4 rounded-full flex items-center justify-center">
                                    <img src="images/icons/youtube.png" className="w-12 h-auto  m-2" alt="youtube"/>
                                    <p className="text-center text-sm-2 sm:text-sm md:text-base lg:text-base xl:text-lg"> Stack and Queues  </p>                                
                                </button>
                            </a>
                            <a href="https://www.youtube.com/playlist?list=PLBlnK6fEyqRi3-lvwLGzcaquOs5OBTCww" target="_blank" rel="noonpener noreferrer" className="block hover:cursor-pointer">
                                <button className="bg-transparent hover:underline p-4 rounded-full flex items-center justify-center">
                                    <img src="images/icons/youtube.png" className="w-12 h-auto  m-2" alt="youtube"/>
                                    <p className="text-center text-sm-2 sm:text-sm md:text-base lg:text-base xl:text-lg"> Single Linked Lists  </p>                                
                                </button>
                            </a>
                            <a href="https://www.youtube.com/playlist?list=PLot-Xpze53ldg4pN6PfzoJY7KsKcxF1jg" target="_blank" rel="noonpener noreferrer" className="block hover:cursor-pointer">
                                <button className="bg-transparent hover:underline p-4 rounded-full flex items-center justify-center">
                                    <img src="images/icons/youtube.png" className="w-12 h-auto  m-2" alt="youtube"/>
                                    <p className="text-center text-sm-2 sm:text-sm md:text-base lg:text-base xl:text-lg"> Binary Tree </p>                                
                                </button>
                            </a>
                            <a href="https://www.youtube.com/watch?v=Tg1w-0a1xew" target="_blank" rel="noonpener noreferrer" className="block hover:cursor-pointer">
                                <button className="bg-transparent hover:underline p-4 rounded-full flex items-center justify-center">
                                    <img src="images/icons/youtube.png" className="w-12 h-auto  m-2" alt="youtube"/>
                                    <p className="text-center text-sm-2 sm:text-sm md:text-base lg:text-base xl:text-lg"> Z algorithm illustration  </p>                                
                                </button>
                            </a> 
                        </div>
                        <div className="w-full md:w-1/3 text-white font-serif text-center p-4">
                            <a href="https://www.youtube.com/playlist?list=PLEJXowNB4kPyP2PdMhOUlTY6GrRIITx28" target="_blank" rel="noonpener noreferrer" className="block hover:cursor-pointer">
                                <button className="bg-transparent hover:underline p-4 rounded-full flex items-center justify-center">
                                    <img src="images/icons/youtube.png" className="w-12 h-auto  m-2" alt="youtube"/>
                                    <p className="text-center text-sm-2 sm:text-sm md:text-base lg:text-base xl:text-lg"> Heap </p>                                
                                </button>
                            </a>
                            <a href="https://www.youtube.com/playlist?list=PLDV1Zeh2NRsDGO4--qE8yH72HFL1Km93P" target="_blank" rel="noonpener noreferrer" className="block hover:cursor-pointer">
                                <button className="bg-transparent hover:underline p-4 rounded-full flex items-center justify-center">
                                    <img src="images/icons/youtube.png" className="w-12 h-auto  m-2" alt="youtube"/>
                                    <p className="text-center text-sm-2 sm:text-sm md:text-base lg:text-base xl:text-lg"> Graphs </p>                                
                                </button>
                            </a>
                            <a href="https://www.youtube.com/playlist?list=PLot-Xpze53lcvx_tjrr_m2lgD2NsRHlNO" target="_blank" rel="noonpener noreferrer" className="block hover:cursor-pointer">
                                <button className="bg-transparent hover:underline p-4 rounded-full flex items-center justify-center">
                                    <img src="images/icons/youtube.png" className="w-12 h-auto  m-2" alt="youtube"/>
                                    <p className="text-center text-sm-2 sm:text-sm md:text-base lg:text-base xl:text-lg"> Dynamic Programming </p>                                
                                </button>
                            </a>
                            <a href="https://www.youtube.com/watch?v=JA_YrFwE1hc" target="_blank" rel="noonpener noreferrer" className="block hover:cursor-pointer">
                                <button className="bg-transparent hover:underline p-4 rounded-full flex items-center justify-center">
                                    <img src="images/icons/youtube.png" className="w-12 h-auto  m-2" alt="youtube"/>
                                    <p className="text-center text-sm-2 sm:text-sm md:text-base lg:text-base xl:text-lg"> Sieve of Eratosthenes </p>                                
                                </button>
                            </a>
                            <a href="https://www.youtube.com/watch?v=i5I_wrbUdzM" target="_blank" rel="noonpener noreferrer" className="block hover:cursor-pointer">
                                <button className="bg-transparent hover:underline p-4 rounded-full flex items-center justify-center">
                                    <img src="images/icons/youtube.png" className="w-12 h-auto  m-2" alt="youtube"/>
                                    <p className="text-center text-sm-2 sm:text-sm md:text-base lg:text-base xl:text-lg"> Greatest Common Divisor of Strings  </p>                                
                                </button>
                            </a>
                            <a href="https://www.youtube.com/watch?v=6ykRY6bHVX0" target="_blank" rel="noonpener noreferrer" className="block hover:cursor-pointer">
                                <button className="bg-transparent hover:underline p-4 rounded-full flex items-center justify-center">
                                    <img src="images/icons/youtube.png" className="w-12 h-auto  m-2" alt="youtube"/>
                                    <p className="text-center text-sm-2 sm:text-sm md:text-base lg:text-base xl:text-lg"> Program To Calculate LCM Of Two Numbers   </p>                                
                                </button>
                            </a>                            
                        </div>
                        <div className="w-full md:w-1/3 text-white font-serif p-4">
                            <a href="https://www.youtube.com/watch?v=_gYUlvcnjs0" target="_blank" rel="noonpener noreferrer" className="block hover:cursor-pointer">
                                <button className="bg-transparent hover:underline p-4 rounded-full flex items-center justify-center">
                                    <img src="images/icons/youtube.png" className="w-12 h-auto m-2" alt="youtube"/>
                                    <p className="text-center text-sm-2 sm:text-sm md:text-base lg:text-base xl:text-lg"> Modular Exponentiation (Part 1) </p>                                
                                </button>
                            </a> 
                            <a href="https://www.youtube.com/watch?v=bg0P_3UiG5I" target="_blank" rel="noonpener noreferrer" className="block hover:cursor-pointer">
                                <button className="bg-transparent hover:underline p-4 rounded-full flex items-center justify-center">
                                    <img src="images/icons/youtube.png" className="w-12 h-auto m-2" alt="youtube"/>
                                    <p className="text-center text-sm-2 sm:text-sm md:text-base lg:text-base xl:text-lg"> Modular Exponentiation (Part 2)  </p>                                
                                </button>
                            </a> 
                            <a href="https://www.youtube.com/watch?v=tKTNVmnW_4w" target="_blank" rel="noonpener noreferrer" className="block hover:cursor-pointer">
                                <button className="bg-transparent hover:underline p-4 rounded-full flex items-center justify-center">
                                    <img src="images/icons/youtube.png" className="w-12 h-auto  m-2" alt="youtube"/>
                                    <p className="text-center text-sm-2 sm:text-sm md:text-base lg:text-base xl:text-lg"> Prime Factorization (Fermat's Factoring Method)   </p>                                
                                </button>
                            </a> 
                            <a href="https://www.youtube.com/watch?v=7lhlJTtCsiw" target="_blank" rel="noonpener noreferrer" className="block hover:cursor-pointer">
                                <button className="bg-transparent hover:underline p-4 rounded-full flex items-center justify-center">
                                    <img src="images/icons/youtube.png" className="w-12 h-auto  m-2" alt="youtube"/>
                                    <p className="text-center text-sm-2 sm:text-sm md:text-base lg:text-base xl:text-lg"> How To Quickly Factor a Number: Pollard's Rho Algorithm   </p>                                
                                </button>
                            </a> 
                            <a href="https://www.youtube.com/watch?v=rn-veps4gmI" target="_blank" rel="noonpener noreferrer" className="block hover:cursor-pointer">
                                <button className="bg-transparent hover:underline p-4 rounded-full flex items-center justify-center text-center ">
                                    <img src="images/icons/youtube.png" className="w-12 h-auto m-2" alt="youtube"/>
                                    <p className="text-sm-2 sm:text-sm md:text-base lg:text-base xl:text-lg"> String Matching - Algoritmo Knutt-Morris-Pratt  </p>                                
                                </button>
                            </a>    
                        </div>
                    </div>
                )}
                {/* PRESENTATIONS*/}
                {showPresentaciones && (
                    <div className="flex flex-wrap text-center w-full text-white m-4 mb-20">
                        <div className="text-center text-sm-2 sm:text-sm md:text-base lg:text-base xl:text-lg justify-center">
                            Durante el semestre, ACM ofreció clases de algoritmos durante las semanas Tec. 
                            Dado que contamos con el material utilizado en estas clases, 
                            les compartimos las presentaciones para que también les resulten útiles, tal como lo fueron para nosotros.
                        </div>
                        <div className="w-1/3 justify-center">
                            <a href="https://drive.google.com/file/d/1qWGx0DtJsI0nkU-4Dxd_-mP_XJ1Fc0Aq/view?usp=sharing" target="_blank" rel="noonpener noreferrer" className="block hover:cursor-pointer">
                                <button className="bg-transparent hover:underline p-4 rounded-full content-center">
                                    <img src="images/icons/programming.png" className="w-32 h-auto bg-transparent m-2" alt="programming-icon"/>
                                    <p className="text-sm-2 sm:text-sm md:text-base lg:text-base xl:text-lg"> Barridos </p>
                                </button>
                            </a>
                        </div>
                        <div className="w-1/3 justify-center">
                            <a href="https://drive.google.com/file/d/1mSQR1IZZ2OP7cIRGVjAibopkyYmyxTy6/view?usp=sharing" target="_blank" rel="noonpener noreferrer" className="block hover:cursor-pointer">
                                <button className="bg-transparent hover:underline p-4 rounded-full content-center">
                                    <img src="images/icons/programming.png" className="w-32 h-auto bg-transparent m-2" alt="programming-icon"/>
                                    <p className="text-sm-2 sm:text-sm md:text-base lg:text-base xl:text-lg">Recursividad </p>
                                </button>
                            </a>
                        </div>
                        <div className="w-1/3 justify-center">
                            <a href="https://drive.google.com/file/d/1bOkbfsFgRPCm145Ppzx4YQZvKz4Paaud/view?usp=sharing" target="_blank" rel="noonpener noreferrer" className="block hover:cursor-pointer">
                                <button className="bg-transparent hover:underline p-4 rounded-full content-center">
                                    <img src="images/icons/programming.png" className="w-32 h-auto bg-transparent m-2" alt="programming-icon"/>
                                    <p className="text-sm-2 sm:text-sm md:text-base lg:text-base xl:text-lg"> Grafos </p>
                                </button>
                            </a>
                        </div>
                    </div>
                )}
                {/*RECOMENDATIONS*/}
                {showRecomendaciones && (
                        <div className="flex flex-wrap text-white font-serif">
                        <div className="w-full p-4  justify-center text-center items-center">
                            <p className="font-bold text-sm sm:text-sm md:text-base lg:text-base xl:text-2xl">¿Cómo iniciar con programación competitiva?</p>
                            <p className="text-sm-2 sm:text-sm md:text-base lg:text-base xl:text-lg mt-8 ml-2">
                                Iniciar con programación competitiva puede parecer intimidante al principio, pero con una buena guía y práctica constante, 
                                puedes progresar rápidamente.
                                La programación competitiva es un proceso de aprendizaje continuo. 
                                Analiza tus errores después de cada concurso o práctica y busca mejorar en áreas donde encuentres dificultades.
                                Aquí tienes unos tips para comenzar:
                            </p>
                            <a href="https://www.youtube.com/watch?v=xAeiXy8-9Y8" target="_blank" rel="noopener noreferrer" className="block text-white hover:underline mt-8">
                                <button className="bg-transparent hover:underline p-4 rounded w-full text-white flex items-center justify-center">
                                    <img src="images/icons/youtube.png" className="w-12 h-auto mr-2" alt="youtube" />
                                    <p className="text-sm-2 sm:text-sm md:text-base lg:text-base xl:text-lg">¿Cómo empezar en la programación competitiva?</p>
                                </button>
                            </a>
                        </div>
                    
                        {/* Left Column */}
                        <div className="w-full md:w-1/2 p-4 text-xl mb-10">
                            <p className="font-bold text-sm sm:text-sm md:text-base lg:text-base xl:text-xl">TIPS</p>

                            <p className="m-4 text-sm-2 sm:text-sm md:text-base lg:text-base xl:text-xl font-bold">1. Conocer los Fundamentos de la Programación</p>
                            <p className="m-3 ml-2 mb-12 text-sm sm:text-sm md:text-base lg:text-base xl:text-lg">
                                Asegúrate de tener una buena comprensión de al menos un lenguaje de programación. 
                                Los lenguajes más comunes en programación competitiva son C++, Java y Python.
                                Si aún no dominas alguno de estos lenguajes, te recomendamos empezar con C++ por su eficiencia y amplia aceptación en competencias.
                            </p>
                    
                            <p className="m-4 text-sm sm:text-sm md:text-base lg:text-base xl:text-xl font-bold">2. Aprender Estructuras de Datos y Algoritmos</p>
                            <p className="m-3 ml-2  mb-12 text-sm sm:text-sm md:text-base lg:text-base xl:text-lg">
                                Tener un conocimiento sólido de estructuras de datos (como arrays, listas enlazadas, pilas, colas, árboles, grafos) y algoritmos 
                                (como búsqueda binaria, ordenamiento, algoritmos de grafos, programación dinámica) es crucial. 
                            </p>
                    
                            <p className="m-4 text-sm sm:text-sm md:text-base lg:text-base xl:text-xl font-bold">3. Practicar en Plataformas de Competencias</p>
                            <p className="m-3 ml-2  mb-12 text-sm sm:text-sm md:text-base lg:text-base xl:text-lg">
                                Hay muchas plataformas en línea donde puedes practicar problemas de programación competitiva y participar en concursos. Algunas de las más populares son:
                                <a href="https://codeforces.com/" target="_blank" rel="noopener noreferrer" className="block text-white hover:underline mt-2 ml-6 text-sm-2 sm:text-sm md:text-base lg:text-base xl:text-lg" > Codeforces</a>
                                <a href="https://www.hackerrank.com/" target="_blank" rel="noopener noreferrer" className="block text-white hover:underline ml-6 text-sm-2 sm:text-sm md:text-base lg:text-base xl:text-lg"> HackerRank</a>
                                <a href="https://leetcode.com/" target="_blank" rel="noopener noreferrer" className="block text-white hover:underline ml-6 text-sm-2 sm:text-sm md:text-base lg:text-base xl:text-lg"> LeetCode</a>
                                <a href="https://atcoder.jp/" target="_blank" rel="noopener noreferrer" className="block text-white hover:underline ml-6 text-sm-2 sm:text-sm md:text-base lg:text-base xl:text-lg"> AtCoder</a>
                                <a href="https://www.topcoder.com/" target="_blank" rel="noopener noreferrer" className="block text-white hover:underline ml-6 text-sm-2 sm:text-sm md:text-base lg:text-base xl:text-lg"> TopCoder</a>
                                <a href="https://www.codechef.com/" target="_blank" rel="noopener noreferrer" className="block text-white hover:underline ml-6 text-sm-2 sm:text-sm md:text-base lg:text-base xl:text-lg"> CodeChef</a>
                            </p>
                    
                            <p className="m-4 text-sm sm:text-sm md:text-base lg:text-base xl:text-xl font-bold">4. Participar en Concursos Online</p>
                            <p className="m-3 ml-2  mb-12 text-sm sm:text-sm md:text-base lg:text-base xl:text-lg">
                                Participa en concursos en línea regularmente. 
                                Esto te ayudará a acostumbrarte al formato de las competencias y mejorar tus habilidades para resolver problemas bajo presión. 
                                Codeforces, por ejemplo, organiza concursos varias veces al mes.
                            </p>
                
                            <p className="m-4 text-sm sm:text-sm md:text-base lg:text-base xl:text-xl font-bold">5. Resolver Problemas Diariamente</p>
                            <p className="m-3 ml-2  mb-12 text-sm sm:text-sm md:text-base lg:text-base xl:text-lg">
                                La práctica constante es clave.
                                Trata de resolver al menos un problema al día. 
                                Empieza con problemas de nivel básico y ve subiendo de nivel conforme te sientas más cómodo.
                            </p>
                        </div>
                        {/*Right Column*/}
                        <div className="w-full md:w-1/2 p-4">
                            <p className="m-4 font-bold text-sm sm:text-sm md:text-base lg:text-base xl:text-xl">6. Leer y Analizar Soluciones de Otros</p>
                            <p className="m-3 ml-2  mb-12 text-sm sm:text-sm md:text-base lg:text-base xl:text-lg">
                                Después de intentar resolver un problema, compara tu solución con las de otros participantes. 
                                Esto te ayudará a aprender nuevas técnicas y enfoques para resolver problemas.
                            </p>

                            <p className="m-4 text-sm sm:text-sm md:text-base lg:text-base xl:text-xl font-bold">7. Unirse a Comunidades y Foros</p>
                            <p className="m-3 ml-2  mb-12 text-sm sm:text-sm md:text-base lg:text-base xl:text-lg">
                                Ser parte de una comunidad puede ser muy útil. Puedes unirte a foros como el de Codeforces, grupos en redes sociales, o comunidades en Discord y Slack. 
                                Aquí podrás discutir problemas, compartir soluciones y recibir consejos de otros competidores.
                            </p>

                            <p className="m-4 text-sm sm:text-sm md:text-base lg:text-base xl:text-xl font-bold">8. Estudiar y Practicar Matemáticas</p>
                            <p className="m-3 ml-2  mb-12 text-sm sm:text-sm md:text-base lg:text-base xl:text-lg">
                                La matemática es una parte importante de la programación competitiva. 
                                Asegúrate de tener conocimientos sólidos en combinatoria, teoría de números, probabilidad y otras áreas matemáticas relevantes.La matemática es una parte importante de la programación competitiva. 
                            </p>

                            <p className="m-4 text-sm sm:text-sm md:text-base lg:text-base xl:text-xl font-bold">9. Tomar Cursos en Línea</p>
                            <p className="m-3 ml-2 mb-12 text-sm sm:text-sm md:text-base lg:text-base xl:text-lg">
                            Hay muchos cursos en línea gratuitos y pagos que pueden ayudarte a mejorar tus habilidades. Algunos de los más recomendados son:
                                <a href="https://www.coursera.org/?msockid=3474eabcca2b6f513502fec1cbaf6ec0" target="_blank" rel="noopener noreferrer" className="block text-white hover:underline mt-2 ml-6 text-sm-2 sm:text-sm md:text-base lg:text-base xl:text-lg">Coursera (tienen cursos de estructuras de datos y algoritmos)</a>
                                <a href="https://www.edx.org/" target="_blank" rel="noopener noreferrer" className="block text-white hover:underline ml-6 text-sm-2 sm:text-sm md:text-base lg:text-base xl:text-lg">edX</a>
                                <a href="https://www.udacity.com/" target="_blank" rel="noopener noreferrer" className="block text-white hover:underline ml-6 text-sm-2 sm:text-sm md:text-base lg:text-base xl:text-lg">UdacitydX</a>
                                <a href="https://www.geeksforgeeks.org/" target="_blank" rel="noopener noreferrer" className="block text-white hover:underline ml-6 text-sm-2 sm:text-sm md:text-base lg:text-base xl:text-lg">GeeksforGeeks</a>
                            </p>

                            <p className="m-4 text-sm sm:text-sm md:text-base lg:text-base xl:text-xl font-bold">10. Leer Libros sobre Programación Competitiva</p>
                            <p className="m-3 ml-2 mb-12 text-sm sm:text-sm md:text-base lg:text-base xl:text-lg">
                                Son recursos excelentes para aprender y mejorar en programación competitiva. 
                                Puedes elegir aquellos que se adapten mejor a tu nivel y preferencias de aprendizaje
                            </p>
                        </div>
                    </div> 
                )}
            </section>
        </main>
    );
}

export default Resources_ACM;
