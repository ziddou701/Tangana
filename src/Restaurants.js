import useFetch from "./Components/useFetch";
import { useParams } from "react-router-dom";
import spinner from './Components/SVG/spinner.svg';
import StoreFront from "./Components/StoreFront";

const Restaurants = () => {

    const {id} = useParams();
    const url = ('http://localhost:4000/Restaurants/' + id); /// Address to fetch ( plud the id form the nav bar )
    const {data: restaurant , isLoading , error} = useFetch(url);
    console.log(restaurant);

    return ( 
        <div>
            {/* Error messages */}
            { error && <div className=" w-fit bg-red-400 text-red-800 rounded p-2 mx-auto  relative top-60 xl:top-96"> {error} </div>}
            {/* Loading Placeholders */}
            { isLoading && <div className="mx-auto flex flex-col relative top-36 xl:top-72 w-full"> 
            
            <br /><br />
            <div>
                <img src={spinner} className="w-10 xl:w-12 mx-auto top-1/3 relative animate-spin" />
                <p className="w-full text-center text-[#f1365d] mt-2" > Loading... </p>
            </div>
            <div><br /><br /><br /><br /><br /></div>
            
            </div>}

            { !isLoading && <StoreFront data={restaurant}/> } 

        </div>
    );
}
 
export default Restaurants;