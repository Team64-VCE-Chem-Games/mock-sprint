import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Home - VCE Chemistry Games',
  description: 'VCE Chemistry Games',
}

export default function LandingPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#9bd58a] p-8">
      <div className="flex flex-col items-center gap-8">

        {/* VCE periodic-table logo */}
        <div className="flex">
          <div className="flex h-30 w-30 flex-col justify-between border-4 border-blue-800 bg-blue-600 p-2 text-white shadow-lg">
            <span className="text-lg font-semibold leading-none">23</span>
            <span className="text-center text-5xl font-bold leading-none">V</span>
            <span className="text-center text-base leading-none">Vanadium</span>
          </div>

          <div className="flex h-30 w-30 flex-col justify-between border-4 border-green-700 bg-lime-500 p-2 text-white shadow-lg">
            <span className="text-lg font-semibold leading-none">58</span>
            <span className="text-center text-5xl font-bold leading-none">Ce</span>
            <span className="text-center text-base leading-none">Cerium</span>
          </div>
        </div>

        <h1 className="text-4xl font-normal tracking-tight text-zinc-900">
          Chemistry Games
        </h1>

        <div className="flex gap-4">
          <Link
            href="/auth/signin"
            className="inline-flex min-w-40 items-center justify-center border border-zinc-300 bg-white px-8 py-5 text-lg font-medium text-zinc-900 shadow-lg transition-colors hover:bg-zinc-100"
          >
            Sign in
          </Link>

          <Link
            href="/auth/signup"
            className="inline-flex min-w-52 items-center justify-center border border-zinc-300 bg-white px-8 py-5 text-lg font-medium text-zinc-900 shadow-lg transition-colors hover:bg-zinc-100"
          >
            Create account
          </Link>
        </div>

      </div>
    </main>
  )
}
