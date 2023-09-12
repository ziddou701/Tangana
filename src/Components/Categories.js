import fastfoodimg from './images/Fast-Food.jpg';
import petitdejimg from './images/Breackfast.jpg';
import dinerimage from './images/diner.jpg';
import dessertimage from './images/Dessert.jpg';
import tanganaimg from './images/Tangana.jpg';
import brunchimg from './images/Brunch.jpg';
import dibiimg from './images/Dibiterie.jpg';
import all from './SVG/layers.svg';


const Categories = () => {

    const categories = [{ src: all , name:"Tout" , id:1 },
                        { src: petitdejimg , name:"Petit-dej" , id:2 },
                        { src: tanganaimg , name:"Tangana" , id:3 },
                        { src: fastfoodimg , name:"Fast-Food" , id:4 },
                        { src: brunchimg , name:"Brunch" , id:5 },
                        { src: dinerimage , name:'Diner' , id:6 },
                        { src: dessertimage , name:"Desserts" , id:7 },
                        { src: dibiimg , name:"Dibi" , id:8 }
                    ] ;

    return ( 

        <div className="flex-col absolute w-full mt-4 xl:top-20 ">
            <div className="text-md font-semibold ml-7 ">
                Catégories :
            </div>
            <div className='overflow-x-auto border-b-4 border-[#f0f0f0] md:pb-6 '>
                <div className="flex flex-row flex-nowrap mt-2 ml-2 w-fit md:mx-auto">
                    {
                        categories.map( (categorie) => (
                            <div className="flex-col text-center w-20 mr-2 md:mx-10 text-sm cursor-default hover:-mt-1 duration-200 " key={categorie.id} >
                                <img className="aspect-square w-14 lg:w-16 mx-auto bg-[#f0f0f0] rounded-xl" src={categorie.src}/>
                                <p>{categorie.name}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}
 
export default Categories;