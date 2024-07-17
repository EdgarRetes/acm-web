import { getServerSession } from "next-auth";
import { authOptions } from "~/server/auth";
import Link from "next/link";

const Page2 = async () => {
    const session = await getServerSession(authOptions)
    console.log(session?.user.role)
    
    return (
        <main className="flex min-h-screen flex-col  bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
            <div className="flex flex-col  gap-2 m-3">
                <div className="flex flex-col  gap-4 w-[10rem]">
                    <Link
                        href="/"
                        className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
                    >
                        Regresar
                    </Link>

                </div>
            </div>
        </main>
    );
}

export default Page2;