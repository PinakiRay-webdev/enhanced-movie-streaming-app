import axios from "axios";
import React , {useState , useEffect} from "react";
import { useParams } from "react-router-dom";

const ProductionCompanies = () => {

    const base_url = import.meta.env.VITE_BASE_URL
    const api_key = import.meta.env.VITE_API_KEY
    const params = useParams()
    const movieID = params.id;

    const[productionHouseList , setProductionHouseList] = useState([])

    const getProductionImages = async () =>{
        try {
            const response = await axios(`${base_url}/movie/${movieID}?api_key=${api_key}`)
            const data = response.data
            setProductionHouseList(data.production_companies)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getProductionImages()
    },[movieID])

    

  return (
    <div className="w-full h-fit">
      <div className="max-w-screen-xl py-8 mx-auto">
        <h1 className="text-white text-4xl font-sans font-extralight border-b border-zinc-400">
          Production companies
        </h1>
        <div className="flex flex-wrap gap-16 my-8" >
            {productionHouseList.map((Element , id) =>(
                <img className="h-14 grayscale invert" key={id} src={`https://image.tmdb.org/t/p/original${Element.logo_path}`} alt="" />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductionCompanies;
