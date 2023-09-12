
import { useState } from "react";
import imgHolder from './SVG/imgHolder.svg';
import Spinner from './SVG/spinner.svg';
import Done from './SVG/circle-check.svg';
import { useNavigate } from "react-router-dom";

const AddRestaurantForm = () => {

    const Navigate = useNavigate();

    const [Image, setImage] = useState(imgHolder);
    const [Name, setName] = useState('');
    const [Phone, setPhone] = useState('');
    const [LocationDesc, setLocationDesc] = useState('');
    const [Type, setType] = useState('');
    const [Desc , setDesc] = useState('');

    const [Long , setLong] = useState(null);
    const [Lat , setLat] = useState(null);

    const [Address , setAddress] = useState(null);
    const [City , setCity] = useState(null);
    const [Region , setRegion] = useState(null);
    const [CntryName , setCntryName] = useState(null);
    const [CountryCode , setCountryCode] = useState('');

    const [tryLocation , setTryLocation] = useState(true);                          // Clicked on the Locate button at least once
    const [isLoading , setIsLoading] = useState(false);                            // Is feching the location...
    const [formIsSubmitting , setFormIsSubmitting] = useState(null);             // Is submitting the form...
    const [imageUploaded , SetImageUploaded] = useState(true);                   // Clicked on the upload image button at least once

    const Location = { Lat , Long , Address , City , Region , CntryName , CountryCode };
    const Restaurant = { Name , Image , Location , Phone , LocationDesc , Type , Desc };
   

    // --------- Handle Image uploads ------- //
    const handleUpload = (e) => {

        const reader = new FileReader();
        const temp = e.target.files[0];

        reader.readAsDataURL(temp);

        reader.addEventListener("load", (e) => {
            setImage(reader.result);
            SetImageUploaded(true);
        });
    }

    // Find current location ---------------------------//
    const Locate = () => { 

        setIsLoading(true);     //Clicked on the locate button
        setTryLocation(true);   //Fetching current Location Loading...

        if (!navigator.geolocation)
        {
            throw new Error('Geolocalisation indisponible');
        };

    // execute if Geolocation found
        const success = (pos) => {
            console.log(pos);
            setLat(pos.coords.latitude);
            setLong(pos.coords.longitude);

            const abortCont = new AbortController();
            fetch(`https://geocode.arcgis.com/arcgis/rest/Services/World/GeocodeServer/reverseGeocode?f=pjson&featureTypes=&location=${pos.coords.longitude},${pos.coords.latitude}`, {signal: abortCont.signal})
                .then(result => {
                    return result.json();
                })
                .then((data) => {
                    console.log(data);

                    setAddress(data.address.Address);
                    setCity(data.address.City);
                    setRegion(data.address.Region);
                    setCntryName(data.address.CntryName);
                    setCountryCode(data.address.CountryCode);

                    console.log(Location);
                    setIsLoading(false);
                })
                .catch( err => {
                    setIsLoading(false);
                    console.log(err);
                });

                return () => abortCont.abort();
                
        };

    // execute if geolocation not found
        const error = (err) => {
            console.log(err);
            
            if(err.code === 1)
            {
                alert("Veuillez autoriser l'accès à votre géolocalisation");
                setIsLoading(false);
            }else{
                alert("Position introuvable");
                setIsLoading(false);
            }
        };

    // geolocation fetching otions
        const options = {
            enableHighAccuracy: true ,
            timeout: 5000 ,
            maximumAge: 0 ,
        };
        navigator.geolocation.getCurrentPosition(success, error , options);
    }


    // ---------------------> Handle Submissions <----------------------\\
    
    const handleSubmit = (e) => {

        if (Location.Lat===null && Location.CntryName===null){
            e.preventDefault(); 
            setTryLocation(false); 
            return
        };
        if (Image==imgHolder){
            e.preventDefault(); 
            SetImageUploaded(false); 
            return
        };

        e.preventDefault(); // Prevent Page Reload
        
        setFormIsSubmitting(true);
        fetch(' http://localhost:4000/Restaurants',{
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(Restaurant)
        })
        .then(res => {
            console.log(res.ok);
            console.log(Restaurant);

            setFormIsSubmitting(false);

            setTimeout(() => {
                setFormIsSubmitting(null);
                Navigate('/Home');           // For testing puroises only / Will eventually be to go to restaurant profile...
            }, 1500);
        })
        
    }



// ------------------------------------- End .Js / Start .JSX ----------------------------------------------//

    return ( 
        <div>
            <div className=" flex flex-col py-3 ">
                <form className="mt-5" onSubmit={handleSubmit}>
                    <p className=" text-[#f1365d] text-xl md:text-2xl font-bold w-fit md:w-3/4 mx-auto p-4 text-center border-b-2 "> Ma Boutique/Restaurant </p>

                    {formIsSubmitting==false && 
                            <div className="bg-[#000000a3] fixed top-0 w-screen h-screen z-10">
                                <div className=" w-2/3 aspect-square bg-white mx-auto top-1/3 lg:w-1/3 md:aspect-video relative rounded-lg drop-shadow-xl ">
                                    <img src={Done} className="w-16 xl:w-20 mx-auto top-1/3 relative" />
                                    <p className="text-2xl font-black text-[#f1365d] mx-auto w-fit relative top-1/3 lg:top-1/4 mt-4 lg:mt-10"> Restaurant Créé ! </p>
                                </div>
                            </div>
                    }
                    {formIsSubmitting==true && 
                            <div className="bg-[#000000a3] fixed top-0 w-screen h-screen z-10">
                                <div className=" w-2/3 aspect-square bg-white mx-auto top-1/3 lg:w-1/3 md:aspect-video relative rounded-lg drop-shadow-xl ">
                                    <img src={Spinner} className="w-16 xl:w-20 mx-auto top-1/3 relative animate-spin" />
                                    <p className="text-2xl font-black text-[#f1365d] mx-auto w-fit relative top-1/3 lg:top-1/4 mt-4 lg:mt-10"> Chargement... </p>
                                </div>
                            </div>
                    }

    {/* -------------------------------------------- Image Upload ---------------------------------- */}

                    <div className="flex-col w-3/4 md:w-1/2 lg:w-1/4 mx-auto my-5 aspect-square bg-transparent bg-center rounded-xl drop-shadow-md" 
                    style={{backgroundImage:`url(${Image})`, 
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            }}
                    ></div>
    
                    <div className=" flex-col mx-auto ">
                        <div className="text-center mx-auto ">
                            <input 
                                type="file" 
                                accept="image/*" 
                                className=" hidden " 
                                id="file"
                                onChange={handleUpload}
                            />

                            <label htmlFor="file" className="font-bold text-white cursor-pointer py-2 px-8 bg-gradient-to-b from-[#F1356D] to-[#C31549] drop-shadow-xl rounded-lg 
                            lg:hover:px-12 duration-300" > Choisir Photo </label>
                            {/* Error : Did not click on the upload button */}
                            {!imageUploaded &&
                                <div className="w-fit mx-auto text-sm mt-3 text-red-700 font-black bg-red-400 p-2 rounded-md animate-pulse " >
                                    Veuillez Choisir une Image...
                                </div>
                            }
                        </div>
                    </div>

    {/* -------------------------------------------- Details: ---------------------------------- */}

                    <p className="text-[#f1365d] text-lg md:text-xl font-bold w-3/4 mx-auto p-2 mt-8 text-center border-b-2 md:border-0 ">Details:</p>

                    <iframe
                        className="w-3/4 mx-auto mt-5 rounded-xl aspect-square md:w-1/2 lg:w-1/3 lg:aspect-video bg-[#f0f0f0]"
                        style={{border:0}}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        // this Give you the address name but is not precise enought
                        // src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAKO8bFc3VGSiVCb6GRakjiHtuvNQczz7w&q=${Address},${City},${Region},${CntryName}`}
                        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAKO8bFc3VGSiVCb6GRakjiHtuvNQczz7w&q=${Location.Lat},${Location.Long}&language=fr`}>
                    </iframe>


                    {/* Find current location button */}
                    <div className="w-fit mt-5 px-10 py-2 mx-auto "> 
                        { !isLoading &&
                            <button 
                                onClick={Locate}
                                className="font-bold text-[#f1365d] py-2 px-6 lg:hover:px-10 duration-300 border-2 border-[#f1356d] rounded-lg " >
                                Localiser 
                            </button>
                        }
                        { isLoading && <img src={Spinner} className="w-7 py-2 animate-spin mx-auto" ></img>}
                    </div>
                    {/* Error : Did not click on the locate button */}
                    {!tryLocation &&
                        <div className="w-fit mx-auto text-sm text-red-700 font-black bg-red-400 p-2 rounded-md animate-pulse " >
                            Veuillez Essayer le bouton de localisation
                        </div>
                    }

                    <div className="flex-col w-3/4 md:w-1/2 lg:w-1/3 mx-auto mt-8">
                        <input
                            required 
                            type="text" 
                            placeholder="Nom" 
                            value={Name} 
                            onChange={(e) => setName(e.target.value) }
                            className="bg-[#f0f0f0] w-full h-7 px-2 rounded-md placeholder:text-[#6e6e6e] "/>
                    </div>

                    <div className="flex-col w-3/4 md:w-1/2 lg:w-1/3 mx-auto mt-5">
                        <input
                            required 
                            type="text" 
                            placeholder="Telephone: + 221" 
                            value={Phone} 
                            onChange={(e) => setPhone(e.target.value) }
                            className="bg-[#f0f0f0] w-full h-7 px-2 rounded-md placeholder:text-[#6e6e6e] "/>
                    </div>

                    <div className="flex-col w-3/4 md:w-1/2 lg:w-1/3 mx-auto mt-5">
                        <input 
                            required 
                            type="text" 
                            placeholder="Emplacement Relatif / Repères " 
                            value={LocationDesc} 
                            onChange={(e) => setLocationDesc(e.target.value) }
                            className="bg-[#f0f0f0] w-full h-7 px-2 rounded-md placeholder:text-[#6e6e6e] "/>
                    </div>

                    <div className="flex-col w-3/4 md:w-1/2 lg:w-1/3 mx-auto mt-12">
                        <select 
                            required
                            value={Type} 
                            onChange={(e) => setType(e.currentTarget.value) }
                            className="w-full bg-[#f0f0f0] h-7 rounded-md text-center font-semibold">
                            <option value=""> Type de Restauration </option>
                            <option value="Tangana"> Tangana </option>
                            <option value="Boutique"> Boutique Personnelle </option>
                            <option value="Restaurant"> Restaurant </option>
                            <option value="FastFood"> Restaurant/Fast-Food </option>
                            <option value="Boulangerie"> Boulangerie / Pâtisserie </option>
                        </select>
                    </div>

                    <div className="flex-col w-3/4 md:w-1/2 lg:w-1/3 mx-auto mt-5">
                        <textarea 
                            placeholder="Desciption - (optionnel)"
                            value={Desc} 
                            onChange={(e) => setDesc(e.target.value)}
                            className="bg-[#f0f0f0] w-full h-24 px-2 py-2 rounded-md placeholder:text-[#6e6e6e] "/>

                            <p className="text-xs text-center py-2 px-4">
                                <b>NB</b>: Pour une address plus precise et de meilleurs resultats, il est preferable de creer votre 
                                boutique et/ou restaurant lors ce que vous etes sur place.
                            </p>
                    </div>
                    

    {/* -------------------------------------------- Submition ---------------------------------- */}


                    {/* Error : Did not click on the upload button */}
                    {!imageUploaded &&
                            <div className="w-fit mx-auto text-sm mt-3 text-red-700 font-black bg-red-400 p-2 rounded-md animate-pulse " >
                                Veuillez Choisir une Image...
                            </div>
                        }
                    {/* Error : Did not click on the locate button */}
                        {!tryLocation &&
                            <div className="w-fit mx-auto text-sm text-red-700 font-black bg-red-400 p-2 rounded-md animate-pulse " >
                                Veuillez Essayer le bouton de localisation
                            </div>
                        }
                    <div className="w-fit mt-5 px-10 py-2 mx-auto ">
                        <button className="font-bold text-[#f1365d] py-2 px-8 lg:hover:px-12 duration-300 border-2 border-[#f1356d] rounded-lg "> 
                            Soumettre
                        </button>
                    </div>

                </form>
            </div>
        </div>
     );
}
 
export default AddRestaurantForm;