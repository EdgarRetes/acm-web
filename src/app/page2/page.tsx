import Link from "next/link";

const Page2 = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
            <div className="flex flex-col items-center gap-2">
                <div className="flex flex-col items-center justify-center gap-4">
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