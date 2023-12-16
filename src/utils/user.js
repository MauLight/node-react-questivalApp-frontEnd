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
  badges: [
    'https://png.pngtree.com/png-clipart/20190921/original/pngtree-beautiful-badge-decoration-illustration-png-image_4757092.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyTmjoX9SXXG1Qa-et-WoTlmA4Orj6zx45gn60c57pKImR4EYQfyTBJp9Qj7rPzkdMU30&usqp=CAU',
    'https://png.pngtree.com/png-clipart/20190905/original/pngtree-blue-badge-decoration-illustration-png-image_4521134.jpg',
    'https://png.pngtree.com/png-clipart/20190905/original/pngtree-polygonal-badge-decoration-illustration-png-image_4524121.jpg',
    'https://png.pngtree.com/png-clipart/20190921/original/pngtree-honor-badge-decoration-illustration-png-image_4756120.jpg',
    'https://png.pngtree.com/png-clipart/20190921/original/pngtree-cross-badge-decoration-illustration-png-image_4755173.jpg',
    'https://png.pngtree.com/png-clipart/20190905/original/pngtree-yellow-badge-decoration-illustration-png-image_4523160.jpg',
    'https://png.pngtree.com/element_our/20190530/ourmid/pngtree-red-five-pointed-star-badge-image_1244666.jpg',
    'https://png.pngtree.com/element_our/20190530/ourmid/pngtree-yellow-atmosphere-badge-medal-image_1244668.jpg'
  ],
  certificates: [
    'https://marketplace.canva.com/EAFNlUJs5g4/2/0/1600w/canva-white-simple-certificate-of-appreciation-Fcz7KkZ5YaU.jpg',
    'https://marketplace.canva.com/EAFIEvneNCM/1/0/800w/canva-golden-elegant-certificate-of-appreciation-lucyjeOxOgs.jpg',
    'https://marketplace.canva.com/EAE9ooRAJnQ/1/0/1600w/canva-blue-simple-achievement-certificate-pX8z4TgiGd0.jpg',
  ],
  read: [
    {
      id: 'a1',
      title: 'Godzilla Minus One',
      logline: 'Post war Japan is at its lowest point when a new crisis emerges in the form of a giant monster, baptized in the horrific power of the atomic bomb.',
      poster: 'https://cdn.shopify.com/s/files/1/0057/3728/3618/files/Godzilla_Minus_One_Final_500x749.jpg?v=1702127060',
      pos: 1,
      genres: ['action', 'fantasy', 'kaiju']
    },
    {
      id: 'b2',
      title: 'Dances with Wolves',
      logline: 'Lieutenant John Dunbar, assigned to a remote western Civil War outpost, finds himself engaging with a neighbouring Sioux settlement, causing him to question his own purpose.',
      poster: 'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/3b5336529921632efcfb355f96aa706d_3bedd901-4687-4d61-8512-e54fecffe7d1_500x749.jpg?v=1573653991',
      pos: 2,
      genres: ['adventure', 'drama', 'western']
    },
    {
      id: 'c3',
      title: 'Green Book',
      logline: 'A working-class Italian-American bouncer becomes the driver for an African-American classical pianist on a tour of venues through the 1960s American South.',
      poster: 'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/d6bba0bf90c74eb85c52c38f4ac235c0_90573dc4-d1b6-4511-84f8-44d446c1089c_500x749.jpg?v=1573592563',
      pos: 3,
      genres: ['biography', 'comedy', 'drama']
    },
  ],
  favorites: [
    {
      id: 'a1',
      title: 'Avengers: Endgame',
      logline: 'After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos\' actions and restore balance to the universe.',
      poster: 'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/a0fc100359cecc91a64c5db49016d497_75b924a2-ce9f-4535-8b76-2ada42564bbd_500x749.jpg?v=1573593911',
      pos: 1,
      genres: ['action', 'adventure', 'drama']
    },
    {
      id: 'b2',
      title: 'Portrait of a Lady on Fire',
      logline: 'On an isolated island in Brittany at the end of the eighteenth century, a female painter is obliged to paint a wedding portrait of a young woman.',
      poster: 'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/portraitonfire_500x749.jpg?v=1583165266',
      pos: 2,
      genres: ['drama', 'romance', 'period']
    },
    {
      id: 'c3',
      title: 'The Dark Knight Rises',
      logline: 'Eight years after the Joker\'s reign of chaos, Batman is coerced out of exile with the assistance of the mysterious Selina Kyle in order to defend Gotham City from the vicious guerrilla terrorist Bane.',
      poster: 'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/9c21b56cf904fe165744c8c09b381c4f_884eee8c-fd65-4d8c-b2e6-ed33ff437f7d_500x749.jpg?v=1573590196',
      pos: 3,
      genres: ['action', 'drama', 'thriller']
    },
  ],
  saved: [
    {
      id: 'a1',
      title: 'The Tree of Life',
      logline: 'The story of a family in Waco, Texas in 1956. The eldest son witnesses the loss of innocence and struggles with his parents\' conflicting teachings.',
      poster: 'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/1f0662945d281701dcea7096be558efa_8d0f28a7-a54b-4299-9a44-26e8398679d1_500x749.jpg?v=1573588665',
      pos: 1,
      genres: ['drama', 'fantasy', 'divine']
    },
    {
      id: 'b2',
      title: 'Three Billboards Outside Ebbing, Missouri',
      logline: 'A mother personally challenges the local authorities to solve her daughter\'s murder when they fail to catch the culprit.',
      poster: 'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/a0b21732a3fcf726a5858f7eb0d22a05_7eff45cb-142f-4570-8560-416f520a2dd1_500x749.jpg?v=1573652446',
      pos: 2,
      genres: ['comedy', 'crime', 'drama']
    },
    {
      id: 'c3',
      title: 'Mother!',
      logline: 'A couple\'s relationship is tested when uninvited guests arrive at their home, disrupting their tranquil existence.',
      poster: 'https://cdn.shopify.com/s/files/1/0057/3728/3618/files/scan006_8e6a803b-e6e6-4fd9-bb8b-f3884bfd0d9a_500x749.jpg?v=1701443885',
      pos: 2,
      genres: ['drama', 'horror', 'mystery']
    },
  ],
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