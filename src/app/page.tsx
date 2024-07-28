import Link from "next/link";

import { CreatePost } from "~/app/_components/create-post";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";
import { Carrusel } from "~/app/_components/carousel_hp";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const session = await getServerAuthSession();

  return (
    <main className="relative min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(images/backgrounds/homepage.png)'}}>

        <section className="min-h-screen flex flex-col items-center justify-center">
          <div className="grid grid-rows-8 grid-cols-4 items-center text-center text-white">
            <h1 className="text-2xl font-extrabold text-[96px] md:text-[240px] col-span-4 lg:col-start-2 lg:col-span-2 row-start-3 md:row-start-4 acm">
              A C M
            </h1>
            <div className="col-span-4 mx-5 md:mx-0 my-3 md:my-0 md:col-start-2 md:col-span-2 row-start-4 md:row-start-6 items-center">
              ¡Bienvenido a ACM! Somos un grupo estudiantil del Tecnológico de Monterrey, Campus Querétaro dedicado a la
              programación competitiva y otros proyectos de programación. No dudes en contactarnos.
            </div>
            <div className="col-span-4 md:col-start-2 md:col-span-2 row-start-5 md:row-start-8 flex items-center justify-center space-x-6">
              <Link className="hover:bg-cyan-700 rounded-md" href="https://www.instagram.com/acm_qro?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              >
                <img
                  src="images/logos/Instagram-Icon.png"
                />
              </Link>
              <Link className="hover:bg-cyan-700 rounded-md" href="https://chat.whatsapp.com/ERh3ObbVazi0o7NKpoFLAh">
                <img
                  src="images/logos/Whatsapp-Icon.png"
                />
              </Link>
              <Link className="hover:bg-cyan-700 rounded-md" href="https://github.com/CommunityHub-Qro">
                <img
                  src="images/logos/Github-Icon.png"
                />
              </Link>
              <Link className="hover:bg-cyan-700 rounded-md" href="/Contact">
                <img
                  src="images/logos/Email-Icon.png"
                />
              </Link>
            </div>
          </div>
        </section>

        <section className="min-h-screen flex flex-col justify-center">
          <div className="mt-40 grid grid-rows-12 grid-cols-5 text-white gap-y-20" style={{ gridTemplateRows: '100px auto' }}>
            <h1 className="col-start-1 md:col-start-2 mx-6 md:mx-0 row-start-4 col-span-5 text-3xl md:text-5xl font-bold border-x-fuchsia-700 border-l-8">
              <span className="invisible">
                ..
              </span>
              Información General
            </h1>
            <div className="row-start-5 col-start-1 md:col-start-2 mx-6 md:mx-0 col-span-3 md:col-span-2 space-y-6">
              <p>
                Association for Computing Machinery, o mejor conocido como "ACM", forma parte de la sociedad de 
                grupos estudiantiles del Tec de Monterrey - Campus Querétaro. Nuestro propósito es impulsar la programación
                competitiva, el desarrollo de conocimientos en tecnologías computacionales y generar una red de apoyo
                y comunidad entre los estudiantes de las carreras de Ingeniería Tecnologías Computacionales,
                Ingenieria en Ciencias de Datos y todas las carreras derivadas.
              </p>
              <p>
                Es nuestra ilusión seguir creciendo como comunidad y futuros profesionistas para así
                tener una gran preparación en este mundo cada vez más conectado a la tecnología.
              </p>
            </div>
            <div className="row-start-4 row-span-2 col-start-4 col-span-2 flex justify-center items-center">
              <img
                src="images/Mapache-home-page.png"
                className="max-w-full h-auto size-4/6"
                alt="Mapache"
              />
            </div>
          </div>
        </section>

        <section className="min-h-screen flex flex-col justify-center font-bold">
          <div className="mt-28 grid grid-rows-12 grid-cols-5 text-white">
            <div className="row-start-2 col-start-1 col-span-5">
              <h1 className="text-3xl md:text-5xl mx-5">
                Un poco de nosotros...
              </h1>
            </div>
            <div className="row-start-3 row-span-6 col-span-5 flex justify-center items-center">
              <Carrusel/>
            </div>
          </div>
        </section>
    </main>
  );
}
