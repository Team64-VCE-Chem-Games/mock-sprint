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
    about: 'I am a final year computer science student completing a minor in creative computing. I picked this project because I have a strong interest in game development and making interactive experiences so gamifying a part of the VCE curriculum I studied (now a while ago) piqued my interest!\n\nThe skills I bring to this project are strong organisation and time management, basic React skills and Unity/game development experience.',
    photo: '/images/bio/hannah_image.JPG' // change to actual file name
  },
  {
    name: 'Bailey Shield',
    role: 'Developer',
    about: 'Hi! I\'m Bailey, and I\'m a fourth year Computer and Network Engineering student. I chose this project because I have an interest in game development and an interest in chemistry, so this seemed like the best of both worlds. I\'m proficient in object-oriented programming and principles, so I hope to be able to apply that expertise in this project.',
    photo: '/images/bio/bailey.png'
  },
  {
    name: 'Lucas B',
    role: 'Developer',
    about: 'placeholder placeholder placeholder placeholder placeholder placeholder placeholder',
    photo: '/images/bio/lucas.png' // change to actual file name
  }
]