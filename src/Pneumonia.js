import axios from 'axios';
import React, { useState, useEffect } from 'react'
// import ScrollToTop from './ScroolToTop';
import Modal from './Modal';
// import Nav from './Nav'

function Pneumonia() {
    const [selectedfile, setSelectedfile] = useState([]);
    const [message, setMessage] = useState("");
    const [prob, setProb] = useState("")
    const [imageURL, setImageURL] = useState([]);
    const [open, setOpen] = useState(false);

    useEffect(()=>{
        if (selectedfile.length < 1) return;
        const newImageUrl = (URL.createObjectURL(selectedfile))
        // selectedfile.forEach(image => newImageUrl.push(URL.createObjectURL(image)));
        setImageURL(newImageUrl);
    }, [selectedfile]);

    const onFileChange =  (e) => {
        setSelectedfile(e.target.files[0])
    }

    const onFileUpload = async (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        setOpen(true)

        formData.append(
            "file",
            selectedfile,
            selectedfile.name
        );

        console.log(selectedfile)

        await axios.post("https://pneumonia-apis.herokuapp.com/", formData)
        .then(function(response){
            console.log(response.data)
            setMessage(response.data.message)
            setProb(response.data.probability)
        })
    };

    const fileData = () => {
        if (selectedfile.name) {
            return (
            <div className=' flex-wrap justify-around'>
                {/* <h2>File Details:</h2> */}
                <p>File Name: {selectedfile.name}</p>           
                <p>File Type: {selectedfile.type}</p>

                {/* {imageURL.map(imageSrc => <img src={imageSrc}/>)} */}
                {/* <img src={imageURL} alt={selectedfile.name}/> */}
                {/* <h5 className='text-gray-900 text-xl font-medium mb-2'>{message}</h5>             */}
                {/* <p>
                    Last Modified:{" "}
                    {selectedfile.lastModifiedDate.toDateString()}
                </p> */}
    
            </div>
            );
        } else {
            return (
            <div>
                <br />
                <h4 className='mx-6'>Choose before Pressing the Predict button</h4>
            </div>
            );
        }
        };

        // const result = () => {
        //     if (message) {
        //         return (
                    
        //         <div className='flex flex-wrap justify-around'>
        //             <ScrollToTop/>
        //             <div className='mt-5 justify-center border-solid border-2 rounded-lg border-indigo-600'>
        //                 <h5 className='mx-2 my-2 text-gray-900 text-xl font-medium'>{message}</h5>
        //             </div>
                                
        //         </div>
        //         );
        //     } 
        //     };
    
    
    
  return (
    <div>
        <h1 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl'>Pneumonia</h1>
        
			{/* <h3>
			File Upload using React!
			</h3>
			<div>
				<input  type="file" onChange={onFileChange} />
				<button className='shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded' onClick={onFileUpload}>
				Predict!
				</button>
			</div> */}
        
            
            {/* {result()} */}
            <div className="flex justify-center mt-6">
                <div className="w-auto rounded-lg shadow-xl bg-gray-50">
                    <div className="m-4">
                        <label className="inline-block mb-2 text-gray-500">X-Ray Image Upload</label>
                        <div className="flex items-center justify-center w-full">
                            <label
                                className="flex flex-col w-full border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
                                <div className="flex flex-col items-center justify-center pt-7">
                                    <svg  className="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                    </svg>
                                    
                                    <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                                        Attach a file</p>
                                    <img className='rounded-lg' src={imageURL} alt={selectedfile.name}/>
                                    {fileData()}
                                </div>
                                <input type="file" className="opacity-0" onChange={onFileChange} />
                            </label>
                        </div>
                    </div>
                    <div className="flex justify-center p-2">
                        <button className="w-full shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"  onClick={onFileUpload}>Predict!</button>
                    </div>
                    <div>
                        {message ? <Modal
                        open = {open}
                        setOpen = {setOpen}
                        status ={message}
                        prob= {prob*10}
                        ></Modal> : null}
                    </div>
                </div>
            </div> 
		
    </div>
  )
}

export default Pneumonia