'use client';

import Link from 'next/link';
import { useAdmin } from '~/app/_components/Hooks/isAdmin';
import { useAnimetedNav } from '../Hooks/useAnimatedNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function Navbar({
  children,
}:
  {
    children: React.ReactNode;
  }
) {  
  const { isAdmin } = useAdmin();
  const isNavOpen = useAnimetedNav({});
  const [displayNavbar, setDisplayNavbar] = useState(false)

  return (
    <nav 
      className={`bg-slate-900 backdrop-blur-sm bg-opacity-40 p-3 pl-0 z-50 fixed w-screen transition-transform duration-500
      ${isNavOpen ? 'translate-y-0' : '-translate-y-full'}`}>
    <div className="px-3 md:pr-12 md:pl-2 ">
      <div className="relative flex items-center justify-between h-16">
        {/* Phone display */}
        <button className='block md:hidden'>
          <FontAwesomeIcon icon={displayNavbar? faX : faBars} className='text-white size-5' onClick={() => {setDisplayNavbar(!displayNavbar)}}/>
        </button>
        {/* Desktop display */}
        <div className="hidden flex-1 md:flex justify-center sm:items-stretch sm:justify-start">
          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4 items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="text-white hover:bg-slate-400 hover:bg-opacity-70 hover:text-white px-3 py-2 rounded-2xl text-3xl font-medium acm flex">
                  <img src='images/logos/ACM_logo_CW.png' className='size-8 mr-2 '/>
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
              <Link href="/Contact" className="text-gray-300 hover:bg-gray-700 hover:bg-opacity-40 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Contacto
              </Link>
            </div>
          </div>
        </div>
        
        <div className='flex'>
          {isAdmin ?
            (
              <div>
                <Link href="/admin-dashboard" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 md:px-10 py-2 rounded-md text-sm font-medium mr-2">
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
    </div>
    <div className={` ${displayNavbar ? 'h-[20rem]' : 'h-0'} bg-[#141f43] bg-opacity-40 w-screen transition-all duration-300 overflow-hidden `}>
      <div className='p-3'>
      <div className={`flex space-x-4 items-start flex-col `}>
            <div className="flex-shrink-0">
              <Link href="/" className="text-white hover:bg-slate-400 hover:bg-opacity-70 hover:text-white px-3 py-2 rounded-2xl text-3xl font-medium acm flex">
                  <img src='images/logos/ACM_logo_CW.png' className='size-8 mr-2 '/>
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
              <Link href="/Contact" className="text-gray-300 hover:bg-gray-700 hover:bg-opacity-40 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Contacto
              </Link>
            </div>
      </div>
    </div>
  </nav>

  );
}
