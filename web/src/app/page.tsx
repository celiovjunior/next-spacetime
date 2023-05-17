import { User } from "lucide-react";
import Image from 'next/image'
import logo from '../assets/logo.svg';

export default function Home() {
  return (
    <main className="grid grid-cols-2 min-h-screen">
      {/** Left */}
      <div className="flex flex-col items-start justify-between px-28 py-16 relative overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover">

        {/* Blur */}
        <div className="rounded-full absolute right-0 top-1/2 h-[288px] w-[526px] bg-purple-700 opacity-50 -translate-y-1/2 translate-x-1/2 blur-full" />

        {/* Stripes */}
        <div className="absolute right-2 top-0 bottom-0 w-2 bg-stripes" />

        {/* Sign In */}
        <a href="" className="hover:text-gray-50 flex items-center gap-3 text-left">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
            <User className="h-5 w-5 text-gray-500" />
          </div>

          <p className="text-sm leading-snug max-w-[200px]">
            <span className="underline">Create your account</span> and save your memories!
          </p>
        </a>

        {/* Hero */}
        <div className="space-y-5">
          <Image src={logo} alt="NLW Event's logo" />

          <div className="max-w-[420px] space-y-4">
            <h1 className="mt-5 text-4xl font-bold leading-tight text-gray-50">Your time capsule</h1>
            <p className="text-lg leading-relaxed">Collect amazing moments of your jorney and share (if you want) with the world! 🌏</p>
          </div>

          <a className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black hover:bg-green-400 transition-colors" href="">REGISTER A MEMORY</a>

        </div>

        {/* Copyright */}
        <div className="text-sm leading-relaxed text-gray-200">
          Project made by <a target="_blank" rel="noreferrer" className="underline hover:text-gray-100" href="https://github.com/celiovjunior">Celio V. Junior</a>
        </div>


      </div>

      {/* Right*/}
      <div className="flex flex-col p-16 bg-[url(../assets/bg-stars.svg)] bg-cover">
        <div className="flex h-full items-center justify-center">
          <p className="text-center leading-relaxed w-[360px]">You haven't registered any memories yet, start {' '}<a href="" className="underline hover:text-gray-50"> creating now!</a></p>
        </div>
      </div>

    </main>
  )
}
