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
    about: 'I am a final-year ICT student minoring in Data Science at RMIT University. I chose this project because I am passionate about alternative ways of learning in school. As someone also studying Early Childhood Care and Education, I understand the challenges of non-interactive study. In this project team I bring clear communication and organisational skills.',
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
    about: 'placeholder placeholder placeholder placeholder placeholder placeholder placeholder',
    photo: '/images/bio/bailey.png' // change to actual file name
  },
  {
    name: 'Lucas B',
    role: 'Developer',
    about: 'placeholder placeholder placeholder placeholder placeholder placeholder placeholder',
    photo: '/images/bio/lucas.png' // change to actual file name
  }
]