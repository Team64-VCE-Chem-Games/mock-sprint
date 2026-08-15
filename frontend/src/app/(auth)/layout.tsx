import type { Metadata } from 'next'
import { PeriodicTable } from '@/components/layout/PeriodicTable'

export const metadata: Metadata = {
  title: 'Authentication',
}

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="aurora-bg flex min-h-screen flex-col items-center justify-center gap-6 px-4 py-8">
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

      <div className="w-full max-w-md rounded-2xl border border-zinc-200 bg-white p-8 shadow-lg">
        {children}
      </div>
    </div>
  )
}