"use client";

import Link from 'next/link';
import { FormEvent } from 'react';

export function ContactForm() {

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
                console.log(result);
            }
        } catch (error) {
            console.error("Error submitting the form:", error);
        }
    }


    return(
        <form onSubmit={handleSubmit} className='py-4 mt-4 flex flex-col gap-5 text-white'>
            <div className='flex flex-col'>
                <label className='block'>Nombre</label>
                <input name='name' className='border-r-0 border-l-0 border-b-1 border-t-0 border-white  bg-transparent w-96 focus:ring-0 focus:border-white' type="text"></input>
            </div>
            <div>
                <label className='block'>Email</label>
                <input name='email' className='border-r-0 border-l-0 border-b-1 border-t-0 border-white bg-transparent w-96 focus:ring-0 focus:border-white' type="text"></input>
            </div>
            <div>
                <label className='block'>Mensaje</label>
                <textarea name='message' className='border-r-0 border-l-0 border-b-1 border-t-0 border-white bg-transparent w-96 focus:ring-0 focus:border-white py-4'></textarea>
            </div>
            <button className='bg-[#8100A1] p-1 w-32 rounded-2xl ml-32 hover:bg-[#601982] hover:border-[#66198A] hover:border-2 hover:shadow-[#8F35BA] hover:shadow-lg' type='submit'>Enviar</button>
        </form>
)};
