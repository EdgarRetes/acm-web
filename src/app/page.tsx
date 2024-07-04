import Link from "next/link";

import { CreatePost } from "~/app/_components/create-post";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const session = await getServerAuthSession();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-white overflow-hidden">
      {/* Main page: ACM y links de instagram / redes */}
      {/* <div className="flex flex-col items-center justify-center h-screen w-screen bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(Img/Fondo.jpg)`}}> */}
      <div className="flex flex-col items-center justify-center h-screen w-screen z-auto overflow-x-hidden relative top-0">
          <div className="relative w-full h-full">
            <img
              src="/Img/Fondo.jpg"
              className="w-full h-screen object-cover relative top-0 -z-10"
              alt="Fondo1"
            />
            <img
              src="/Img/Degradado.jpeg"
              className="w-full h-screen object-cover opacity-55 absolute top-0 rotate-180 -z-10"
              alt="Fondo2"
            />
          </div>
      </div>

      <div className="absolute top-0 h-screen w-screen flex flex-col items-center justify-center">
        <h1 className="text-xl font-extrabold tracking-tight sm:text-[5rem]">
          <span className="acm text-9xl">ACM</span>
        </h1>
        <div className="flex flex-col items-center gap-2 ">
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <p className="text-center text-2xl text-white">
              {session && <span>Logged in as {session.user?.name}</span>}
            </p>
            <Link
              href="https://www.instagram.com/acm_qro?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              className="rounded-full bg-white/30 px-10 py-3 font-semibold no-underline transition hover:bg-white/50 w-full"
            >
            Instagram
            </Link>
            <Link
              href={"/page2"}
              className="rounded-full bg-white/30 px-10 py-3 font-semibold no-underline transition hover:bg-white/50 w-full"
            >
            Siguiente Página
            </Link>
          </div>
        </div>
      </div>

    <div className="h-screen w-screen relative z-30 -mt-5">
      <img className="h-screen w-screen bg-[#45275D] blur-lg z-30 absolute top-0"/>
      <div className="absolute top-0 ">
      
      </div>

    </div>
    <div className="h-screen w-screen items-center -my-10 relative z-10">
        {/* <img src='Img/inicio.jpg' className="flex flex-col items-center justify-center h-screen w-full bg-cover bg-center bg-no-repeat blur-lg overflow-hidden -mt-10 z-10 absolute top-0 left-0 "/> */}
        <div className="relative w-full h-full">
            <div
              className="w-full h-screen object-cover absolute top-0" style={{backgroundColor: '#39275E'}}
            />
            <img
              src="/Img/Degradado.jpeg"
              className="w-full h-screen object-cover opacity-55 absolute top-0 "
              alt="Fondo2"
            />
          </div>
        {/* <div className="flex flex-col items-center justify-center h-screen w-screen bg-cover bg-center bg-no-repeat absolute top-2" style={{backgroundImage: `url(Img/inicio.jpg)`}}>
        
        </div> */}
    </div>
        
  </main>
  );
}
