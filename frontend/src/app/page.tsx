import type { Metadata } from 'next'
import Link from 'next/link'
import { PeriodicTable } from '@/components/layout/PeriodicTable'

export const metadata: Metadata = {
  title: 'Home - VCE Chemistry Games',
  description: 'VCE Chemistry Games',
}

export default function LandingPage() {
  return (
    <main className="aurora-bg flex min-h-screen flex-col items-center justify-center p-8">
      <div className="flex flex-col items-center gap-8">

        {/* VCE periodic-table logo */}
        <div className="flex">
          <PeriodicTable
            number={23}
            symbol="V"
            name="Vanadium"
            bg="bg-blue-600"
            border="border-blue-800"
          />

          <PeriodicTable
            number={58}
            symbol="Ce"
            name="Cerium"
            bg="bg-lime-500"
            border="border-green-700"
          />
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
