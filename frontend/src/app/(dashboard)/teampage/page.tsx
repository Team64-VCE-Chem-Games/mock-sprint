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
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Team Page</h1>
        <p className="text-zinc-500 text-sm mt-1">We will set up the team page here</p>
        <div className="flex flex-row gap-0">
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