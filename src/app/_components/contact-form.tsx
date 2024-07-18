import Link from 'next/link';

export function ContactForm() {
    return(
        <form className='py-4 mt-4 flex flex-col gap-5 text-white'>
            <div className='flex flex-col'>
                <label className='block'>Nombre</label>
                <input className='border-r-0 border-l-0 border-b-1 border-t-0 border-white  bg-transparent w-96 focus:ring-0 focus:border-white' type="text"></input>
            </div>
            <div>
                <label className='block'>Email</label>
                <input className='border-r-0 border-l-0 border-b-1 border-t-0 border-white bg-transparent w-96 focus:ring-0 focus:border-white' type="text"></input>
            </div>
            <div>
                <label className='block'>Mensaje</label>
                <textarea className='border-r-0 border-l-0 border-b-1 border-t-0 border-white bg-transparent w-96 focus:ring-0 focus:border-white py-4'></textarea>
            </div>
            <button className='bg-[#8100A1] p-1 w-32 rounded-2xl ml-32 hover:bg-[#601982] hover:border-[#66198A] hover:border-2 hover:shadow-[#8F35BA] hover:shadow-lg' type='submit'>Enviar</button>
        </form>
)};
