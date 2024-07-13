import Link from "next/link";

const SobreNosotros = () => {
    return (
        <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-[#020F46] to-[#0E152A] text-white pt-[10rem]">
            <section className="flex flex-col items-center justify-center w-full">
                <div className="grid grid-rows-5 grid-cols-7 items-center text-center text-white pb-0">
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

                    <div className="flex flex-col items-center col-start-2 col-span-2 row-start-3 row-span-3 mt-9 mb-0">
                        <span className="text-[32px] mb-2">
                            MISIÓN
                        </span>
                        <div className="bg-[#39275E] p-8 rounded-lg mt-2 w-[490px] h-[190px] flex items-center justify-center text-justify text-[15px] ">
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

                </div>
                    <div className="flex items-center justify-center col-start-4  row-start-4 row-span-6 -mt-[5.5rem]">
                        <img
                            src="images/About-us/ACM Team.png"
                            className="w-[500px] h-auto max-w-none "
                            alt="Logo Sobre Nosotros"
                        />
                    </div>

                <div className="grid grid-rows-4 grid-cols-9 items-center text-center">
                    <h1 className="col-start-2 col-span-3 row-start-1 text-5xl border-x-[#4A67E3] border-l-8 border-spacing-12">
                            <span className="invisible">
                            ..
                            </span>
                            NUESTRO EQUIPO
                    </h1>

                    <div className="items-center justify-center row-start-2 row-span-2 col-start-2 p-4">
                        <h2 className="text-white font-bold mb-10">
                            PRESIDENTA
                        </h2>
                        <img className= "mb-8"
                            src="images/About-us/AU_F.png"/>
                        <h3 className="text-white">
                            Andrea Fátima Figueroa López
                        </h3>
                    </div>
                    <div className="items-center justify-center row-start-2 row-span-2 col-start-3 p-4">
                        <h2 className="text-white font-bold mb-10">
                            VICEPRESIDENTA
                        </h2>
                        <img className= "mb-8"
                            src="images/About-us/AU_R.png"/>
                        <h3 className="text-white">
                            Romina Nájera Fuentes
                        </h3>
                    </div>
                    <div className="items-center justify-center row-start-2 row-span-2 col-start-4 p-4">
                        <h2 className="text-white font-bold mb-10">
                            SECRETARÍA
                        </h2>
                        <img className= "mb-8"
                            src="images/About-us/AU_Fe.png"/>
                        <h3 className="text-white">
                            Luisa Fernanda Valdez Guillén
                        </h3>
                    </div>
                    <div className="items-center justify-center row-start-2 row-span-2 col-start-5 p-4">
                        <h2 className="text-white font-bold mb-10">
                            LOGÍSTICA
                        </h2>
                        <img className= "mb-8"
                            src="images/About-us/AU_S.png"/>
                        <h3 className="text-white">
                            Santiago Alducín Villaseñor
                        </h3>
                    </div>
                    <div className="items-center justify-center row-start-2 row-span-2 col-start-6 p-4">
                        <h2 className="text-white font-bold mb-10">
                            PUBLICIDAD
                        </h2>
                        <img className= "mb-8"
                            src="images/About-us/AU_A.png"/>
                        <h3 className="text-white">
                            Alejandra Arredondo
                        </h3>
                    </div>
                    <div className="items-center justify-center row-start-2 row-span-2 col-start-7 p-4">
                        <h2 className="text-white font-bold mb-10">
                            ACCIÓN SOCIAL
                        </h2>
                        <img className= "mb-8"
                            src="images/About-us/AU_E.png"/>
                        <h3 className="text-white">
                            Edgar Martínez Retes
                        </h3>
                    </div>
                    <div className="items-center justify-center row-start-2 row-span-2 col-start-8 p-4">
                        <h2 className="text-white font-bold mb-10">
                            FINANZAS
                        </h2>
                        <img className= "mb-8"
                            src="images/About-us/AU_K.png"/>
                        <h3 className="text-white">
                            Kamila Jeannette Martínez Ibarra
                        </h3>
                    </div>
                </div>

                
                



            </section>
        </main>
    );
}

export default SobreNosotros;
