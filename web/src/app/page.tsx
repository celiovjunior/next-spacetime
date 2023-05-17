import { User } from "lucide-react";

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
