import optionsButton from './SVG/Options.svg';
import logo from './SVG/Logo-ouline.svg';
import { useState } from 'react';
import DropDownMenuLP from './DropDownMenuLP';

const LandingPageTopRow = () => {


    const [open , setOpen ] = useState(false);
    const clickHandler = () => {
        setOpen(!open);
        // console.log(open);
    }

    return (
        <div>

            {/* ---------- dropdownmenulp is the drop down from the hamburger menu on the nav bar ------------------------ */}

        { open && <DropDownMenuLP clickHandler={clickHandler} />}

        <div className="Landing-Page-Top-Row">
            <div className="conatiner flex flex-row 
                flex-nowrap place-items-center mx-auto my-0 py-2 px-4 mt-2 lg:mt-8 " >

                <div className="flex flex-row content-start ">
                    <div className='my-auto mx-0 p-2 place-items-center rounded-lg bg-white drop-shadow-lg '>
                        <img className=' w-6 h-6 lg:w-8 lg:h-8' src={logo} alt="logo" />
                    </div>
                    <div className='font-bold text-2xl my-auto mx-2 lg:text-4xl'>
                        <h1 className='text-white'> Tangana </h1>
                    </div>
                </div>

                <div className='my-auto ml-auto px-4'>
                    <button onClick={clickHandler}>
                        <img className='w-8 h-8 lg:hover:w-9 lg:hover:h-9 duration-300 ' src={optionsButton} alt="options" />
                    </button>
                </div>
            </div>
        </div>
        </div>
     );
}
 
export default LandingPageTopRow ;