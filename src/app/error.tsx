"use client"

import Link from "next/link"

export default function ErrorBoundary() {
  return (
    <div className="w-screen h-screen place-content-center text-center">
      <p className="text-2xl font-semibold block">
        Error fetching pokemon. 
      </p>
      <p className="text-xl font-semibold">
        Please ckeck the ID or name or select a pokemon from the <Link className="hover:underline hover:text-red-500" href={'/pokemon'}>Pokemon lot</Link>. 
      </p>
    </div>
  )
}