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

    const Roadmap = () => {
        setShowGuia(false);
        setShowTutoriales(false);
        setShowPresentaciones(false);
        setShowRecomendaciones(false);
        setShowRoadMap(true);
    }

    return (
        <main className="flex min-h-screen flex-col bg-gradient-to-b from-[#500889] to-[#200039] p-8 font-serif text-base ">
            {/* Title */}
            <h1 className="text-white font-semibold font-serif text-8xl mt-52 text-center">
                RECURSOS
            </h1>
            <div className="max-w-6xl mx-auto overflow-hidden">
                <div className="p-8">
                    <div className="tracking-wide">
                        {/* Description */}
                        <h1 className="mt-6 text-white font-bold text-xl text-center">
                            ¡Hola Comunidad!
                        </h1>
                        <p className="mt-4 text-white text-lg text-center">
                            En nuestro grupo estudiantil estamos comprometidos en ayudarte a mejorar tus habilidades de programación. Por eso, hemos recopilado todos los enlaces y presentaciones que usamos durante nuestras "Semanas Tec". Estos recursos contienen información útil y práctica que beneficiará a toda la comunidad.
                        </p>
                        <p className="mt-9 text-white text-base text-center">
                            Para ver el contenido oprime cualquiera de los cuatro botones de abajo
                        </p>
                    </div>
                </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
                <button 
                    className={`bg-violet-700 ${!showGuia ? 'hover:bg-violet-400' : ''} text-xl p-4 rounded m-6 w-56 h-16 text-white`}
                    onClick={guia}
                >
                    GUÍA
                </button>
                <button 
                    className={`bg-violet-700 ${!showTutoriales ? 'hover:bg-violet-400' : ''} text-xl p-4 rounded m-6 w-56 h-16 text-white`}
                    onClick={tutoriales}
                >
                    TUTORIALES
                </button>
                <button 
                    className={`bg-violet-700 ${!showPresentaciones ? 'hover:bg-violet-400' : ''} text-xl p-4 rounded m-6 w-56 h-16 text-white`}
                    onClick={presentaciones}
                >
                    PRESENTACIONES
                </button>
                <button 
                    className={`bg-violet-700 ${!showRecomendaciones ? 'hover:bg-violet-400' : ''} text-xl p-4 rounded m-6 w-56 h-16 text-white`}
                    onClick={recomendaciones}
                >
                    RECOMENDACIONES
                </button>
                <button
                    className={`bg-violet-700 ${!showRoadMap ? 'hover:bg-violet-400' : ''} text-xl p-4 rounded m-6 w-56 h-16 text-white`}
                    onClick={Roadmap}>
                    ROAD MAP
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
                                    <p className="text-white font-bold font-serif ml-6 text-3xl"> GUÍAS ICPC </p>
                                </div>
                            </div>
                            {/* Define what each logo means */}
                            <div className="flex flex-wrap justify-center text-white font-serif ">
                                <div className="m-8 text-center">
                                    <img 
                                        src="images/icons/user-guide.png"
                                        className="w-32 h-auto bg-white rounded-full"
                                        alt="user-guide"
                                    />
                                    <p className="m-4"> LIBROS </p>
                                </div>               
                                <div className="m-8 text-center">
                                    <img 
                                        src="images/icons/e-learning.png"
                                        className="w-32 h-auto bg-white rounded-full"
                                        alt="user-guide"
                                    />
                                    <p className="mt-4"> CURSOS </p>
                                </div>                                
                                    <div className="m-8 text-center">
                                        <img 
                                            src="images/icons/practice.png"
                                            className="w-32 h-auto bg-white rounded-full"
                                            alt="user-guide"
                                        />
                                        <p className="mt-4 w-32"> PAGINAS PARA PRACTICAR </p>
                                    </div>
                                    <div className="m-8 text-center">
                                        <img 
                                            src="images/icons/problem_set.png"
                                            className="w-32 h-auto bg-white rounded-full"
                                            alt="user-guide"
                                        />
                                        <p className="m-4"> PROBLEMSETS </p>
                                    </div>
                            </div>
                            {/*Start of guide*/}
                            <div className="flex flex-wrap">
                                {/*First column*/}
                                <div className="w-full md:w-1/3">
                                    <div className="flex items-center mt-12">
                                        <img
                                            src="images/icons/user-guide.png"
                                            className="w-32 h-auto bg-white rounded-full"
                                            alt="user-guide"
                                        />
                                        <a href="https://cses.fi/book/book.pdf" target="_blank" rel="noopener noreferrer" className="block text-white hover:underline w-full">
                                            <p className="text-white ml-4 text-xl"> Competitive Programmer's Handbook </p>
                                        </a>
                                    </div>
                                    <div className="flex items-center mt-12">
                                        <img
                                            src="images/icons/e-learning.png"
                                            className="w-32 h-auto bg-white rounded-full"
                                            alt="user-guide"
                                        />
                                        <a href="https://omegaup.com/course/introduccion_a_cpp/" target="_blank" rel="noonpener noreferrer" className="block text-white hover:underline w-full">
                                            <p className="text-white ml-4 text-xl"> Introducción a C++ </p>
                                        </a>
                                    </div>
                                    <div className="flex items-center mt-12">
                                        <img
                                            src="images/icons/practice.png"
                                            className="w-32 h-auto bg-white rounded-full"
                                            alt="user-guide"
                                        />
                                        <a href="https://codeforces.com/" target="_blank" rel="noonpener noreferrer" className="block text-white hover:underline w-full">
                                            <p className="text-white ml-4 text-xl"> Codeforces </p>
                                        </a>
                                    </div>
                                </div>
                                {/* Second column*/}
                                <div className="w-full md:w-1/3">
                                    <div className="flex items-center mt-10">
                                        <img
                                            src="images/icons/problem_set.png"
                                            className="w-32 h-auto bg-white rounded-full"
                                            alt="user-guide"
                                        />
                                        <a href="https://cses.fi/problemset/" target="_blank" rel="noopener noreferrer" className="block text-white hover:underline w-full">
                                            <p className="text-white ml-4 text-xl"> CSES Problem Set </p>
                                        </a>
                                    </div>
                                    <div className="flex items-center mt-12">
                                        <img
                                            src="images/icons/problem_set.png"
                                            className="w-32 h-auto bg-white rounded-full"
                                            alt="user-guide"
                                        />
                                        <a href="https://earthshakira.github.io/a2oj-clientside/server/Ladders.html" target="_blank" rel="noonpener noreferrer" className="block text-white hover:underline w-full">
                                            <p className="text-white ml-4 text-xl"> Practice Ladders </p>
                                        </a>
                                    </div>
                                    <div className="flex items-center mt-12">
                                        <img
                                            src="images/icons/user-guide.png"
                                            className="w-32 h-auto bg-white rounded-full"
                                            alt="user-guide"
                                        />
                                        <a href="https://drive.google.com/file/d/1F7LcdQzaUMJFbb5DVNBQEgNKQiTNnDVv/view" target="_blank" rel="noonpener noreferrer" className="block text-white hover:underline w-full">
                                            <p className="text-white ml-4 text-xl"> Data Structures and Algorithms in C++ </p>
                                        </a>
                                    </div>
                                </div>
                                {/* Third column*/}
                                <div className=" w-full md:w-1/3">
                                    <div className="flex items-center mt-10">
                                        <img
                                            src="images/icons/e-learning.png"
                                            className="w-32 h-auto bg-white rounded-full"
                                            alt="user-guide"
                                        />
                                        <a href="https://usaco.guide/" target="_blank" rel="noopener noreferrer" className="block text-white hover:underline w-full">
                                            <p className="text-white ml-4 text-xl"> USACO Guide </p>
                                        </a>
                                    </div>
                                    <div className="flex items-center mt-10">
                                        <img
                                            src="images/icons/user-guide.png"
                                            className="w-32 h-auto bg-white rounded-full"
                                            alt="user-guide"
                                        />
                                        <a href="https://files.gitter.im/SamZhangQingChuan/sam/DA1g/Steven-Halim_-Felix-Halim-Competitive-Programming-3_-The-New-Lower-Bound-of-Programming-Contests-Lulu.com-_2013_.pdf" target="_blank" rel="noonpener noreferrer" className="block text-white hover:underline w-full">
                                            <p className="text-white ml-4 text-xl"> Competitive Programming 3 </p>
                                        </a>
                                    </div>
                                    <div className="flex items-center mt-10">
                                        <img
                                            src="images/icons/problem_set.png"
                                            className="w-32 h-auto bg-white rounded-full"
                                            alt="user-guide"
                                        />
                                        <a href="https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=604&limit=15&limitstart=0" target="_blank" rel="noonpener noreferrer" className="block text-white hover:underline w-full">
                                            <p className="text-white ml-4 text-xl"> Online Judge </p>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/*Section 2*/}
                            <div className=" w-full justify-center">
                                <div className="h-24 mb-8">
                                        <div style={{ borderLeft: '10px solid #D688DC', height: '100%' }} className="flex items-center ml-24 mt-10">
                                            <p className="text-white font-bold font-serif ml-6 text-3xl"> OTRAS GUÍAS </p>
                                        </div>
                                    </div>
                            </div>
                            <div className="flex flex-wrap">
                                <div className="w-full md:w-1/3 justify-center ">
                                    <div className="flex items-center mb-8">
                                        <img
                                            src="images/icons/e-learning.png"
                                            className="w-32 h-auto bg-white rounded-full"
                                            alt="user-guide"
                                        />
                                        <a href="https://omegaup.com/course/introduccion_a_algoritmos/" target="_blank" rel="noopener noreferrer" className="block text-white hover:underline w-full">
                                            <p className="text-white ml-4 text-xl"> Introducción a Algoritmos </p>
                                        </a>
                                    </div>
                                    <div className="flex items-center ">
                                        <img
                                            src="images/icons/e-learning.png"
                                            className="w-32 h-auto bg-white rounded-full"
                                            alt="user-guide"
                                        />
                                        <a href="https://omegaup.com/course/introduccion_a_algoritmos_ii/" target="_blank" rel="noopener noreferrer" className="block text-white hover:underline w-full">
                                            <p className="text-white ml-4 text-xl"> Introducción a Algoritmos - Parte II </p>
                                        </a>
                                    </div>
                                </div>
                                <div className="md:w-1/3 w-full justify-center">
                                    <div className="flex items-center mb-8">
                                        <img
                                            src="images/icons/practice.png"
                                            className="w-32 h-auto bg-white rounded-full"
                                            alt="user-guide"
                                        />
                                        <a href="https://www.hackerearth.com/practice/problems/?limit=20&offset=0" target="_blank" rel="noopener noreferrer" className="block text-white hover:underline w-full">
                                            <p className="text-white ml-4 text-xl"> Hacker Earth </p>
                                        </a>
                                    </div>
                                    <div className="flex items-center mb-8">
                                        <img
                                            src="images/icons/practice.png"
                                            className="w-32 h-auto bg-white rounded-full"
                                            alt="user-guide"
                                        />
                                        <a href="https://omegaup.com/" target="_blank" rel="noopener noreferrer" className="block text-white hover:underline w-full">
                                            <p className="text-white ml-4 text-xl"> OmegaUp </p>
                                        </a>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/3 justify-center">
                                    <div className="flex items-center">
                                        <img
                                            src="images/icons/practice.png"
                                            className="w-32 h-auto bg-white rounded-full"
                                            alt="user-guide"
                                        />
                                        <a href="https://leetcode.com/problemset/" target="_blank" rel="noopener noreferrer" className="block text-white hover:underline w-full">
                                            <p className="text-white ml-4 text-xl"> LeetCode </p>
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
                        <p className="text-lg justify-center m-10">
                            Para una comprensión más amplia del tema, podemos ver videos de YouTube que explican una serie de conceptos. 
                            Incluso podemos profundizar en un solo tema viendo varios videos al respecto.
                            De esta manera, podremos entender con mayor claridad todos los aspectos del tema. 
                            Por ello te dejamos una serie de playlists y videos que te ayudarán a entender y practicar mejor sobre varios temas.. 
                        </p>
                        <div className="w-full md:w-1/3 text-white font-serif text-center p-4 justify-center mb-20">
                            <a href="https://www.youtube.com/playlist?list=PLot-Xpze53leNZQd0iINpD-MAhMOMzWvO" target="_blank" rel="noonpener noreferrer" className="block hover:cursor-pointer">
                                <button className="bg-transparent hover:underline p-4 rounded-full flex items-center justify-center">
                                    <img src="images/icons/youtube.png" className="w-12 h-auto bg-white rounded-full m-2" alt="youtube"/>
                                    <p className="text-xl"> Binary Search </p>                                
                                </button>
                            </a>
                            <a href="https://www.youtube.com/playlist?list=PLEJXowNB4kPxse7iinEzb6FivjtQVxOXI" target="_blank" rel="noonpener noreferrer" className="block hover:cursor-pointer">
                                <button className="bg-transparent hover:underline p-4 rounded-full flex items-center justify-center">
                                    <img src="images/icons/youtube.png" className="w-12 h-auto bg-white rounded-full m-2" alt="youtube"/>
                                    <p className="text-xl"> Sorting Algorithms </p>                                
                                </button>
                            </a>
                            <a href="https://www.youtube.com/playlist?list=PLEJXowNB4kPzEvxN8ed6T13Meet7HP3h0" target="_blank" rel="noonpener noreferrer" className="block hover:cursor-pointer">
                                <button className="bg-transparent hover:underline p-4 rounded-full flex items-center justify-center">
                                    <img src="images/icons/youtube.png" className="w-12 h-auto bg-white rounded-full m-2" alt="youtube"/>
                                    <p className="text-xl"> Stack and Queues  </p>                                
                                </button>
                            </a>
                            <a href="https://www.youtube.com/playlist?list=PLBlnK6fEyqRi3-lvwLGzcaquOs5OBTCww" target="_blank" rel="noonpener noreferrer" className="block hover:cursor-pointer">
                                <button className="bg-transparent hover:underline p-4 rounded-full flex items-center justify-center">
                                    <img src="images/icons/youtube.png" className="w-12 h-auto bg-white rounded-full m-2" alt="youtube"/>
                                    <p className="text-xl"> Single Linked Lists  </p>                                
                                </button>
                            </a>
                            <a href="https://www.youtube.com/playlist?list=PLot-Xpze53ldg4pN6PfzoJY7KsKcxF1jg" target="_blank" rel="noonpener noreferrer" className="block hover:cursor-pointer">
                                <button className="bg-transparent hover:underline p-4 rounded-full flex items-center justify-center">
                                    <img src="images/icons/youtube.png" className="w-12 h-auto bg-white rounded-full m-2" alt="youtube"/>
                                    <p className="text-xl"> Binary Tree </p>                                
                                </button>
                            </a>
                            <a href="https://www.youtube.com/playlist?list=PLot-Xpze53ldg4pN6PfzoJY7KsKcxF1jg" target="_blank" rel="noonpener noreferrer" className="block hover:cursor-pointer">
                                <button className="bg-transparent hover:underline p-4 rounded-full flex items-center justify-center">
                                    <img src="images/icons/youtube.png" className="w-12 h-auto bg-white rounded-full m-2" alt="youtube"/>
                                    <p className="text-xl"> Binary Tree </p>                                
                                </button>
                            </a>
                        </div>
                        <div className="w-full md:w-1/3 text-white font-serif text-center p-4">
                            <a href="https://www.youtube.com/playlist?list=PLEJXowNB4kPyP2PdMhOUlTY6GrRIITx28" target="_blank" rel="noonpener noreferrer" className="block hover:cursor-pointer">
                                <button className="bg-transparent hover:underline p-4 rounded-full flex items-center justify-center">
                                    <img src="images/icons/youtube.png" className="w-12 h-auto bg-white rounded-full m-2" alt="youtube"/>
                                    <p className="text-xl"> Heap </p>                                
                                </button>
                            </a>
                            <a href="https://www.youtube.com/playlist?list=PLDV1Zeh2NRsDGO4--qE8yH72HFL1Km93P" target="_blank" rel="noonpener noreferrer" className="block hover:cursor-pointer">
                                <button className="bg-transparent hover:underline p-4 rounded-full flex items-center justify-center">
                                    <img src="images/icons/youtube.png" className="w-12 h-auto bg-white rounded-full m-2" alt="youtube"/>
                                    <p className="text-xl"> Graphs </p>                                
                                </button>
                            </a>
                            <a href="https://www.youtube.com/playlist?list=PLot-Xpze53lcvx_tjrr_m2lgD2NsRHlNO" target="_blank" rel="noonpener noreferrer" className="block hover:cursor-pointer">
                                <button className="bg-transparent hover:underline p-4 rounded-full flex items-center justify-center">
                                    <img src="images/icons/youtube.png" className="w-12 h-auto bg-white rounded-full m-2" alt="youtube"/>
                                    <p className="text-xl"> Dynamic Programming </p>                                
                                </button>
                            </a>
                            <a href="https://www.youtube.com/watch?v=JA_YrFwE1hc" target="_blank" rel="noonpener noreferrer" className="block hover:cursor-pointer">
                                <button className="bg-transparent hover:underline p-4 rounded-full flex items-center justify-center">
                                    <img src="images/icons/youtube.png" className="w-12 h-auto bg-white rounded-full m-2" alt="youtube"/>
                                    <p className="text-xl"> Sieve of Eratosthenes </p>                                
                                </button>
                            </a>
                            <a href="https://www.youtube.com/watch?v=i5I_wrbUdzM" target="_blank" rel="noonpener noreferrer" className="block hover:cursor-pointer">
                                <button className="bg-transparent hover:underline p-4 rounded-full flex items-center justify-center">
                                    <img src="images/icons/youtube.png" className="w-12 h-auto bg-white rounded-full m-2" alt="youtube"/>
                                    <p className="text-xl"> Greatest Common Divisor of Strings  </p>                                
                                </button>
                            </a>
                            <a href="https://www.youtube.com/watch?v=6ykRY6bHVX0" target="_blank" rel="noonpener noreferrer" className="block hover:cursor-pointer">
                                <button className="bg-transparent hover:underline p-4 rounded-full flex items-center justify-center">
                                    <img src="images/icons/youtube.png" className="w-12 h-auto bg-white rounded-full m-2" alt="youtube"/>
                                    <p className="text-xl"> Program To Calculate LCM Of Two Numbers   </p>                                
                                </button>
                            </a>                            
                        </div>
                        <div className="w-full md:w-1/3 text-white font-serif p-4">
                            <a href="https://www.youtube.com/watch?v=_gYUlvcnjs0" target="_blank" rel="noonpener noreferrer" className="block hover:cursor-pointer">
                                <button className="bg-transparent hover:underline p-4 rounded-full flex items-center justify-center">
                                    <img src="images/icons/youtube.png" className="w-12 h-auto bg-white rounded-full m-2" alt="youtube"/>
                                    <p className="text-xl"> Exponenciación modular (Parte 1) </p>                                
                                </button>
                            </a> 
                            <a href="https://www.youtube.com/watch?v=bg0P_3UiG5I" target="_blank" rel="noonpener noreferrer" className="block hover:cursor-pointer">
                                <button className="bg-transparent hover:underline p-4 rounded-full flex items-center justify-center">
                                    <img src="images/icons/youtube.png" className="w-12 h-auto bg-white rounded-full m-2" alt="youtube"/>
                                    <p className="text-xl"> Modular Exponentiation (Part 2)  </p>                                
                                </button>
                            </a> 
                            <a href="https://www.youtube.com/watch?v=tKTNVmnW_4w" target="_blank" rel="noonpener noreferrer" className="block hover:cursor-pointer">
                                <button className="bg-transparent hover:underline p-4 rounded-full flex items-center justify-center">
                                    <img src="images/icons/youtube.png" className="w-12 h-auto bg-white rounded-full m-2" alt="youtube"/>
                                    <p className="text-xl"> Prime Factorization (Fermat's Factoring Method)   </p>                                
                                </button>
                            </a> 
                            <a href="https://www.youtube.com/watch?v=7lhlJTtCsiw" target="_blank" rel="noonpener noreferrer" className="block hover:cursor-pointer">
                                <button className="bg-transparent hover:underline p-4 rounded-full flex items-center justify-center">
                                    <img src="images/icons/youtube.png" className="w-12 h-auto bg-white rounded-full m-2" alt="youtube"/>
                                    <p className="text-xl"> How To Quickly Factor a Number: Pollard's Rho Algorithm   </p>                                
                                </button>
                            </a> 
                            <a href="https://www.youtube.com/watch?v=rn-veps4gmI" target="_blank" rel="noonpener noreferrer" className="block hover:cursor-pointer">
                                <button className="bg-transparent hover:underline p-4 rounded-full flex items-center justify-center">
                                    <img src="images/icons/youtube.png" className="w-12 h-auto bg-white rounded-full m-2" alt="youtube"/>
                                    <p className="text-xl"> String Matching - Algoritmo Knutt-Morris-Pratt  </p>                                
                                </button>
                            </a> 
                            <a href="https://www.youtube.com/watch?v=Tg1w-0a1xew" target="_blank" rel="noonpener noreferrer" className="block hover:cursor-pointer">
                                <button className="bg-transparent hover:underline p-4 rounded-full flex items-center justify-center">
                                    <img src="images/icons/youtube.png" className="w-12 h-auto bg-white rounded-full m-2" alt="youtube"/>
                                    <p className="text-xl"> Z algorithm illustration  </p>                                
                                </button>
                            </a> 
                            
                        </div>
                    </div>
                )}
                {/* PRESENTATIONS*/}
                {showPresentaciones && (
                    <div className="flex flex-wrap text-center w-full text-white m-4 mb-20">
                        <div className="text-xl justify-center">
                            Durante el semestre, ACM ofreció clases de algoritmos durante las semanas Tec. 
                            Dado que contamos con el material utilizado en estas clases, 
                            les compartimos las presentaciones para que también les resulten útiles, tal como lo fueron para nosotros.
                        </div>
                        <div className="w-1/3 justify-center">
                            <a href="https://drive.google.com/file/d/1qWGx0DtJsI0nkU-4Dxd_-mP_XJ1Fc0Aq/view?usp=sharing" target="_blank" rel="noonpener noreferrer" className="block hover:cursor-pointer">
                                <button className="bg-transparent hover:underline p-4 rounded-full content-center">
                                    <img src="images/icons/programming.png" className="w-32 h-auto bg-transparent m-2" alt="programming-icon"/>
                                    <p className="text-2xl"> Barridos </p>
                                </button>
                            </a>
                        </div>
                        <div className="w-1/3 justify-center">
                            <a href="https://drive.google.com/file/d/1mSQR1IZZ2OP7cIRGVjAibopkyYmyxTy6/view?usp=sharing" target="_blank" rel="noonpener noreferrer" className="block hover:cursor-pointer">
                                <button className="bg-transparent hover:underline p-4 rounded-full content-center">
                                    <img src="images/icons/programming.png" className="w-32 h-auto bg-transparent m-2" alt="programming-icon"/>
                                    <p className="text-2xl">Recursividad </p>
                                </button>
                            </a>
                        </div>
                        <div className="w-1/3 justify-center">
                            <a href="https://drive.google.com/file/d/1bOkbfsFgRPCm145Ppzx4YQZvKz4Paaud/view?usp=sharing" target="_blank" rel="noonpener noreferrer" className="block hover:cursor-pointer">
                                <button className="bg-transparent hover:underline p-4 rounded-full content-center">
                                    <img src="images/icons/programming.png" className="w-32 h-auto bg-transparent m-2" alt="programming-icon"/>
                                    <p className="text-2xl"> Grafos </p>
                                </button>
                            </a>
                        </div>
                    </div>
                )}
                {/*RECOMENDATIONS*/}
                {showRecomendaciones && (
                        <div className="flex flex-wrap text-white font-serif">
                        <div className="w-full p-4  justify-center text-center items-center">
                            <p className="font-bold text-2xl">¿Cómo iniciar con programación competitiva?</p>
                            <p className="text-xl mt-8 ml-2">
                                Iniciar con programación competitiva puede parecer intimidante al principio, pero con una buena guía y práctica constante, 
                                puedes progresar rápidamente.
                                La programación competitiva es un proceso de aprendizaje continuo. 
                                Analiza tus errores después de cada concurso o práctica y busca mejorar en áreas donde encuentres dificultades.
                                Aquí tienes unos tips para comenzar:
                            </p>
                            <a href="https://www.youtube.com/watch?v=xAeiXy8-9Y8" target="_blank" rel="noopener noreferrer" className="block text-white hover:underline mt-8">
                                <button className="bg-transparent hover:underline p-4 rounded w-full text-white flex items-center justify-center">
                                    <img src="images/icons/youtube.png" className="w-12 h-auto bg-white rounded-full mr-2" alt="youtube" />
                                    <p className="text-xl">¿Cómo empezar en la programación competitiva?</p>
                                </button>
                            </a>
                        </div>
                    
                        {/* Left Column */}
                        <div className="w-full md:w-1/2 p-4 text-xl mb-10">
                            <p className="font-bold text-2xl">TIPS</p>
                            
                            <p className="m-4 text-lg font-bold">1. Conocer los Fundamentos de la Programación</p>
                            <p className="m-3 ml-2">
                                Asegúrate de tener una buena comprensión de al menos un lenguaje de programación. 
                                Los lenguajes más comunes en programación competitiva son C++, Java y Python.
                                Si aún no dominas alguno de estos lenguajes, te recomendamos empezar con C++ por su eficiencia y amplia aceptación en competencias.
                            </p>
                    
                            <p className="m-4 text-lg font-bold">2. Aprender Estructuras de Datos y Algoritmos</p>
                            <p className="m-3 ml-2">
                                Tener un conocimiento sólido de estructuras de datos (como arrays, listas enlazadas, pilas, colas, árboles, grafos) y algoritmos 
                                (como búsqueda binaria, ordenamiento, algoritmos de grafos, programación dinámica) es crucial. 
                            </p>
                    
                            <p className="m-4 text-lg font-bold">3. Practicar en Plataformas de Competencias</p>
                            <p className="m-3 ml-2">
                                Hay muchas plataformas en línea donde puedes practicar problemas de programación competitiva y participar en concursos. Algunas de las más populares son:
                                <a href="https://codeforces.com/" target="_blank" rel="noopener noreferrer" className="block text-white hover:underline mt-2 ml-6"> Codeforces</a>
                                <a href="https://www.hackerrank.com/" target="_blank" rel="noopener noreferrer" className="block text-white hover:underline ml-6"> HackerRank</a>
                                <a href="https://leetcode.com/" target="_blank" rel="noopener noreferrer" className="block text-white hover:underline ml-6"> LeetCode</a>
                                <a href="https://atcoder.jp/" target="_blank" rel="noopener noreferrer" className="block text-white hover:underline ml-6"> AtCoder</a>
                                <a href="https://www.topcoder.com/" target="_blank" rel="noopener noreferrer" className="block text-white hover:underline ml-6"> TopCoder</a>
                                <a href="https://www.codechef.com/" target="_blank" rel="noopener noreferrer" className="block text-white hover:underline ml-6"> CodeChef</a>
                            </p>
                    
                            <p className="m-4 text-lg font-bold">4. Participar en Concursos Online</p>
                            <p className="m-3 ml-2">
                                Participa en concursos en línea regularmente. 
                                Esto te ayudará a acostumbrarte al formato de las competencias y mejorar tus habilidades para resolver problemas bajo presión. 
                                Codeforces, por ejemplo, organiza concursos varias veces al mes.
                            </p>
                
                            <p className="m-4 text-lg font-bold">5. Resolver Problemas Diariamente</p>
                            <p className="m-3 ml-2">
                                La práctica constante es clave.
                                Trata de resolver al menos un problema al día. 
                                Empieza con problemas de nivel básico y ve subiendo de nivel conforme te sientas más cómodo.
                            </p>
                        </div>
                        {/*Right Column*/}
                        <div className="w-full md:w-1/2 p-4 mt-8 text-xl">

                            <p className="m-4 font-bold">6. Leer y Analizar Soluciones de Otros</p>
                            <p className="m-3 ml-2">
                                Después de intentar resolver un problema, compara tu solución con las de otros participantes. 
                                Esto te ayudará a aprender nuevas técnicas y enfoques para resolver problemas.
                            </p>

                            <p className="m-4 text-lg font-bold">7. Unirse a Comunidades y Foros</p>
                            <p className="m-3 ml-2">
                                Ser parte de una comunidad puede ser muy útil. Puedes unirte a foros como el de Codeforces, grupos en redes sociales, o comunidades en Discord y Slack. 
                                Aquí podrás discutir problemas, compartir soluciones y recibir consejos de otros competidores.
                            </p>

                            <p className="m-4 text-lg font-bold">8. Estudiar y Practicar Matemáticas</p>
                            <p className="m-3 ml-2">
                                La matemática es una parte importante de la programación competitiva. 
                                Asegúrate de tener conocimientos sólidos en combinatoria, teoría de números, probabilidad y otras áreas matemáticas relevantes.La matemática es una parte importante de la programación competitiva. 
                            </p>

                            <p className="m-4 text-lg font-bold">9. Tomar Cursos en Línea</p>
                            <p className="m-3 ml-2">
                            Hay muchos cursos en línea gratuitos y pagos que pueden ayudarte a mejorar tus habilidades. Algunos de los más recomendados son:
                                <a href="https://www.coursera.org/?msockid=3474eabcca2b6f513502fec1cbaf6ec0" target="_blank" rel="noopener noreferrer" className="block text-white hover:underline mt-2 ml-6">Coursera (tienen cursos de estructuras de datos y algoritmos)</a>
                                <a href="https://www.edx.org/" target="_blank" rel="noopener noreferrer" className="block text-white hover:underline ml-6">edX</a>
                                <a href="https://www.udacity.com/" target="_blank" rel="noopener noreferrer" className="block text-white hover:underline ml-6">UdacitydX</a>
                                <a href="https://www.geeksforgeeks.org/" target="_blank" rel="noopener noreferrer" className="block text-white hover:underline ml-6">GeeksforGeeks</a>
                            </p>

                            <p className="m-4 text-lg font-bold">10. Leer Libros sobre Programación Competitiva</p>
                            <p className="m-3 ml-2">
                                Son recursos excelentes para aprender y mejorar en programación competitiva. 
                                Puedes elegir aquellos que se adapten mejor a tu nivel y preferencias de aprendizaje
                            </p>
                        </div>
                    </div> 
                )}

                {/* Roadmap */}
                {showRoadMap && (
                    <div className="flex flex-wrap ">
                        {/* First column */}
                        <div className="w-full md:w-1/5">
                            {/* Divisor line */}
                            <div className="h-52 mb-1 ">
                                <div style={{ borderLeft: '4px dotted #FFFFFF', height: '100%' }} className="ml-40"></div>
                            </div>

                            {/* First button and line */}
                            <div className="flex items-center justify-center ml-4">
                                <button className={`bg-sky-600 ${!showRecomendaciones ? 'hover:bg-sky-950' : ''} text-xl p-4 rounded-full mt-2 ml-2 mb-6 w-52 h-20 text-white border-gray-300 border-2 relative`}>
                                    1. Number Theory
                                </button>
                            </div>

                            {/* Links and buttons */}
                            <div className="">
                                {/* Binary Exponentiation */}
                                <div className="text-sm ml-14">
                                    <a href="https://www.geeksforgeeks.org/binary-exponentiation-for-competitive-programming/" target="_blank" rel="noopener noreferrer" className="block text-white hover:underline w-60">
                                        <button className={`bg-sky-800 ${!showRecomendaciones ? 'hover:bg-sky-950' : ''} rounded-full text-white text-center flex items-center p-2`}>
                                            <img 
                                                src="images/icons/Programming_bg.png"
                                                className="w-6 h-auto bg-gray-200 rounded-full mr-6"
                                                alt="Programming-bg"
                                            />
                                            <span>Binary Exponentiation</span>
                                        </button>
                                    </a>
                                </div>

                                {/* Modular Arithmetic */}
                                <div className="text-sm ml-14">
                                    <a href="https://www.geeksforgeeks.org/modular-arithmetic/" target="_blank" rel="noopener noreferrer" className="block text-white hover:underline w-52">
                                        <button className={`bg-sky-800 ${!showRecomendaciones ? 'hover:bg-sky-950' : ''} rounded-full text-white text-center flex items-center p-2`}>
                                            <img 
                                                src="images/icons/Programming_bg.png"
                                                className="w-6 h-auto bg-gray-200 rounded-full mr-6"
                                                alt="Programming-bg"
                                            />
                                            <span>Modular Arithmetic</span>
                                        </button>
                                    </a>
                                </div>

                                {/* Modular Inverse */}
                                <div className="text-sm ml-14">
                                    <a href="https://www.geeksforgeeks.org/multiplicative-inverse-under-modulo-m/" target="_blank" rel="noopener noreferrer" className="block text-white hover:underline w-48">
                                        <button className={`bg-sky-800 ${!showRecomendaciones ? 'hover:bg-sky-950' : ''} rounded-full text-white text-center flex items-center p-2`}>
                                            <img 
                                                src="images/icons/Programming_bg.png"
                                                className="w-6 h-auto bg-gray-200 rounded-full mr-6"
                                                alt="Programming-bg"
                                            />
                                            <span>Modular Inverse</span>
                                        </button>
                                    </a>
                                </div>

                                {/* Euclidean: GCD */}
                                <div className="text-sm ml-14">
                                    <a href="https://www.geeksforgeeks.org/gcd-greatest-common-divisor-practice-problems-for-competitive-programming/" target="_blank" rel="noopener noreferrer" className="block text-white hover:underline w-48">
                                        <button className={`bg-sky-800 ${!showRecomendaciones ? 'hover:bg-sky-950' : ''} rounded-full text-white text-center flex items-center p-2`}>
                                            <img 
                                                src="images/icons/Programming_bg.png"
                                                className="w-6 h-auto bg-gray-200 rounded-full mr-6"
                                                alt="Programming-bg"
                                            />
                                            <span>Euclidean: GCD</span>
                                        </button>
                                    </a>
                                </div>

                                {/* Euclidean: LCM */}
                                <div className="text-sm  ml-14">
                                    <a href="https://www.geeksforgeeks.org/mathematical-algorithms-gcd-lcm/" target="_blank" rel="noopener noreferrer" className="block text-white hover:underline w-48">
                                        <button className={`bg-sky-800 ${!showRecomendaciones ? 'hover:bg-sky-950' : ''} rounded-full text-white text-center flex items-center p-2`}>
                                            <img 
                                                src="images/icons/Programming_bg.png"
                                                className="w-6 h-auto bg-gray-200 rounded-full mr-6"
                                                alt="Programming-bg"
                                            />
                                            <span>Euclidean: LCM</span>
                                        </button>
                                    </a>
                                </div>

                                {/* Sieve of Eratosthenes */}
                                <div className="text-sm ml-14">
                                    <a href="https://www.geeksforgeeks.org/sieve-of-eratosthenes/" target="_blank" rel="noopener noreferrer" className="block text-white hover:underline w-56">
                                        <button className={`bg-sky-800 ${!showRecomendaciones ? 'hover:bg-sky-950' : ''} rounded-full text-white text-center flex items-center p-2`}>
                                            <img 
                                                src="images/icons/Programming_bg.png"
                                                className="w-6 h-auto bg-gray-200 rounded-full mr-6"
                                                alt="Programming-bg"
                                            />
                                            <span>Sieve of Eratosthenes</span>
                                        </button>
                                    </a>
                                </div>

                                {/* Prime Factorization */}
                                <div className="text-sm ml-14">
                                    <a href="https://www.geeksforgeeks.org/prime-factorization-using-sieve-olog-n-multiple-queries/" target="_blank" rel="noopener noreferrer" className="block text-white hover:underline w-56">
                                        <button className={`bg-sky-800 ${!showRecomendaciones ? 'hover:bg-sky-950' : ''} rounded-full text-white text-center flex items-center p-2`}>
                                            <img 
                                                src="images/icons/Programming_bg.png"
                                                className="w-6 h-auto bg-gray-200 rounded-full mr-6"
                                                alt="Programming-bg"
                                            />
                                            <span>Prime Factorization</span>
                                        </button>
                                    </a>
                                </div>

                                {/* Linear Diophantine Equation with Two Variables */}
                                <div className="text-sm ml-14">
                                    <a href="https://www.geeksforgeeks.org/linear-diophantine-equations/" target="_blank" rel="noopener noreferrer" className="block text-white hover:underline">
                                        <button className={`bg-sky-800 ${!showRecomendaciones ? 'hover:bg-sky-950' : ''} rounded-full text-white text-center flex items-center p-2 w-full`}>
                                            <img 
                                                src="images/icons/Programming_bg.png"
                                                className="w-6 h-auto bg-gray-200 rounded-full mr-6"
                                                alt="Programming-bg"
                                            />
                                            <span>Linear Diophantine Equation with Two Variables</span>
                                        </button>
                                    </a>
                                </div>

                                {/* Chinese Remainder Theorem */}
                                <div className="text-sm ml-14">
                                    <a href="https://www.geeksforgeeks.org/introduction-to-chinese-remainder-theorem/" target="_blank" rel="noopener noreferrer" className="block text-white hover:underline w-72">
                                        <button className={`bg-sky-800 ${!showRecomendaciones ? 'hover:bg-sky-950' : ''} rounded-full text-white text-center flex items-center p-2`}>
                                            <img 
                                                src="images/icons/Programming_bg.png"
                                                className="w-6 h-auto bg-gray-200 rounded-full mr-6"
                                                alt="Programming-bg"
                                            />
                                            <span>Chinese Remainder Theorem</span>
                                        </button>
                                    </a>
                                </div>

                                {/* Fermat's Theorem */}
                                <div className="text-sm ml-14">
                                    <a href="https://www.geeksforgeeks.org/fermats-little-theorem/" target="_blank" rel="noopener noreferrer" className="block text-white hover:underline w-48">
                                        <button className={`bg-sky-800 ${!showRecomendaciones ? 'hover:bg-sky-950' : ''} rounded-full text-white text-center flex items-center p-2`}>
                                            <img 
                                                src="images/icons/Programming_bg.png"
                                                className="w-6 h-auto bg-gray-200 rounded-full mr-6"
                                                alt="Programming-bg"
                                            />
                                            <span>Fermat's Theorem</span>
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/*Second column*/}
                        <div className="w-full md:w-1/5">
                        {/* Divisor line */}
                            <div className="border-t-2 border-solid border-white w-96 ml-2 mt-64"></div>
                            <div className="h-96 ">
                                <div style={{ borderLeft: '2px solid #FFFFFF', height: '100%' }} className="ml-72 mt-48"></div>
                            </div>
                        </div>

                        {/*Third column*/}
                        <div className="w-full md:w-1/5">
                            <div className="flex items-center">
                                <button className={`bg-sky-600 ${!showRecomendaciones ? 'hover:bg-sky-950' : ''} text-xl p-4 rounded-full mt-56 ml-28 mb-6 w-96 h-20 text-white border-gray-300 border-2`}>
                                    2. Bit Manipulation
                                </button>
                            </div>
                            {/* Fermat's Theorem */}
                            <div className="text-sm ml-14">
                                <a href="https://www.geeksforgeeks.org/bit-manipulation-for-competitive-programming/" target="_blank" rel="noopener noreferrer" className="block text-white hover:underline">
                                    <button className={`bg-sky-800 ${!showRecomendaciones ? 'hover:bg-sky-950' : ''} rounded-full text-white text-center flex items-center p-2 ml-16 w-52`}>
                                        <img 
                                            src="images/icons/Programming_bg.png"
                                            className="w-6 h-auto bg-gray-200 rounded-full mr-6"
                                            alt="Programming-bg"
                                        />
                                        <span>Bitwise Operation's</span>
                                    </button>
                                </a>
                            </div>
                            <div className="border-t-2 border-solid border-white w-20 ml-2 mt-20"></div>
                            <div className="flex items-center">
                                <button className={`bg-sky-600 ${!showRecomendaciones ? 'hover:bg-sky-950' : ''} text-xl p-4 rounded-full -mt-10 ml-28 mb-6 w-96 h-20 text-white border-gray-300 border-2`}>
                                    2. Combinatorics
                                </button>
                            </div>
                            {/* Stars and Bars */}
                            <div className="text-sm ml-14">
                                <a href="https://www.geeksforgeeks.org/stars-and-bars-algorithms-for-competitive-programming/" target="_blank" rel="noopener noreferrer" className="block text-white hover:underline">
                                    <button className={`bg-sky-800 ${!showRecomendaciones ? 'hover:bg-sky-950' : ''} rounded-full text-white text-center flex items-center p-2 ml-16 w-52 mt-2`}>
                                        <img 
                                            src="images/icons/Programming_bg.png"
                                            className="w-6 h-auto bg-gray-200 rounded-full mr-6"
                                            alt="Programming-bg"
                                        />
                                        <span>Stars and Bars</span>
                                    </button>
                                </a>
                            </div>
                            {/* Factorial */}
                            <div className="text-sm ml-14">
                                <a href="https://www.geeksforgeeks.org/factorial-large-number/" target="_blank" rel="noopener noreferrer" className="block text-white hover:underline">
                                    <button className={`bg-sky-800 ${!showRecomendaciones ? 'hover:bg-sky-950' : ''} rounded-full text-white text-center flex items-center p-2 ml-16 w-52 mt-2`}>
                                        <img 
                                            src="images/icons/Programming_bg.png"
                                            className="w-6 h-auto bg-gray-200 rounded-full mr-6"
                                            alt="Programming-bg"
                                        />
                                        <span>Factorial</span>
                                    </button>
                                </a>
                            </div>
                            {/* Binomial Coefficient (nCr) */}
                            <div className="text-sm ml-14">
                                <a href="https://www.geeksforgeeks.org/binomial-coefficient-dp-9/" target="_blank" rel="noopener noreferrer" className="block text-white hover:underline">
                                    <button className={`bg-sky-800 ${!showRecomendaciones ? 'hover:bg-sky-950' : ''} rounded-full text-white text-center flex items-center p-2 ml-16 w-52 mt-2`}>
                                        <img 
                                            src="images/icons/Programming_bg.png"
                                            className="w-6 h-auto bg-gray-200 rounded-full mr-6"
                                            alt="Programming-bg"
                                        />
                                        <span>Binomial Coefficient (nCr)</span>
                                    </button>
                                </a>
                            </div>
                             {/* Catalan Number */}
                             <div className="text-sm ml-14">
                                <a href="https://www.geeksforgeeks.org/program-nth-catalan-number/" target="_blank" rel="noopener noreferrer" className="block text-white hover:underline">
                                    <button className={`bg-sky-800 ${!showRecomendaciones ? 'hover:bg-sky-950' : ''} rounded-full text-white text-center flex items-center p-2 ml-16 w-52 mt-2`}>
                                        <img 
                                            src="images/icons/Programming_bg.png"
                                            className="w-6 h-auto bg-gray-200 rounded-full mr-6"
                                            alt="Programming-bg"
                                        />
                                        <span>Catalan Number</span>
                                    </button>
                                </a>
                            </div>

                        </div>

                        {/* Fourth Column*/}
                        <div className="w-full md:w-1/5 ">
                            <div className="border-t-2 border-solid border-white w-72 ml-2 mt-64 "></div>
                            <div className="border-t-2 border-solid border-white w-72 ml-2 mt-48 "></div>
                        </div>


                        {/* Fifth Column*/}
                        <div className="w-full md:w-1/5">
                            <div className="h-60 ">
                                <div style={{ borderLeft: '2px solid #FFFFFF', height: '79%' }} className="ml-1 mt-64"></div>
                            </div>
                        </div>

                    </div>
                )}

            </section>
        </main>
    );
}

export default Resources_ACM;
