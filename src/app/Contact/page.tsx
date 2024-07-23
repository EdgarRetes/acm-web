import Link from "next/link";
import { ContactForm } from "~/app/_components/contact-form";

const Contact = () => {
    return (
        <main className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-[#51088A] to-[#200039] text-white ">
            <div className="grid grid-cols-2 grid-rows-[200px,400px,100px] mx-36">
                <section className="col-span-2 row-start-1 mt-20 -ml-10">
                    <h1 className="py-8 text-5xl font-sanz">
                        Contáctanos
                    </h1>
                    <div className="pb-6 text-sm">
                        <p>
                            Siéntete libre de contactarnos en cualquier momento. Estamos aquí para ayudarte con cualquier consulta, sugerencia o comentario que tengas.
                        </p>
                        <p>
                            Nuestro equipo se pondrá en contacto contigo lo más rápido posible
                        </p>
                    </div>
                </section>

                <section className="col-span-1 mt-16 -ml-10">
                    <ContactForm />
                </section>

                <section className="col-start-2 row-start-2 h-96 w-96 mt-14 ml-16 bg-[#8100A1] p-10">
                    <div>
                        <h4 className="mb-10 text-xl ">
                            Informacion de contacto
                        </h4>
                        <ul>
                            <li className="flex items-center mb-14">
                                <img src="images/logos/Email-Icon.png" className="w-9 h-7 mr-6" />
                                <span className="text-sm font-light">
                                    acmtecqro@gmail.com
                                </span>
                                        
                            </li>
                            <li className="flex items-center mb-14">
                                <img src="images/logos/Location-Icon.png" className="w-9 h-9 mr-6" />
                                <span className="text-sm font-light">
                                Tecnologico de Monterrey Campus Queretaro
                                </span>
                            </li>
                            <li className="flex items-center mb-4">
                                <img src="images/logos/Clock-Icon.png" className="w-9 h-9 mr-6" />
                                <span className="text-sm font-light">
                                    9:00am - 7:00pm 
                                </span>
                            </li>
                        </ul>
                    </div>
                </section>

                <div className="flex col-start-2 space-x-6 mt-16 ml-44">
                    <Link className="rounded-md" href="https://www.instagram.com/acm_qro?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                        <img className="h-8" src="images/logos/Instagram-Icon.png"/>
                    </Link>
                    <Link className="rounded-md" href="https://chat.whatsapp.com/ERh3ObbVazi0o7NKpoFLAh">
                        <img className="h-8" src="images/logos/Whatsapp-Icon.png"/>
                    </Link>
                    <Link className="rounded-md" href="https://github.com/CommunityHub-Qro">
                        <img className="h-8" src="images/logos/Github-Icon.png"/>
                    </Link>
                </div>
                
            </div>
        </main> 
        
    );
}

export default Contact;