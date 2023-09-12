import { useState } from 'react';
import Image from '../SVG/imgHolder.svg';
import './style.css';

const AddDishForm = () => {


const [ optionGroup , setOptionGroup ] = useState([{name:'', optionList:['']}]);
const [newName , SetNewName] = useState('');
const [ names , setNames] = useState(['']);
const [option , setOption] = useState('');

const addOptionGroup = (e) => {
    e.preventDefault();

}

const addOption = (e) => {
    e.preventDefault();
    // console.log(optionGroup);
}

// console.log(optionGroup);






// ------------------------------------------------------------------------ JSX --------------------------------------------------------------------//
    return ( 
        <div className="flex flex-col">
        <form onSubmit={e => e.preventDefault()}>
            <div className="flex flex-col xl:flex-row w-full mt-20">

                {/* ---------------------------------------------------- left side Form (food ) ----------------------------------------------------*/}
                <div className="w-full xl:w-2/4 flex-col my-5 mx-auto">
                    <p className="text-[#f1365d] text-lg xl:text-xl font-bold mx-auto text-center w-fit "> Plat "A REVOIR ET COMPLETER!!!" </p>
                    <hr className="w-5/6 mx-auto mt-1"></hr>

                    <div className="flex-col w-3/4 md:w-1/3 lg:w-1/4 mx-auto my-5 aspect-square bg-transparent bg-center rounded-xl drop-shadow-md" 
                    style={{backgroundImage:`url(${Image})`, 
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            }}
                    ></div>

                    {/* Image Upload */}
                    <div className=" flex-col mx-auto ">
                        <div className="text-center mx-auto ">
                            <input 
                                type="file" 
                                accept="image/*" 
                                className=" hidden " 
                                id="file"
                                // onChange={handleUpload}
                            />
                            <label htmlFor="file" className="font-bold text-white cursor-pointer py-2 px-8 bg-gradient-to-b from-[#F1356D] to-[#C31549] drop-shadow-xl rounded-lg 
                            md:hover:px-10 duration-200" > Choisir Photo </label>
                        </div>
                    </div>

                    <div className="flex-col w-5/6 lg:w-1/2 mx-auto mt-8">
                        <input
                            // required 
                            type="text" 
                            placeholder="Nom" 
                            // value={Name} 
                            // onChange={(e) => setName(e.target.value) }
                            className="bg-[#f0f0f0] w-full h-7 px-2 rounded-md placeholder:text-[#6e6e6e] "/>
                    </div>

                    <div className="flex-col w-5/6 xl:w-1/2 mx-auto mt-5">
                        <select 
                            // required
                            // value={Type} 
                            // onChange={(e) => setCategorie(e.currentTarget.value) }
                            className="w-full bg-[#f0f0f0] h-7 rounded-md text-left pl-2 font-semibold">
                            <option value=""> Catégories </option>
                            <option value=""> Entrees </option>
                            <option value=""> Sandwich </option>
                            <option value=""> Burgers </option>
                            <option value=""> Viandes </option>
                            <option value=""> Plats du jour </option>
                            <option value=""> Boissons </option>
                            <option value=""> Desserts </option>
                            <option value=""> Boulangerie/Pâtisserie </option>
                            <option value=""> Autres</option>
                        </select>
                    </div>

                    <div className="flex-col w-5/6 xl:w-1/2 mx-auto mt-5">
                        <textarea
                            // required 
                            type="text" 
                            placeholder="Description du plat" 
                            // value={Desc} 
                            // onChange={(e) => setDesc(e.target.value) }
                            className="bg-[#f0f0f0] w-full px-2 py-2 h-40 rounded-md placeholder:text-[#6e6e6e] "/>
                    </div>

                </div>


                {/* ---------------------------------------------------- right side Form ( options ) ----------------------------------------------------*/}
                <div className="w-full xl:w-2/4 flex-col  my-5 mx-auto">
                    <p className="text-[#f1365d] text-lg xl:text-xl font-bold mx-auto text-center w-fit "> Options </p>
                    <hr className="w-5/6 mx-auto mt-1"></hr>

                    <div className='flex flex-col w-full mx-auto mt-5'>
                        <p className='text-xs px-5 xl:w-1/2 mx-auto pb-4'>
                            Ajoutez un ou plusieurs groupe(s) d'options pour donner plus de choix de customisation de commande à vos clients
                        </p>
                        
                        <div className='w-full'>
                            {/* option group */}
                            {optionGroup.map( (group , index ) => (
                                
                                <div className=' option-group ' key={index}>
                                {/* delete option group button */}
                                <div className='delete-option-group'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#f1356d"><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>
                                </div>

                                <label htmlFor="nom-du-groupe"> Nom du groupe: <b> {newName} </b> </label>
                                    <input 
                                    type="text" 
                                    placeholder='exemple: Type de pain'
                                    // value={newName}
                                    onBlur={e => {
                                        SetNewName(e.target.value);
                                        if(names[index-1]!== names[index]){
                                            setNames([...names, newName]);
                                        }
                                        console.log(names);
                                    }}
                                    className='option-group-title' />

                                {/* options list input */}
                                {group.optionList.map ( (list , index ) => (
                                    <div className='option' key={index}>
                                        <div style={{display:'flex',flexDirection:'row'}}>
                                            <input 
                                            type="text"
                                            value={option}
                                            onChange={e => setOption(e.target.value)}
                                            placeholder='(option) ex: pain de mie' />
                                            <button > - Retirer </button>
                                        </div>    
                                    </div>
                                ))}

                                <button onClick={addOption}
                                className='option-group-button'> + option </button>
                            </div> 

                            ))}
                            
                        </div>

                        <button 
                        className=' px-4 py-3 hover:px-6 duration-200 bg-gradient-to-b from-[#F1356D] to-[#C31549] text-[#f0f0f0] font-bold text-sm mx-auto rounded-lg'
                        onClick={addOptionGroup}>
                            + Groupe d'options 
                        </button>
                    </div>

                    

                    <div className="w-fit bottom-0 mb-10 mt-10 px-10 py-2 mx-auto relative ">
                        <input type='submit' value={' - Soumettre -'} className="font-bold text-[#f1365d] py-2 px-8 lg:hover:px-12 duration-300 border-2 border-[#f1356d] rounded-lg "/> 
                    </div>
                        
                    
                </div>
            </div>
        </form>
        </div>
     );
}
 
export default AddDishForm;