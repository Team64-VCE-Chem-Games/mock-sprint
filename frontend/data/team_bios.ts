export type Bio = {
  name: string
  role: string
  about: string
  photo: string // path to image in public/images
}

export const bios: Bio[] = [
  {
    name: 'Hannah Thomson',
    role: 'Developer',
    about: 'placeholder',
    photo: '/images/bio/hannah.png' // change to actual file name
  },
  {
    name: 'Madi Powell',
    role: 'Project Manager',
    about: 'placeholder',
    photo: '/images/bio/madi.png' // change to actual file name
  },
  {
    name: 'Bailey Shield',
    role: 'Developer',
    about: 'placeholder',
    photo: '/images/bio/bailey.png' // change to actual file name
  },
  {
    name: 'Lem Abrenio',
    role: 'UX Designer',
    about: 'placeholder',
    photo: '/images/bio/lem.png' // change to actual file name
  },
  {
    name: 'Lucas B',
    role: 'Developer',
    about: 'placeholder',
    photo: '/images/bio/lucas.png' // change to actual file name
  }
]