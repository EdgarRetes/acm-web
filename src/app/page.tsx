import Link from "next/link";

import { CreatePost } from "~/app/_components/create-post";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const session = await getServerAuthSession();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-white bg-cover bg-center bg-no-repeat">
      <div className="relative w-full h-full">
        <img
          src="/Img/inicio.png"
          className="w-full h-full object-cover"
          alt="Fondo1"
        />
        <img
          src="/Img/Fondo.png"
          className="w-full h-full object-cover mix-blend-multiply"
          alt="Fondo2"
        />
      </div>
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
            className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20 w-full"
          >
          Instagram
          </Link>
          <Link
            href={"/page2"}
            className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20 w-full"
          >
          Siguiente Página
          </Link>
        </div>
      </div>
    </main>
  );
}
