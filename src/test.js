import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Test() {
    const[latitude, setLatitude] = useState('');
    const[longitude,setLongitude] = useState('');
    const[hosdata, setHosdata] = useState([])
    const[pin,setPin] = useState('');

    useEffect(() => {
        if (!("geolocation" in navigator)) {
            setLatitude("")
            setLongitude("")    
        }else{
            navigator.geolocation.getCurrentPosition((position)=>{
                setLatitude(position.coords.latitude)
                setLongitude(position.coords.longitude)
            })
        }
        
    },[]);

    useEffect(()=>{
        if(latitude &&longitude){
            var mylocation={
                lat:latitude,
                lng:longitude,
                pincode: pin
            }

            axios.post('https://kidneydisease-api.herokuapp.com/hospitaldata', mylocation)
            .then(function(response){
                console.log(response.data);
                setHosdata(response.data);
            }).catch((error)=>console.log(error));

        }
    },[latitude, longitude, pin]);

    let handleSubmit = async (e) => {
        setLatitude("");
        setLongitude("");
        e.preventDefault();
        

        var myParams={
            lat:latitude,
            lng:longitude,
            pincode: pin
        }
        
        await axios.post('https://kidneydisease-api.herokuapp.com/hospitaldata', myParams)
        .then(function(response){
            console.log(response.data);
            setHosdata(response.data);
        }).catch((error)=>console.log(error));
    }

  

  return (
    <div>
        <div>
            <form className='w-full' onSubmit={handleSubmit}>
                <div className='flex flex-wrap mx-3 mb-6'>
                    <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                        <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
                            Pincode
                        </label>
                        <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                          type="number"
                          value={pin}
                          placeholder="Pincode"
                          onChange={(e) => setPin(e.target.value)}
                        />
                        <p className='text-gray-500 text-xs italic'>Fill out this field</p>
                    </div>
                </div>
                <div className='md:flex lg:flex md:items-center lg:items-center'>
                    <div className='md:w-1/3'>
                        <button className='shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded' type="submit">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
            <div>
                {/* {hosdata.map(hos => (
                    <p 
                    // onClick={()=> handleClick(hos)}
                    >
                        {hos.Name}
                    </p>
                ))} */}
            </div>
        </div>
    </div>
  )
}

export default Test