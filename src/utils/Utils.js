import { TiUser } from "react-icons/ti";
import { BiCameraMovie } from "react-icons/bi";
import { IoMdTv  , IoIosRadio} from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { MdOutlineSportsCricket } from "react-icons/md";
import { GoHome } from "react-icons/go";


export const sidebarNav = [
    {
        id : 1,
        icon : TiUser,
        text : "Login"
    },
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