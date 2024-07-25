"use client";

import { FormEvent, useRef } from 'react';
import Swal from 'sweetalert2'

export function ContactForm() {

    {/*Send to email*/} 
    const formRef = useRef<HTMLFormElement>(null);
    
    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        formData.append("access_key", "dc6f2b1b-5c72-474e-b2e7-2e5f3d9d837e");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const result = await response.json();
            if (result.success) {
                Swal.fire({
                    title: "¡Mensaje enviado con éxito!",
                    text: "Gracias por contactarnos. Nuestro equipo te responderá lo antes posible.",
                    icon: "success"
                }).then(() => {
                    formRef.current?.reset();
                });
            }
        } catch (error) {
            console.error("Error submitting the form:", error);
        }
    }

    return(
        <form ref={formRef} onSubmit={handleSubmit} className='py-2 lg:py-4 mt-4 flex flex-col gap-5 text-white'>

            {/*Contact Form*/} 

            <div className='flex flex-col mx-10 lg:mx-0'>
                <label className='block text-sm lg:text-base font-semibold'>Nombre</label>
                <input name='name' autoComplete='off' className='border-r-0 border-l-0 border-b-1 border-t-0 border-white bg-transparent w-72 lg:w-96 focus:ring-0 focus:border-white' type="text" required/>
            </div>
            <div className='flex flex-col mx-10 lg:mx-0'>
                <label className='block text-sm lg:text-base font-semibold'>Email</label>
                <input name='email' autoComplete='off' className='border-r-0 border-l-0 border-b-1 border-t-0 border-white bg-transparent w-72 lg:w-96 focus:ring-0 focus:border-white' type="email" required/>
            </div>
            <div className='flex flex-col mx-10 lg:mx-0'>
                <label className='block text-sm lg:text-base font-semibold'>Mensaje</label>
                <textarea name='message' autoComplete='off' className='border-r-0 border-l-0 border-b-1 border-t-0 border-white bg-transparent w-72 lg:w-96 focus:ring-0 focus:border-white py-4' required/>
            </div>
            <button className='bg-[#8100A1] p-1 w-32 rounded-2xl ml-32 hover:bg-[#601982] hover:border-[#66198A] hover:border-2 hover:shadow-[#8F35BA] hover:shadow-lg' type='submit'>Enviar</button>

            {/*Email customizations*/}

            {/*Email Subject line*/}
            <input type="hidden" name="subject" value="Mensaje nuevo: Formulario de contacto ACM" />
            {/*From Name*/}
            <input type="hidden" name="from_name" value="Contacto ACM"/>

        </form>
)};
