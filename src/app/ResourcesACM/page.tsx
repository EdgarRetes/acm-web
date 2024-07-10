import Link from "next/link";

const recursos_acm = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#8560C1] to-[#15062f] text-white font-semibold font-serif text-8xl mb-4">
            RECURSOS
            <div className="max-w-6xl mx-auto overflow-hidden">
                    <div className="p-8">
                        <div className=" tracking-wide text-sm font-light">
                        <p className="mt-20 text-white font-bold text-xl text-center">
                            ¡Hola Comunidad!
                        </p>
                        <p className="mt-4 text-white text-sm text-center">
                            En nuestro grupo estudiantil estamos comprometidos en ayudarte a mejorar tus habilidades de programación. Por eso, hemos recopilado todos los enlaces y presentaciones que usamos durante nuestras "Semanas Tec". Estos recursos contienen información útil y práctica que beneficiará a toda la comunidad.                        </p>
                        </div>
                    </div>
                </div>
        </main>
    );
}

export default recursos_acm;