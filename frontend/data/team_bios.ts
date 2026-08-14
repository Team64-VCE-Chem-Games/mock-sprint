export type Bio = {
  name: string
  role: string
  about: string
  photo: string // path to image in public/images
}

export const bios: Bio[] = [
  {
    name: 'Madi Powell',
    role: 'Project Manager',
    about: 'placeholder placeholder placeholder placeholder placeholder placeholder placeholder',
    photo: '/images/bio/madi.png' // change to actual file name
  },
  {
    name: 'Lem Abrenio',
    role: 'UX Designer',
    about: 'placeholder placeholder placeholder placeholder placeholder placeholder placeholder',
    photo: '/images/bio/lem.png' // change to actual file name
  },
  {
    name: 'Hannah Thomson',
    role: 'Developer',
    about: 'placeholder placeholder placeholder placeholder placeholder placeholder placeholder',
    photo: '/images/bio/hannah.png' // change to actual file name
  },
  {
    name: 'Bailey Shield',
    role: 'Developer',
    about: 'Hi! I'm Bailey, and I'm a fourth year Computer and Network Engineering student. I chose this project because I have an interest in game development and an interest in chemistry, so this seemed like the best of both worlds. I'm proficient in object-oriented programming and principles, so I hope to be able to apply that expertise in this project.',
    photo: '/images/bio/bailey.jpeg'
  },
  {
    name: 'Lucas B',
    role: 'Developer',
    about: 'placeholder placeholder placeholder placeholder placeholder placeholder placeholder',
    photo: '/images/bio/lucas.png' // change to actual file name
  }
]