import Link from 'next/link';

export function ContactForm() {
    return(
        <form className='py-4 mt-4 flex flex-col gap-4'>
            <div className='flex flex-col gap-4'>
                <label className='block text-white'>Nombre</label>
                <input className='border-r-0 border-l-0 border-b-1 border-t-0 border-white text-white bg-transparent w-96' type="text"></input>
            </div>
            <div>
                <label className='block text-white' >Email</label>
                <input className='border-r-0 border-l-0 border-b-1 border-t-0 border-white text-white bg-transparent w-96' type="text"></input>
            </div>
            <div>
                <label className='block text-white'>Mensaje</label>
                <textarea className='border-r-0 border-l-0 border-b-1 border-t-0 border-white text-white bg-transparent w-96'></textarea>
            </div>
            <button className='bg-[#8100A1] p-2 w-32 rounded-2xl ml-32 mt-5' type='submit'>Enviar</button>
        </form>
)};
