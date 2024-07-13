import Link from "next/link";

const SobreNosotros = () => {
    return (
        <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-[#020F46] to-[#0E152A] text-white">
            <section className="flex flex-col items-center justify-center w-full">
                <div className="grid grid-rows-6 grid-cols-7 items-center text-center text-white">
                    <h1 className="text-[65px] col-start-2 col-span-6 row-start-1 row-span-2 mt-35">
                        <span className="sobre nosotros">
                            SOBRE NOSOTROS
                        </span>
                    </h1>  

                    <div className="col-start-3 row-start-1 row-span-2 mt-35">
                        <img
                            src="images/logos/ACM_logo_A.png"
                            className="max-w-full h-auto size-5/6 -ml-20"
                            alt="Logo Sobre Nosotros"
                        />
                    </div>

                    <div className="flex flex-col items-center col-start-2 col-span-2 row-start-3 row-span-3 mt-9">
                        <span className="text-[32px] mb-2">
                            MISIÓN
                        </span>
                        <div className="bg-[#39275E] p-8 rounded-lg mt-2 w-[490px] h-[190px] flex items-center justify-center text-justify text-[15px]">
                            <p>
                                Ser un capítulo enfocado a promover y difundir las ciencias computacionales e 
                                inculcar el interés por la programación competitiva. Uniendo a la comunidad 
                                universitaria de Querétaro con el fin de apoyarnos y aprender juntos.
                            </p>
                        </div>
                    </div>
                    
                    <div className="flex flex-col items-center col-start-5 col-span-2 row-start-3 row-span-3 mt-9">
                        <span className="text-[32px] mb-2">
                            VISIÓN
                        </span>
                        <div className="bg-[#39275E] p-8 rounded-lg mt-2 w-[490px] h-[190px] flex items-center justify-center text-justify text-[15px]">
                            <p>
                                Convertirse en el capítulo de ACM más reconocido a nivel Nacional. 
                                Y ser protagonistas en la difusión del mundo de la programación 
                                competitiva entre la comunidad universitaria de Querétaro.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center justify-center col-start-4  row-start-4 row-span-6">
                        <img
                            src="images/ACM Team.png"
                            className="w-[500px] h-auto max-w-none"
                            alt="Logo Sobre Nosotros"
                        />
                    </div>

                </div>
            </section>
        </main>
    );
}

export default SobreNosotros;
