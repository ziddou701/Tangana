import optionsButton from './SVG/Options.svg';
import LookUp from './SVG/LookUp.svg';
import userCircle from './SVG/user-circle.svg';
import cartlogo from './SVG/cart.svg';
import locationPin from './SVG/location-dot.svg'
import tripleDot from './SVG/triple-dot.svg';
import { useState } from 'react';
import DropDownMenuLP from './DropDownMenuLP';

const NavBar = (props) => {

    const cartItemsNomber = props.cartItemsNomber;
    const [open , setOpen ] = useState(false);            
    const clickHandler = () => {
        setOpen(!open);
    }    

    return (
        <div>

            {/* ---------- dropdownmenulp is the drop down from the hamburger menu on the nav bar ------------------------ */}

            { open && <DropDownMenuLP clickHandler={clickHandler} />}

            <div>
                {/* --------------------------------- Only displays inline flex on Xlarge screens ------------------------ */}

                <div className=' conatiner flex-row flex-nowrap w-full top-0 py-5 bg-[#ffffff] hidden xl:inline-flex fixed z-10'>

                    <div className="flex flex-row ml-4 ">

                        <button onClick={clickHandler}>
                            <img className='mx-2 w-7 h-7 lg:hover:mx-3 duration-300 ' src={optionsButton} alt="options" />
                        </button>
                        <div className='text-3xl font-bold align-middle my-auto'>
                            <h1 className='text-[#f1356d]'> Tangana </h1>
                        </div>
                    </div>

                    <div className=' flex w-fit bg-[#f0f0f0] px-2 py-1 rounded-2xl ml-6' >
                        <button className=' bg-[#f0f0f0] p-1 rounded-xl active:drop-shadow-md focus:bg-white focus:drop-shadow-md '>
                            <h1 className='text-[#6e6e6e] font-semibold '>Livraison</h1>
                        </button>
                        <button className=' bg-[#f0f0f0] px-2 py-1 rounded-xl active:drop-shadow-md focus:bg-white focus:drop-shadow-md ' >
                            <h1 className='text-[#6e6e6e] font-semibold' >Emporter</h1>
                        </button>
                    </div>

                    <div className="w-fit px-3 py-2 bg-[#f0f0f0] rounded-2xl flex hover:bg-[#e0e0e0] mx-6 ">
                        <img src={locationPin} className='w-3 mx-2'/>
                        <h1 className="font-bold text-[#6e6e6e]"> 417 N holly st </h1>
                    </div>

                    <div className=' w-1/5 mx-auto'>
                        <form>
                            <div className='flex flex-row relative'>
                                <img src={LookUp} className='w-4 absolute top-3 left-4' />
                                <input type="text" placeholder='Restaurant, Cuisine, Plat, etc' 
                                className='bg-[#f0f0f0] rounded-2xl py-2 w-full pl-12 placeholder:text-[#6e6e6e] outline-[#f1365ed0] '/>
                            </div>
                        </form>
                    </div>

                    
                    <div className='flex w-fit bg-gradient-to-b from-[#F1356D] to-[#C31549] py-2 px-5 rounded-2xl ml-auto 
                        duration-300 hover:ring-2 hover:ring-[#f1365d] cursor-pointer'>
                        <img src={cartlogo} className='w-5 mr-2'/>
                        <h1 className='text-white font-bold' > Panier - {cartItemsNomber}</h1>
                    </div>

                    <div className='flex w-fit'>
                        <button className=' border-2 px-5 border-[#f1365d] rounded-2xl ml-5 hover:bg-[#d82f54] text-[#f1365d] hover:text-white font-semibold 
                            duration-300 ' >
                            Log in 
                        </button>
                        <img src={userCircle} className='w-10 ml-5 mr-10' />
                    </div>
                </div>

                {/* --------------------- Only displays inline flex on Mobile devices' screens ---------------------------- */}

                <div className=' conatiner flex-row flex-nowrap w-full mt-5 xl:hidden'>
                    <div className='flex-col'>

                        <div className='flex-row'>
                            <div className="flex flex-row ">
                                <div className="w-fit px-1 py-1 flex ml-5 ">
                                    <img src={locationPin} className='w-3 ml-1 '/>
                                    <h1 className=" pt-1 px-2 text-sm font-bold"> 417 N holly st </h1>
                                </div>
                                    <img src={userCircle} className=' w-9 ml-auto' onClick={clickHandler} />
                                <button onClick={clickHandler}>
                                    <img className=' w-5 h-5 mr-5 ' src={tripleDot} alt="options" />
                                </button>
                            </div>
                        </div>

                        <div className="flex-row mt-7">
                            <div className=' flex w-5/6 mx-auto text-sm '>
                                <form className='w-5/6'>
                                    <div className='flex flex-row relative'>
                                        <img src={LookUp} className='w-4 absolute top-2 left-3' />
                                        <input type="text" placeholder='Restaurant, Cuisine, Plat, etc' 
                                        className='bg-[#f0f0f0] rounded-2xl py-1 w-full pl-10 placeholder:text-[#6e6e6e] outline-[#f1365ed0] mr-3 '/>
                                    </div>
                                </form>
                                <button className='flex-row w-1/6 bg-gradient bg-gradient-to-b from-[#F1356D] to-[#C31549] text-white px-3 rounded-xl ml-auto ' >
                                    Aller
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col w-5/6 mx-auto mt-8">
                            <div className="flex w-full mx-auto ">
                                <div className="flex text-md font-semibold w-2/6 text-center"> Commande :</div>
                                <div className='flex-row w-1/3 h-6 rounded-full bg-[#f0f0f0] ml-5 my-auto '>
                                    <div className='h-6 overflow-visible w-6 bg-white rounded-full ml-0 border-2 '></div>
                                </div>
                            </div>
                            <div className="flex flex-row ml-auto mr-12 md:mx-auto ">
                                <p className='text-sm font-extrabold px-4 md:px-20 py-1 mx-auto text-[#f1365d]' >Livraison</p>
                                <p className='text-sm font-extrabold px-4 md:px-20 py-1 mx-auto text-[#6e6e6e] ' >Emporter</p>
                            </div>
                        </div>

                        {/* ----------------- bottom Nav Bar only for Mobile devices ----------------- */}

                        <div className='fixed bottom-0 w-full h-16 bg-[#fff] flex-row z-10' style={{boxShadow: '0px 0px 10px #e0e0e0'}}>
                            <div className='flex flex-row mt-3'>

                                <div className="flex-col w-1/4 ">
                                    <svg className='w-6 fill-[#6e6e6e] hover:fill-[#f1365d] mx-auto' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256S114.6 512 256 512s256-114.6 256-256zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z"/></svg>
                                    <p className='text-xs mt-1 text-center text-[#6e6e6e]'>
                                        Retour
                                    </p>
                                </div>

                                <div className="flex-col w-1/4 ">
                                <svg className='w-6 fill-[#6e6e6e] hover:fill-[#f1365d] mx-auto' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>
                                    <p className='text-xs mt-1 text-center text-[#6e6e6e]'>
                                        Home
                                    </p>
                                </div>

                                <div className="flex-col w-1/4 ">
                                        <div className='w-fit px-1 text-center text-xs font-bold text-white rounded-full absolute top-1 left-2/3 bg-[#f00]'>
                                            {cartItemsNomber}
                                        </div>
                                    <svg className='w-6 fill-[#6e6e6e] hover:fill-[#f1365d] mx-auto' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill='black'><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
                                    <p className='text-xs mt-1 text-center text-[#6e6e6e]'>
                                        Panier
                                    </p>
                                </div>

                                <div className="flex-col w-1/4 ">
                                    <svg className='w-5 fill-[#6e6e6e] hover:fill-[#f1365d] mx-auto' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
                                    <p className='text-xs mt-1 text-center text-[#6e6e6e]'>
                                        Compte
                                    </p>
                                </div>

                            </div>
                        </div>
                        
                    </div>

                </div>

            </div>
        </div>
     );
}
 
export default NavBar ;