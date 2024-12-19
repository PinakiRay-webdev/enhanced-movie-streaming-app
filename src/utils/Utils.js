import { TiUser } from "react-icons/ti";
import { BiCameraMovie } from "react-icons/bi";
import { IoMdTv  , IoIosRadio} from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { MdOutlineSportsCricket } from "react-icons/md";
import { GoHome } from "react-icons/go";

//genre assets
import action from '../assets/GenreAssets/action.jpg'
import adventure from '../assets/GenreAssets/adventure.jpg'
import anime from '../assets/GenreAssets/anime.jpg'
import comedy from '../assets/GenreAssets/comedy.jpg'
import crime from '../assets/GenreAssets/crime.jpg'
import documentary from '../assets/GenreAssets/documentary.jpg'
import drama from '../assets/GenreAssets/drama.jpg'
import family from '../assets/GenreAssets/family.jpg'
import fantasy from '../assets/GenreAssets/fantasy.jpg'
import history from '../assets/GenreAssets/history.jpg'
import horror from '../assets/GenreAssets/horror.jpg'
import music from '../assets/GenreAssets/music.jpg'
import mystery from '../assets/GenreAssets/mystery.jpg'
import romance from '../assets/GenreAssets/romance.jpg'
import scifi from '../assets/GenreAssets/scifi.jpg'
import series from '../assets/GenreAssets/series.jpg'
import thriller from '../assets/GenreAssets/thriller.jpg'
import war from '../assets/GenreAssets/war.jpg'
import western from '../assets/GenreAssets/western.jpg'


export const sidebarNav = [
    {
        id : 7,
        icon : GoHome,
        text : "Home"
    },
    {
        id : 2,
        icon : CiSearch,
        text : "Search"
    },
    {
        id : 3,
        icon : BiCameraMovie,
        text : "Movies"
    },
    {
        id : 4,
        icon : IoMdTv,
        text : "Tv Shows"
    },
    {
        id : 5,
        icon : MdOutlineSportsCricket,
        text : "Sports"
    },
    {
        id : 6,
        icon : IoIosRadio,
        text : "Radio"
    },
]

export const genres = [
    {
      id: 28,
      name: "Action",
      imgage : action, // Dark Red
    },
    {
      id: 12,
      name: "Adventure",
      imgage : adventure, // Dark Green
    },
    {
      id: 16,
      name: "Animation",
      imgage : anime, // Dark Slate Blue
    },
    {
      id: 35,
      name: "Comedy",
      imgage : comedy, // Dark Olive Green
    },
    {
      id: 80,
      name: "Crime",
      imgage : crime, // Dark Red
    },
    {
      id: 99,
      name: "Documentary",
      imgage : documentary, // Dark Slate Gray
    },
    {
      id: 18,
      name: "Drama",
      imgage : drama, // Saddle Brown
    },
    {
      id: 10751,
      name: "Family",
      imgage : family, // Sea Green
    },
    {
      id: 14,
      name: "Fantasy",
      imgage : fantasy, // Indigo
    },
    {
      id: 36,
      name: "History",
      imgage : history, // Saddle Brown
    },
    {
      id: 27,
      name: "Horror",
      imgage : horror, // Dark Charcoal
    },
    {
      id: 10402,
      name: "Music",
      imgage : music, // Dark Magenta
    },
    {
      id: 9648,
      name: "Mystery",
      imgage : mystery, // Midnight Blue
    },
    {
      id: 10749,
      name: "Romance",
      imgage : romance, // Maroon
    },
    {
      id: 878,
      name: "Science Fiction",
      imgage : scifi, // Dark Slate Gray
    },
    {
      id: 10770,
      name: "TV Movie",
      imgage : series, // Olive Drab
    },
    {
      id: 53,
      name: "Thriller",
      imgage : thriller, // Dark Red
    },
    {
      id: 10752,
      name: "War",
      imgage : war, // Dark Slate Gray
    },
    {
      id: 37,
      name: "Western",
      imgage : western, // Sienna
    },
  ];

  export const showNavBAR = [
    {
      id : 1,
      item : 'episodes',
    },
    {
      id : 2,
      item : 'production and networks'
    },
    {
      id : 3,
      item : 'cast'
    }
  ]
