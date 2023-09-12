import { Link } from "react-router-dom";


const RestaurantList = ({Restaurants}) => {



        const handleClick = () => {
            console.log('hello clicked '+ Restaurants.id);
        }


    return ( 
        <div>
            <div className=" md:w-5/6 xl:w-3/4 xl:mt-8 mx-3 md:mx-auto relative top-36 xl:top-60">
                <div className="mx-auto my-10 xl:mt-0 ">
                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-6 md:gap-y-10 ">

                        {Restaurants.map( (restaurant) => (
                            <div className="h-64 shadow-xl rounded-xl hover:shadow-2xl hover:-mt-2 duration-200 cursor-default" key={restaurant.id}>
                                <Link to={`/Restaurants/${restaurant.id}`} >
                                {/* Image ------------------------------------------------*/}
                                <div 
                                    style={{backgroundImage: `url(${restaurant.Image})`}} 
                                    className=" bg-[#f0f0f0] bg-cover bg-center w-full h-3/4 rounded-tl-xl rounded-tr-xl ">
                                </div>
                                {/* Name --------------------------------------------------*/}
                                <p className="text-[#f1365d] font-bold text-lg mt-1 ml-3">
                                    {restaurant.Name}
                                </p>
                                {/* ETA and Delivery Fee ----------------------------------*/}
                                <div className="flex flex-row">
                                    <p className=" ml-4 text-sm text-[#00aa00] font-semibold">
                                        20 - 30 min 
                                    </p>
                                    <p className="ml-4 text-sm text-[#6e6e6e] font-semibold">
                                        1.500 F CFA | Frais de livraison 
                                    </p>
                                </div>    
                                </Link>
                            </div>
                        ))}

                        <div>
                            <br /><br /><br /><br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default RestaurantList;