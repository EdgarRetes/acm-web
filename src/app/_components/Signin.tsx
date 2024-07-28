import Link from 'next/link';
import React from 'react'
import { getServerAuthSession } from "~/server/auth";

export default async function Signin() {    
  const session = await getServerAuthSession();

  return (
    <div>
      <Link
          href={session ? "/api/auth/signout" : "/api/auth/signin"}
          className="text-gray-300 rounded-full bg-white/10 px-5 py-2 md:px-10 md:py-3 font-semibold no-underline transition hover:bg-white/50 w-full"
          >
          {session ? "Sign out" : "Sign in"}
        </Link>
    </div>
  )
}

