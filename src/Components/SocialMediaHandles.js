import facebook from './SVG/facebook.svg';
import instagram from './SVG/instagram.svg';
import snapchat from './SVG/snapchat.svg';

const SocialMediaHandles = () => {
    return ( 
        <div className=" flex flex-col w-full lg:w-1/2 relative top-2/3 ">

            <div className=' mx-auto mb-4 relative text-center px-8 '>
                <p className="text-white text-sm " > Visitez nos reseaux sociaux et platformes pour plus d'info et promos... </p>
            </div>

            <div className='flex mx-auto '>
                <div className='mx-1 lg:mx-3 ' > <img src={facebook} alt="facebook" /> </div>
                <div className='mx-1 lg:mx-3 ' > <img src={instagram} alt="instagram" /> </div>
                <div className='mx-1 lg:mx-3 ' > <img src={snapchat} alt="snapchat" /> </div>
            </div>
        </div>
     );
}
 
export default SocialMediaHandles;