import { format } from 'date-fns'

const date = new Date()
const result = format(date, 'dd/MM/yyyy')

export const user = {
  firstname: 'Mau',
  lastname: 'Light',
  birthdate: result,
  email: 'maulisseluz@gmail.com',
  avatar: 'https://i.postimg.cc/ncrD76xw/avatar.jpg',
  location: 'Santiago, CL',
  website: {
    url: 'https://screenwriters.quest/mau/',
    title: 'website'
  },
  social: {
    instagram: 'https://www.instagram.com/wakeup.mau/',
    linkedin: 'https://www.linkedin.com/in/mau-ulisse-luz-1295a9248/',
    discord: '/'
  },
  projects: [
    {
      id: 'a1',
      title: 'Godzilla: King of monsters',
      logline: 'The crypto-zoological agency Monarch faces off against a battery of god-sized monsters, including the mighty Godzilla, who collides with Mothra, Rodan, and his ultimate nemesis, the three-headed King Ghidorah.',
      poster: 'https://r4.wallpaperflare.com/wallpaper/846/216/1006/godzilla-movies-movie-poster-godzilla-king-of-the-monsters-wallpaper-d67b2ff76f7e0423ad9f90305992912b.jpg',
      pos: 1,
      genres: ['action', 'fantasy', 'kaiju']
    },
    {
      id: 'b2',
      title: 'John Wick: Chapter 4',
      logline: 'John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.',
      poster: 'https://e0.pxfuel.com/wallpapers/252/683/desktop-wallpaper-john-wick-chapter-3-parabellum-movie-poster-and-stock-cool-movie-posters.jpg',
      pos: 2,
      genres: ['action', 'adventure', 'crime']
    },
    {
      id: 'c3',
      title: 'Interstellar',
      logline: 'When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.',
      poster: 'https://i.imgur.com/zJx5Sef.jpeg',
      pos: 3,
      genres: ['sci-fi', 'action', 'drama']
    },
  ]
}