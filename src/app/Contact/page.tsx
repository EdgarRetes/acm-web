import Link from "next/link";
import { ContactForm } from "~/app/_components/contact-form";

const Contact = () => {
    return (
        <main className="relative min-h-screen flex items-center justify-center bg-cover bg-no-repeat bg-center " style={{backgroundImage: 'url(images/backgrounds/contacto.png)', backgroundSize: 'cover', backgroundAttachment: 'fixed'}}>
            <div className="grid grid-rows-4 grid-cols-6 text-white gap-y-6">
                <div className="col-start-2 row-start-3 text-5xl font-sanz">
                Contáctanos
                </div>
                <div className="col-start-2 col-end-6 row-start-4 text-sm">
                    <p>
                        Siéntete libre de contactarnos en cualquier momento. Estamos aquí para ayudarte con cualquier consulta, sugerencia o comentario que tengas.
                    </p>
                    <p>
                        Nuestro equipo se pondrá en contacto contigo lo más rápido posible
                    </p>
                </div>
                <div className="col-start-2 row-start-5">
                    <ContactForm />
                </div>
                <div className="col-start-4 col-end-6 row-start-5 bg-[#8100A1] w-10/12 h-80 ">
                    <h4 className="ml-10 mt-8 mb-10 text-xl ">
                        Informacion de contacto
                    </h4>

                    <ul className="ml-10">
                        <li className="flex items-center mb-8">
                            <img src="images/logos/Clock-Icon.png" className="w-8 h-8 mr-2" />
                            <span className="text-sm font-light">
                            correoACM@correo.com
                            </span>
                            
                        </li>
                        <li className="flex items-center mb-8">
                            <img src="images/logos/Location-Icon.png" className="w-8 h-8 mr-2" />
                            <span className="text-sm font-light">
                            Tecnologico de Monterrey Campus Queretaro
                            </span>
                        </li>
                        <li className="flex items-center mb-8">
                            <img src="images/logos/Email-Icon.png" className="w-8 h-6 mr-2" />
                            <span className="text-sm font-light">
                                9:00am - 7:00pm 
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="col-start-4 col-end-6 row-start-5 flex space-x-6 mt-auto ml-36">
                        <Link className="rounded-md" href="https://www.instagram.com/acm_qro?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                        >
                            <img
                            src="images/logos/Instagram-Icon.png"
                            />
                        </Link>
                        <Link className="rounded-md" href="https://chat.whatsapp.com/ERh3ObbVazi0o7NKpoFLAh">
                            <img
                            src="images/logos/Whatsapp-Icon.png"
                            />
                        </Link>
                        <Link className="rounded-md" href="/">
                            <img
                            src="images/logos/Github-Icon.png"
                            />
                        </Link>
                </div>
            </div>
        </main> 
        
    );
}

export default Contact;