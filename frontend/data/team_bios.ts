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
    about: 'UX-Designer for team!, I love graphic design, video editing, and photography lets me finally use my passion for school! I enjoy watching Valorant Esports (especially my favorite team Paper Rex!) and playing video games (mostly Valorant) in my free time. I also enjoy spending time with my friends and family. Currently Studying Bachelor of Information Technology at RMIT University. As someone who really loves gaming, this project stood out to me, as it also allowed me to explore Chemistry again, something I have not done since 2023!',
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