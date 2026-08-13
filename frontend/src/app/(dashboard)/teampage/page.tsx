import type { Metadata } from 'next'
import BioCard from '../../../components/layout/BioCard'
import { bios } from '../../../../data/team_bios'
import { PeriodicTable } from '@/components/layout/PeriodicTable'

export const metadata: Metadata = {
  title: 'TeamPage',
}

export default function TeamPage() {
  return (
    <div className="space-y-6 max-w-2xl">
      <div className= "flex flex-col items-center gap-4">
        <div className="flex items-center justify-center flex-row gap-0">
        <PeriodicTable 
          number={52}
          symbol="Te"
          name="Tellurium"
          bg="bg-blue-600"
          border="border-blue-800"
        />
        <PeriodicTable 
          number={95}
          symbol="Am"
          name="Americium"
          bg="bg-blue-600"
          border="border-blue-800"
        />
        </div>
        <h1 className="text-2xl font-bold tracking-tight">Meet the team!</h1>
      </div>

      <div className="space-y-6">
        {bios.map((bio) => (
          <div
            key={bio.name}
            className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
          >
            <BioCard bio={bio} />
          </div>
        ))}
      </div>
    </div>
  )
}