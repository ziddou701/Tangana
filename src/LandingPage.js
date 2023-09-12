import LandingPageTopRow from "./Components/LandingPageTopRow ";
import LandingBg from './Components/SVG/Landing-Bg.png';
import SocialMediaHandles from "./Components/SocialMediaHandles";
import { Link } from "react-router-dom";

const LandingPage = () => {
    return (
        <div 
            style={{backgroundImage:`url(${LandingBg})`}} 
            className="h-screen bg-center lg:bg-cover bg-no-repeat m-0 p-0 border-transparent border relative "
        >
            
            <LandingPageTopRow/>

            <div className="py-8 w-full lg:w-1/2 justify-items-center absolute top-1/2 ">
                <form className="px-5 mx-auto">

                    <label htmlFor="search-bar"> <h1 className="text-white text-xl lg:text-2xl font-semibold ml-1"> Position </h1> </label>

                    <div className="w-full flex flex-row">
                        <input type="text" name="search-bar" className=" w-4/6 lg:w-3/4 py-1 mt-1 rounded-xl placeholder:text-sm placeholder:align-middle placeholder:text-center lg:placeholder:text-lg lg:mt-2"
                            placeholder="Veuillez entrer votre adresse"/>

                        <Link to={'/Home'} className=" w-1/4 mt-1 ml-auto text-center py-1 lg:py-2 lg:mt-2 lg:ml-auto lg:text-md lg:w-1/5 rounded-xl bg-gradient-to-b from-[#F1356D] to-[#C31549] text-white font-semibold drop-shadow-xl hover:bg-gradient-to-b hover:from-[#dd3064] hover:to-[#b01342] duration-300
                        hover:ring-2 hover:ring-[#f1365d]"> <button> Valider </button> </Link>
                    </div>

                    <div className="ml-2 mt-2 text-black underline underline-offset-1 lg:text-lg ">
                        <a href="sign-in"> login </a>
                    </div>
                </form>

            </div>
            
            <SocialMediaHandles/>

        </div>
     );
}
 
export default LandingPage;