import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Test() {
    const[hosdata, setHosdata] = useState([])
    const[latitude, setLatitude] = useState("");
    const[longitude,setLongitude] = useState("");
    const[pin,setPin] = useState("");
    const[hospital1, setHospital1] = useState([])
    const[hospital2, setHospital2] = useState([])
    const[hospital3, setHospital3] = useState([])
    const[hospital4, setHospital4] = useState([])
    const[hospital5, setHospital5] = useState([])
    const[hospital6, setHospital6] = useState([])
    // const[hospital7, setHospital7] = useState([])
    // const[hospital8, setHospital8] = useState([])

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
                pincode: ""
            }

            axios.post('https://kidneydisease-api.herokuapp.com/hospitaldata', mylocation)
            .then(function(response){
                console.log(response.status);
                // setHosdata(JSON.stringify(response.data))
                setHosdata(response.status);
                setHospital1(response.data[0])
                setHospital2(response.data[1])
                setHospital3(response.data[2])
                setHospital4(response.data[3])
                setHospital5(response.data[4])
                setHospital6(response.data[5])
                // setHospital7(response.data[6])
                // setHospital8(response.data[7])
                // console.log(hosdata);
            }).catch((error)=>console.log(error));

        }
    },[latitude, longitude]);
    // console.log(hosdata);

    const handleSubmit = async (e) => {
        e.preventDefault();

        var myParams={
            lat:"",
            lng:"",
            pincode: pin
        }
        console.log(myParams)
        
        await axios.post('https://kidneydisease-api.herokuapp.com/hospitaldata', myParams)
        .then(function(response){
            // console.log(response.data);
            setHosdata(response.status);
            console.log(hosdata);
            setHospital1(response.data[0])
            setHospital2(response.data[1])
            setHospital3(response.data[2])
            setHospital4(response.data[3])
            setHospital5(response.data[4])
            setHospital6(response.data[5])
            // setHospital7(response.data[6])
            // setHospital8(response.data[7])
        }).catch((error)=>console.log(error));
    }

    const hospitaldata = () => {
        if(hosdata===200){
            return(
                <div>
                    <div className='flex flex-wrap justify-around ml-5 mr-5 mt-5 mb-5 '>

                        <div className='flex justify-center mt-4'>
                            <div className='block rounded-lg shadow-lg bg-white max-w-sm text-center'>
                                <div className='py-3 px-6 border-b border-gray-300'>
                                    {hospital1.City}, {hospital1.zipcode}
                                </div>
                                <div  className='p-6'>
                                    <h5 className='text-gray-900 text-xl font-medium mb-2'>{hospital1.Name}</h5>
                                    <p className='text-gray-700 text-base mb-4'> 
                                        {hospital1.Address}
                                    </p>
                                    <a href={`http://maps.google.com/maps?q=${hospital1.Name},+${hospital1.Address},+${hospital1.City},+${hospital1.zipcode}`}>
                                        <button type='button' className='inline-block px-6 py-2.5 text-indigo-700 bg-indigo-100 hover:bg-indigo-200 font-medium text-xs leading-tight uppercase rounded shadow-md  hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'>
                                        Go To Maps
                                        </button>
                                    </a>
                                </div>
                                <div className='py-3 px-6 border-t border-gray-300 text-gray-600'>
                                    {hospital1.Distance}
                                </div>
                            </div>
                        </div>

                        <div className='flex justify-center mt-4'>
                            <div className='block rounded-lg shadow-lg bg-white max-w-sm text-center'>
                                <div className='py-3 px-6 border-b border-gray-300'>
                                    {hospital2.City}, {hospital2.zipcode}
                                </div>
                                <div  className='p-6'>
                                    <h5 className='text-gray-900 text-xl font-medium mb-2'>{hospital2.Name}</h5>
                                    <p className='text-gray-700 text-base mb-4'> 
                                        {hospital2.Address}
                                    </p>
                                    <a href={`http://maps.google.com/maps?q=${hospital2.Name},+${hospital2.Address},+${hospital2.City},+${hospital2.zipcode}`}>
                                        <button type='button' className='inline-block px-6 py-2.5 text-indigo-700 bg-indigo-100 hover:bg-indigo-200 font-medium text-xs leading-tight uppercase rounded shadow-md  hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'>
                                        Go To Maps
                                        </button>
                                    </a>
                                </div>
                                <div className='py-3 px-6 border-t border-gray-300 text-gray-600'>
                                    {hospital2.Distance}
                                </div>
                            </div>
                        </div>

                        <div className='flex justify-center mt-4'>
                            <div className='block rounded-lg shadow-lg bg-white max-w-sm text-center'>
                                <div className='py-3 px-6 border-b border-gray-300'>
                                    {hospital3.City}, {hospital3.zipcode}
                                </div>
                                <div  className='p-6'>
                                    <h5 className='text-gray-900 text-xl font-medium mb-2'>{hospital3.Name}</h5>
                                    <p className='text-gray-700 text-base mb-4'> 
                                        {hospital3.Address}
                                    </p>
                                    <a href={`http://maps.google.com/maps?q=${hospital3.Name},+${hospital3.Address},+$6hospital3.City},+${hospital3.zipcode}`}>
                                        <button type='button' className='inline-block px-6 py-2.5 text-indigo-700 bg-indigo-100 hover:bg-indigo-200 font-medium text-xs leading-tight uppercase rounded shadow-md  hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'>
                                        Go To Maps
                                        </button>
                                    </a>
                                </div>
                                <div className='py-3 px-6 border-t border-gray-300 text-gray-600'>
                                    {hospital3.Distance}
                                </div>
                            </div>
                        </div>

                        <div className='flex justify-center mt-4'>
                            <div className='block rounded-lg shadow-lg bg-white max-w-sm text-center'>
                                <div className='py-3 px-6 border-b border-gray-300'>
                                    {hospital4.City}, {hospital4.zipcode}
                                </div>
                                <div  className='p-6'>
                                    <h5 className='text-gray-900 text-xl font-medium mb-2'>{hospital4.Name}</h5>
                                    <p className='text-gray-700 text-base mb-4'> 
                                        {hospital4.Address}
                                    </p>
                                    <a href={`http://maps.google.com/maps?q=${hospital4.Name},+${hospital4.Address},+${hospital4.City},+${hospital4.zipcode}`}>
                                        <button type='button' className='inline-block px-6 py-2.5 text-indigo-700 bg-indigo-100 hover:bg-indigo-200 font-medium text-xs leading-tight uppercase rounded shadow-md  hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'>
                                        Go To Maps
                                        </button>
                                    </a>
                                </div>
                                <div className='py-3 px-6 border-t border-gray-300 text-gray-600'>
                                    {hospital4.Distance}
                                </div>
                            </div>
                        </div>

                        <div className='flex justify-center mt-4'>
                            <div className='block rounded-lg shadow-lg bg-white max-w-sm text-center'>
                                <div className='py-3 px-6 border-b border-gray-300'>
                                    {hospital5.City}, {hospital5.zipcode}
                                </div>
                                <div  className='p-6'>
                                    <h5 className='text-gray-900 text-xl font-medium mb-2'>{hospital5.Name}</h5>
                                    <p className='text-gray-700 text-base mb-4'> 
                                        {hospital5.Address}
                                    </p>
                                    <a href={`http://maps.google.com/maps?q=${hospital5.Name},+${hospital5.Address},+${hospital5.City},+${hospital5.zipcode}`}>
                                        <button type='button' className='inline-block px-6 py-2.5 text-indigo-700 bg-indigo-100 hover:bg-indigo-200 font-medium text-xs leading-tight uppercase rounded shadow-md  hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'>
                                        Go To Maps
                                        </button>
                                    </a>
                                </div>
                                <div className='py-3 px-6 border-t border-gray-300 text-gray-600'>
                                    {hospital5.Distance}
                                </div>
                            </div>
                        </div>

                        <div className='flex justify-center mt-4'>
                            <div className='block rounded-lg shadow-lg bg-white max-w-sm text-center'>
                                <div className='py-3 px-6 border-b border-gray-300'>
                                    {hospital6.City}, {hospital6.zipcode}
                                </div>
                                <div  className='p-6'>
                                    <h5 className='text-gray-900 text-xl font-medium mb-2'>{hospital6.Name}</h5>
                                    <p className='text-gray-700 text-base mb-4'> 
                                        {hospital6.Address}
                                    </p>
                                    <a href={`http://maps.google.com/maps?q=${hospital6.Name},+${hospital6.Address},+${hospital6.City},+${hospital6.zipcode}`}>
                                        <button type='button' className='inline-block px-6 py-2.5 text-indigo-700 bg-indigo-100 hover:bg-indigo-200 font-medium text-xs leading-tight uppercase rounded shadow-md  hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'>
                                            Go To Maps
                                        </button>
                                    </a>
                                </div>
                                <div className='py-3 px-6 border-t border-gray-300 text-gray-600'>
                                    {hospital6.Distance}
                                </div>
                            </div>
                        </div>


</div>
                </div>
            );
        }
    }


  return (
      
    <div>
        <div>
            <form className='w-full' onSubmit={handleSubmit}>
                <div className='flex flex-wrap justify-center mx-3 mb-6'>
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
                <div className='md:flex justify-center lg:flex md:items-center lg:items-center'>
                    <div className='md:w-1/3'>
                        <button className='shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded' type="submit">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
            {hospitaldata()}
            
        </div>
    </div>
  )
}

export default Test