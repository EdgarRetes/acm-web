"use client";

import React, { useState } from 'react';
import ReactFlow, { ReactFlowProvider, Controls, MiniMap, Background } from 'react-flow-renderer';
import '@fortawesome/fontawesome-free/css/all.min.css';


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
        <main className="flex min-h-screen flex-col bg-gradient-to-b from-[#500889] to-[#200039] p-8 font-serif text-base min-h-fit">
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
            <section className="flex-wrap flex-rows">
                {/* GUIDES*/}
                {showGuia && (
                    <div className="flex flex-row">
                        <div className="md:flex-col">
                            <div className="flex-1 h-24">
                                <div style={{ borderLeft: '10px solid #D688DC', height: '100%' }} className="flex items-center ml-24 mt-10">
                                    <p className="text-white font-bold font-serif ml-6 text-3xl"> GUÍAS ICPC </p>
                                </div>
                            </div>
                            {/* Define what each logo means */}
                            <div className="flex flex-row text-white font-serif">
                                <div className="ml-40 mt-10">
                                    <img 
                                        src="images/icons/user-guide.png"
                                        className="w-32 h-auto bg-white rounded-full"
                                        alt="user-guide"
                                    />
                                    <p className="ml-10 mt-4"> LIBROS </p>
                                </div>
                                <div className="flex-2 h-24">
                                    <div className="ml-40 mt-10">
                                        <img 
                                            src="images/icons/e-learning.png"
                                            className="w-32 h-auto bg-white rounded-full"
                                            alt="user-guide"
                                        />
                                        <p className="ml-10 mt-4"> CURSOS </p>
                                    </div>
                                </div>
                                <div className="flex-3 h-24">
                                    <div className="ml-40 mt-10">
                                        <img 
                                            src="images/icons/practice.png"
                                            className="w-32 h-auto bg-white rounded-full"
                                            alt="user-guide"
                                        />
                                        <p className="mt-4 text-center"> PAGINAS PARA PRACTICAR </p>
                                    </div>
                                </div>
                                <div className="flex-4 h-24">
                                    <div className="ml-40 mt-10">
                                        <img 
                                            src="images/icons/problem_set.png"
                                            className="w-32 h-auto bg-white rounded-full"
                                            alt="user-guide"
                                        />
                                        <p className="ml-2 mt-4"> PROBLEMSETS </p>
                                    </div>
                                </div>
                            </div>
                            {/*Start of guide*/}
                            <div className="flex flex-row">
                                {/*First column*/}
                                <div className="md:flex-col">
                                    <div className="flex items-center mt-28 ml-11">
                                        <img
                                            src="images/icons/user-guide.png"
                                            className="w-32 h-auto bg-white rounded-full"
                                            alt="user-guide"
                                        />
                                        <a href="https://cses.fi/book/book.pdf" target="_blank" rel="noopener noreferrer" className="block text-white hover:underline w-full">
                                            <p className="text-white ml-4 text-xl"> Competitive Programmer's Handbook </p>
                                        </a>
                                    </div>
                                    <div className="flex items-center mt-12 ml-11">
                                        <img
                                            src="images/icons/e-learning.png"
                                            className="w-32 h-auto bg-white rounded-full"
                                            alt="user-guide"
                                        />
                                        <a href="https://omegaup.com/course/introduccion_a_cpp/" target="_blank" rel="noonpener noreferrer" className="block text-white hover:underline w-full">
                                            <p className="text-white ml-4 text-xl"> Introducción a C++ </p>
                                        </a>
                                    </div>
                                    <div className="flex items-center mt-12 ml-11">
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
                                <div className="md:flex-col">
                                    <div className="flex items-center mt-28 ml-11">
                                        <img
                                            src="images/icons/problem_set.png"
                                            className="w-32 h-auto bg-white rounded-full"
                                            alt="user-guide"
                                        />
                                        <a href="https://cses.fi/problemset/" target="_blank" rel="noopener noreferrer" className="block text-white hover:underline w-full">
                                            <p className="text-white ml-4 text-xl"> CSES Problem Set </p>
                                        </a>
                                    </div>
                                    <div className="flex items-center mt-12 ml-11">
                                        <img
                                            src="images/icons/problem_set.png"
                                            className="w-32 h-auto bg-white rounded-full"
                                            alt="user-guide"
                                        />
                                        <a href="https://earthshakira.github.io/a2oj-clientside/server/Ladders.html" target="_blank" rel="noonpener noreferrer" className="block text-white hover:underline w-full">
                                            <p className="text-white ml-4 text-xl"> Practice Ladders </p>
                                        </a>
                                    </div>
                                    <div className="flex items-center mt-12 ml-11">
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
                                <div className="md:flex-col">
                                    <div className="flex items-center mt-28 ml-11">
                                        <img
                                            src="images/icons/e-learning.png"
                                            className="w-32 h-auto bg-white rounded-full"
                                            alt="user-guide"
                                        />
                                        <a href="https://usaco.guide/" target="_blank" rel="noopener noreferrer" className="block text-white hover:underline w-full">
                                            <p className="text-white ml-4 text-xl"> USACO Guide </p>
                                        </a>
                                    </div>
                                    <div className="flex items-center mt-12 ml-11">
                                        <img
                                            src="images/icons/user-guide.png"
                                            className="w-32 h-auto bg-white rounded-full"
                                            alt="user-guide"
                                        />
                                        <a href="https://files.gitter.im/SamZhangQingChuan/sam/DA1g/Steven-Halim_-Felix-Halim-Competitive-Programming-3_-The-New-Lower-Bound-of-Programming-Contests-Lulu.com-_2013_.pdf" target="_blank" rel="noonpener noreferrer" className="block text-white hover:underline w-full">
                                            <p className="text-white ml-4 text-xl"> Competitive Programming 3 </p>
                                        </a>
                                    </div>
                                    <div className="flex items-center mt-12 ml-11">
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
                            <div className="mt-20 flex flex-row">
                                <div className="md:flex-row">
                                    <div className="flex-1 h-24">
                                        <div style={{ borderLeft: '10px solid #D688DC', height: '100%' }} className="flex items-center ml-24 mt-10">
                                            <p className="text-white font-bold font-serif ml-6 text-3xl"> OTRAS GUÍAS </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row">
                                <div className="md:flex-col">
                                    <div className="flex items-center mt-28 ml-11">
                                        <img
                                            src="images/icons/e-learning.png"
                                            className="w-32 h-auto bg-white rounded-full"
                                            alt="user-guide"
                                        />
                                        <a href="https://omegaup.com/course/introduccion_a_algoritmos/" target="_blank" rel="noopener noreferrer" className="block text-white hover:underline w-full">
                                            <p className="text-white ml-4 text-xl"> Introducción a Algoritmos </p>
                                        </a>
                                    </div>
                                    <div className="flex items-center mt-28 ml-11">
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
                                <div className="md:flex-col">
                                    <div className="flex items-center mt-28 ml-11">
                                        <img
                                            src="images/icons/practice.png"
                                            className="w-32 h-auto bg-white rounded-full"
                                            alt="user-guide"
                                        />
                                        <a href="https://www.hackerearth.com/practice/problems/?limit=20&offset=0" target="_blank" rel="noopener noreferrer" className="block text-white hover:underline w-full">
                                            <p className="text-white ml-4 text-xl"> Hacker Earth </p>
                                        </a>
                                    </div>
                                    <div className="flex items-center mt-28 ml-11">
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
                                <div className="md:flex-col ml-72">
                                    <div className="flex items-center mt-28 ">
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
                    <div className="flex flex-wrap text-center text-base text-white mt-10">
                        <p> Tutoriales </p>
                    </div>
                )}
                {/* PRESENTATIONS*/}
                {showPresentaciones && (
                    <div className="flex flex-wrap text-center text-base text-white mt-10">
                        <p> Presentaciones </p>
                    </div>
                )}
                {/*RECOMENDATIONS*/}
                {showRecomendaciones && (
                    <div className="flex flex-wrap text-center text-base text-white mt-10">
                        <p> Recomendaciones </p>
                    </div>
                )}
                 {/* Roadmap */}
                {showRoadMap && (
                <div className="flex flex-rows justify-normal ">
                    {/* First column */}
                    <div className="md:flex-col">
                        {/* Divisor line */}
                        <div className="md:flex-col">
                            <div className="flex-1 h-24">
                                <div style={{ borderLeft: '6px dotted #FFFFFF', height: '100%' }} className="flex items-center ml-52"></div>
                            </div>
                        </div>

                        {/* First button and line */}
                        <div className="flex items-center">
                            <button className={`bg-sky-600 ${!showRecomendaciones ? 'hover:bg-sky-950' : ''} text-xl p-4 rounded-full mt-4 ml-28 mb-6 w-52 h-16 text-white border-gray-300 border-2 relative`}>
                                1. Number Theory
                            </button>
                            <div className="border-t-2 border-solid border-white w-96 ml-4"></div> {/* Horizontal line */}
                        </div>

                        {/* Links and buttons */}
                        <div className="mt-2 ml-32 text-base">
                            {/* Binary Exponentiation */}
                            <div className="mt-2 text-base">
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
                            <div className="mt-2 text-base">
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
                            <div className="mt-2 text-base">
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
                            <div className="mt-2 text-base">
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
                            <div className="mt-2 text-base">
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
                            <div className="mt-2 text-base">
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
                            <div className="mt-2 text-base">
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
                            <div className="mt-2 text-base">
                                <a href="https://www.geeksforgeeks.org/linear-diophantine-equations/" target="_blank" rel="noopener noreferrer" className="block text-white hover:underline w-96">
                                    <button className={`bg-sky-800 ${!showRecomendaciones ? 'hover:bg-sky-950' : ''} rounded-full text-white text-center flex items-center p-2`}>
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
                            <div className="mt-2 text-base">
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
                            <div className="mt-2 text-base">
                                <a href="https://www.geeksforgeeks.org/fermats-little-theorem/" target="_blank" rel="noopener noreferrer" className="block text-white hover:underline w-48">
                                    <button className={`bg-sky-800 ${!showRecomendaciones ? 'hover:bg-sky-950' : ''} rounded-full text-white text-center flex items-center p-2`}>
                                        <img 
                                            src="images/icons/Programming_bg.png"
                                            className="w-6 h-auto bg-gray-200 rounded-full mr-2"
                                            alt="Programming-bg"
                                        />
                                        <span>Fermat's Theorem</span>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>



                        {/*Second column*/}
                        <div className="md:flex-col ">
                                    <div className="ml-4 mt-80">
                                        <div className="border-l-2 border-solid border-white w-2 h-96 "></div> {/* Línea vertical */}
                                    </div>
                        </div>

                        {/* Third column */}
                        <div className="md:flex-col ml-6">
                            {/* Primer elemento */}
                            <div className="flex items-center">
                                <button className={`bg-sky-600 ${!showRecomendaciones ? 'hover:bg-sky-950' : ''} text-xl p-4 rounded-full mt-28 ml-4 w-52 h-16 text-white border-gray-300 border-2 relative`}>
                                    2. Bit Manipulation
                                </button>
                                <div className="border-t-2 border-solid border-white w-96 ml-4 mt-28"></div> {/* Línea horizontal */}
                            </div>

                            {/* Segundo elemento */}
                            <div className="flex items-center mt-8">
                                <a href="https://www.geeksforgeeks.org/bit-manipulation-for-competitive-programming/" target="_blank" rel="noopener noreferrer" className="block text-white hover:underline">
                                    <button className={`bg-sky-800 ${!showRecomendaciones ? 'hover:bg-sky-950' : ''} rounded-full text-white text-center flex items-center p-2 ml-12`}>
                                        <img 
                                            src="images/icons/Programming_bg.png"
                                            className="w-6 h-auto bg-gray-200 rounded-full mr-6"
                                            alt="Programming-bg"/>
                                        <span>Bit Manipulation</span>
                                    </button>
                                </a>
                            </div>

                            {/* Tercer elemento */}
                            <div className="flex items-center mt-8">
                                <div className="border-t-2 border-solid border-white w-52 ml-4"></div> {/* Línea vertical */}
                                <button className={`bg-sky-600 ${!showRecomendaciones ? 'hover:bg-sky-950' : ''} text-xl p-4 rounded-full mt-4 ml-4 w-52 h-16 text-white border-gray-300 border-2 relative`}>
                                    3. Combinatorics
                                </button>
                                <div className="border-t-2 border-solid border-white w-48 ml-1"></div> {/* Otra línea horizontal */}
                            </div>
                        </div>

                        {/* Fourht Column */}
                        <div className="md:flex-col ml-6">
                            <div className="border-l-2 border-solid border-white w-2 h-36 mr-16 mt-36"></div> {/* Línea vertical */}
                        </div>
                    </div>
                )}
            </section>

        </main>
    );
}

export default Resources_ACM;
