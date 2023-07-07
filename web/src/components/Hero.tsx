import Image from "next/image";

import Link from "next/link";
import Logo from "./logo";


export function Hero() {
  return (
    <div className="space-y-5">
      <Logo />

      <div className="max-w-[420px] space-y-4">
        <h1 className="mt-5 text-4xl font-bold leading-tight text-gray-50">Your time capsule</h1>
        <p className="text-lg leading-relaxed">Collect amazing moments of your jorney and share (if you want) with the world! 🌏</p>
      </div>

      <Link className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black hover:bg-green-400 transition-colors" href="/memories/new">REGISTER A MEMORY</Link>

    </div>
  )
}