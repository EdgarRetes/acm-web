import { useState } from 'react';
import Link from "next/link";


const recursos_acm = () => {

    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#500889] to-[#200039] text-white font-semibold font-serif text-8xl mb-4">
            RECURSOS
            <div className="max-w-6xl mx-auto overflow-hidden">
                <div className="p-8">
                    <div className="tracking-wide">
                        <p className="mt-10 text-white font-bold text-xl text-center">
                            ¡Hola Comunidad!
                        </p>
                        <p className="mt-4 text-white text-sm text-center">
                            En nuestro grupo estudiantil estamos comprometidos en ayudarte a mejorar tus habilidades de programación. Por eso, hemos recopilado todos los enlaces y presentaciones que usamos durante nuestras "Semanas Tec". Estos recursos contienen información útil y práctica que beneficiará a toda la comunidad.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-5">
                <div className="w-full sm:w-auto">
                    <button className="bg-violet-900 hover:bg-violet-700 text-xl p-4 rounded m-6 w-56 h-16">
                        Guía
                    </button>
                </div>
                <div className="w-full sm:w-auto">
                    <button className="bg-violet-900 hover:bg-violet-700 text-xl p-4 rounded m-6 w-56 h-16">
                        Tutoriales
                    </button>
                </div>
                <div className="w-full sm:w-auto">
                    <button className="bg-violet-900 hover:bg-violet-700 text-xl p-4 rounded m-6 w-56 h-16">
                        Presentaciones
                    </button>
                </div>
                <div className="w-full sm:w-auto">
                    <button className="bg-violet-900 hover:bg-violet-700 text-xl p-4 rounded m-6 w-56 h-16">
                        Recomendaciones
                    </button>
                </div>
            </div>
        </main>
    );
}

export default recursos_acm;