import Image from "next/image";
import logo from '../assets/logo.svg';


export function Hero() {
  return (
    <div className="space-y-5">
    <Image src={logo} alt="NLW Event's logo" />

    <div className="max-w-[420px] space-y-4">
      <h1 className="mt-5 text-4xl font-bold leading-tight text-gray-50">Your time capsule</h1>
      <p className="text-lg leading-relaxed">Collect amazing moments of your jorney and share (if you want) with the world! 🌏</p>
    </div>

    <a className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black hover:bg-green-400 transition-colors" href="">REGISTER A MEMORY</a>

  </div>
  )
}