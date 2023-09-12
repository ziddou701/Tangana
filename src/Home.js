import Categories from "./Components/Categories";
import NavBar from "./Components/NavBar";
import { useState } from "react";
import RestaurantList from "./Components/RestaurantList";
import useFetch from "./Components/useFetch";
import spinner from './Components/SVG/spinner.svg';

const Home = () => {

    const [ cartItemsNomber , setCartItemsNumber ] = useState(null);
    const url = ('http://localhost:4000/Restaurants'); /// Address to fetch
    const {data: Restaurants , isLoading , error} = useFetch(url);
    


    return ( 
        <div>
            <NavBar cartItemsNomber={cartItemsNomber} />
            <Categories/>
            {/* Error messages */}
            { error && <div className=" w-fit bg-red-400 text-red-800 rounded p-2 mx-auto  relative top-60 xl:top-96"> {error} </div>}

            {/* Loading Placeholders */}
            { isLoading && <div className="mx-auto flex flex-col relative top-36 xl:top-72 w-full"> 
                    <div className=" md:w-5/6 xl:w-3/4 mx-3 md:mx-auto relative">
                        <div className="mx-auto my-10 xl:mt-0 ">
                            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-6 md:gap-y-10">
                                <div className="h-64 shadow-xl rounded-xl border-2 animate-pulse">
                                    <div className=" bg-[#f0f0f0] bg-cover bg-center w-full h-3/4 rounded-tl-xl rounded-tr-xl "></div>
                                    <p className=" py-2.5 bg-[#f0f0f0] w-2/5 mt-2 ml-3 rounded-md"></p>
                                    <p className=" ml-3 py-2 w-4/5 bg-[#f0f0f0] mt-2 rounded-md "></p>
                                </div>
                                <div className="h-64 shadow-xl rounded-xl border-2 animate-pulse">
                                    <div className=" bg-[#f0f0f0] bg-cover bg-center w-full h-3/4 rounded-tl-xl rounded-tr-xl "></div>
                                    <p className=" py-2.5 bg-[#f0f0f0] w-2/5 mt-2 ml-3 rounded-md"></p>
                                    <p className=" ml-3 py-2 w-4/5 bg-[#f0f0f0] mt-2 rounded-md "></p>
                                </div>
                                <div className="h-64 shadow-xl rounded-xl border-2 animate-pulse">
                                    <div className=" bg-[#f0f0f0] bg-cover bg-center w-full h-3/4 rounded-tl-xl rounded-tr-xl "></div>
                                    <p className=" py-2.5 bg-[#f0f0f0] w-2/5 mt-2 ml-3 rounded-md"></p>
                                    <p className=" ml-3 py-2 w-4/5 bg-[#f0f0f0] mt-2 rounded-md "></p>
                                </div>
                                <div className="h-64 shadow-xl rounded-xl border-2 animate-pulse">
                                    <div className=" bg-[#f0f0f0] bg-cover bg-center w-full h-3/4 rounded-tl-xl rounded-tr-xl "></div>
                                    <p className=" py-2.5 bg-[#f0f0f0] w-2/5 mt-2 ml-3 rounded-md"></p>
                                    <p className=" ml-3 py-2 w-4/5 bg-[#f0f0f0] mt-2 rounded-md "></p>
                                </div>
                                <div className="h-64 shadow-xl rounded-xl border-2 animate-pulse">
                                    <div className=" bg-[#f0f0f0] bg-cover bg-center w-full h-3/4 rounded-tl-xl rounded-tr-xl "></div>
                                    <p className=" py-2.5 bg-[#f0f0f0] w-2/5 mt-2 ml-3 rounded-md"></p>
                                    <p className=" ml-3 py-2 w-4/5 bg-[#f0f0f0] mt-2 rounded-md "></p>
                                </div>
                                <div className="h-64 shadow-xl rounded-xl border-2 animate-pulse">
                                    <div className=" bg-[#f0f0f0] bg-cover bg-center w-full h-3/4 rounded-tl-xl rounded-tr-xl "></div>
                                    <p className=" py-2.5 bg-[#f0f0f0] w-2/5 mt-2 ml-3 rounded-md"></p>
                                    <p className=" ml-3 py-2 w-4/5 bg-[#f0f0f0] mt-2 rounded-md "></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br /><br />
                    <div>
                        <img src={spinner} className="w-10 xl:w-12 mx-auto top-1/3 relative animate-spin" />
                        <p className="w-full text-center text-[#f1365d] mt-2" > Loading... </p>
                    </div>
                    <div><br /><br /><br /><br /><br /></div>
            </div>}

            { Restaurants && <RestaurantList Restaurants={Restaurants} />} 
        </div> 
     );
}
 
export default Home;
