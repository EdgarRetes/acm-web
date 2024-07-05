import Link from "next/link";

import { CreatePost } from "~/app/_components/create-post";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const session = await getServerAuthSession();

  return (
    <main className="relative min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(images/backgrounds/homepage.png)', minHeight: '400vh', backgroundSize: 'cover', backgroundAttachment: 'scroll'}}>
        
        <div className="grid grid-rows-5 grid-cols-4 items-center text-center text-white">
          <h1 className="text-xl tracking-wider font-extrabold sm:text-[15rem] col-start-2 col-span-2 row-start-3">
            <span className="acm text-9xl">ACM</span>
          </h1>
          <div className="col-start-2 col-span-2 row-start-4 items-center">
            ¡Bienvenido a ACM! Somos un grupo estudiantil del Tecnológico de Monterrey, Campus Querétaro dedicado a la
            programación competitiva y otros proyectos de programación. No dudes en contactarnos.
          </div>
          <div className="col-start-2 col-span-2 row-start-5 flex items-center justify-center space-x-4">
            <Link href="https://www.instagram.com/acm_qro?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            >
              <img
                src="images/logos/Instagram-Icon.png"
              />
            </Link>
            <Link href="/"
            >
              <img
                src="images/logos/Whatsapp-Icon.png"
              />
            </Link>
            <Link href="/"
            >
              <img
                src="images/logos/Github-Icon.png"
              />
            </Link>
            <Link href="/"
            >
              <img
                src="images/logos/Email-Icon.png"
              />
            </Link>
          </div>
        </div>
  
    </main>
  );
}
