'use client'

import Image from 'next/image'
import { Bio } from '../../../data/team_bios'

type BioCardProps = {
  bio: Bio
}

export default function BioCard({ bio }: BioCardProps) {
  return (
    <article className="w-full flex flex-col gap-6">
      <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_500px] gap-10">
        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-4">
          <div>
            <h1 className="font-heading text-3xl font-bold text-(--color-text-primary)">
              {bio.name}
            </h1>
            <h2 className="font-heading text-xl text-(--color-text-primary)">
              {bio.role}
            </h2>
          </div>

          {/* Summary */}
          <p className="text-(--color-text-primary) leading-relaxed text-pretty">
            {bio.about}
          </p>
        </div>

        {/* RIGHT COLUMN */}
        <div className="relative w-full aspect-square">
          <Image
            src={bio.photo}
            alt={`${bio.name} preview`}
            fill sizes="(max-width: 1024px) 100vw, 500px"
            className="object-cover"
          />
        </div>
      </div>
    </article>
  )
}