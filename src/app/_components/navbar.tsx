'use client'
import Link from 'next/link';
import { useAdmin } from '~/app/_components/Hooks/isAdmin';


export default function Navbar(
{children,}
  :{children: React.ReactNode;}
) {  
  const { isAdmin } = useAdmin();
  return (
  <nav className={` pl-0 z-50 w-full fixed`}>
    <div className="pr-12 pl-2 bg-slate-800">
      <div className="relative flex items-center justify-between h-16">
        <div className="flex-1 flex justify-center sm:items-stretch sm:justify-start">
          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4 items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-3xl font-medium acm flex">
                  <img src='images/logos/ACM_logo_CG.png' className='size-8 mr-2' alt='logo-amc'/>
                  ACM
                </Link>
            </div>
              <Link href="/about-us" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Sobre Nosotros
              </Link>
              <Link href="/events" className="text-gray-300 hover:bg-gray-700 hover:bg-opacity-40 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Eventos
              </Link>
              <Link href="/projects" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Proyectos
              </Link>
              <Link href="/ResourcesACM" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Recursos
              </Link>
              <Link href="/collaborators-page" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Colaboradores
              </Link>
              <Link href="/page2" className="text-gray-300 hover:bg-gray-700 hover:bg-opacity-40 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Contacto
              </Link>
            </div>
          </div>
        </div>
        {isAdmin ? 
          (
            <div>
              <Link href="/admin-dashboard" className="text-gray-300 hover:bg-gray-700 hover:text-white px-10 py-2 rounded-md text-sm font-medium mr-2">
                Admin
              </Link>
            </div>
          ):(
            <span/>
            )
        }
        {/* Sing in button */}
        {children}

      </div>
    </div>
  </nav>

  );
}
