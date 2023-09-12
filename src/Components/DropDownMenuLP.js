import user from './SVG/user.svg';
import add from './SVG/add.svg';
import bike from './SVG/bike.svg';
import shop from './SVG/shop.svg';
import hi from './SVG/hi.svg';
import exit from './SVG/x.svg';

const DropDownMenuLP = ( {clickHandler}) => {

    return ( 
        <div className=' DropDown absolute top-12 lg:top-20 right-0 lg:mr-8 p-2 bg-[#f3f3f3] lg:bg-[#f0f0f0] shadow-lg rounded-xl z-20 '>
            <ul className=' dropDownMenuLP text-center font-semibold '>
                
                <li className='p-1 m-1 rounded-2xl hover:bg-[#cfcfcf] duration-200 flex ' > <img src={user} className='w-4 mx-4 ' /> Login / Connect </li>
                <li className='p-1 m-1 rounded-2xl hover:bg-[#cfcfcf] duration-200 flex ' > <img src={add} className='w-4 mx-4 '/> Creer un Compte </li>
                <br /> <hr></hr> <br />
                <li className='p-1 m-1 rounded-2xl hover:bg-[#cfcfcf] duration-200 flex ' > <img src={bike} className='w-4 mx-4 ' /> Devenir Driver </li>
                <li className='p-1 m-1 rounded-2xl hover:bg-[#cfcfcf] duration-200 flex ' > <img src={shop} className='w-4 mx-4 ' /> Devenir Partnair </li>
                <li className='p-1 m-1 rounded-2xl hover:bg-[#cfcfcf] duration-200 flex ' > <img src={hi} className='w-4 mx-4 ' /> Contactez nous </li>
                <hr></hr>
                <li className='p-1 m-1 rounded-2xl hover:bg-[#cfcfcf] duration-200 flex ' onClick={clickHandler} > <img src={exit} className='w-4 mx-auto'/> </li>
            </ul>
        </div>
    );
}
 
export default DropDownMenuLP;