'use client'

import Image from 'next/image'
import { Bio } from '../../../data/team_bios'

type BioCardProps = {
  bio: Bio
}

export default function BioCard({ bio }: BioCardProps) {
  return (
    <article className="w-full flex flex-col gap-6">
      {/* IMAGE */}
        <div className="relative w-32 aspect-square rounded-full overflow-hidden">
          <Image
            src={bio.photo}
            alt={`${bio.name} preview`}
            fill sizes="(max-width: 1024px) 100vw, 500px"
            className="object-cover"
          />
        </div>
        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-4">
          <div>
            <h1 className="font-heading text-3xl font-bold text-(--color-text-primary)">
              {bio.name}
            </h1>
            <h2 className="font-heading text-xl rounded-md px-8 py-1 bg-blue-800 text-white shadow-lg inline-block">
              {bio.role}
            </h2>
          </div>

          {/* Summary */}
          <p className="text-(--color-text-primary) leading-relaxed text-pretty">
            {bio.about}
          </p>
        </div>
    </article>
  )
}