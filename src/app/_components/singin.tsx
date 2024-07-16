import Link from 'next/link';
import React from 'react'
import { getServerAuthSession} from '~/server/auth';

export default async function Singin(){
    const session = await getServerAuthSession();
    
    return (
        <div>
            <Link href={session ? "/api/auth/signout" : "/api/auth/signin"} className="text-white rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20 w-full">
            {session ? "Sign out" : "Sign in"}
            </Link>
        </div>
    )

}