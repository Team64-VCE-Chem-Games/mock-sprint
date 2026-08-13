import type { Metadata } from 'next'
import BioCard from '../../../components/layout/BioCard'
import { bios } from '../../../../data/team_bios'
import { PeriodicTable } from '@/components/layout/PeriodicTable'

export const metadata: Metadata = {
  title: 'TeamPage',
}

export default function TeamPage() {
  return (
    <div className="space-y-6 max-w-2xl rounded-2xl border border-zinc-200 bg-olive-50 p-6 shadow-sm">
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
          bg="bg-[#E05074]"
          border="border-[#EC0B43]"
        />
        </div>
        <h1 className="text-2xl text-black tracking-tight">Meet the team!</h1>
      </div>

      <div className="space-y-6 grid grid-cols-2 gap-4">
        {bios.map((bio) => (
          <div
            key={bio.name}
            className="rounded-2xl bg-white p-6"
          >
            <BioCard bio={bio} />
          </div>
        ))}
      </div>
    </div>
  )
}