import Link from 'next/link';
import Image from 'next/image';
import { getServerAuthSession } from "~/server/auth";


export default async function Navbar() {  

  const session = await getServerAuthSession();
  return (
  <nav className="bg-gray-800 p-4 pl-0 z-50 fixed w-screen">
    <div className="pr-12 pl-2">
      <div className="relative flex items-center justify-between h-16">
        <div className="flex-1 flex justify-center sm:items-stretch sm:justify-start">
          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4 items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-3xl font-medium acm flex">
                  <Image src='images/logos/ACM_logo_CG.png' className='size-8 mr-2' alt='logo-amc'/>
                  ACM
                </Link>
            </div>
              <Link href="/page2" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Sobre Nosotros
              </Link>
              <Link href="/page2" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Eventos
              </Link>
              <Link href="/page2" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Proyectos
              </Link>
              <Link href="/page2" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Recursos
              </Link>
              <Link href="/page2" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Colaboradores
              </Link>
              <Link href="/page2" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Contacto
              </Link>
            </div>
          </div>
        </div>

        <div>
          <Link
                href={session ? "/api/auth/signout" : "/api/auth/signin"}
                className="text-gray-300 rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/50 w-full"
              >
                {session ? "Sign out" : "Sign in"}
          </Link>
        </div>
      </div>
    </div>
  </nav>

  );
}
