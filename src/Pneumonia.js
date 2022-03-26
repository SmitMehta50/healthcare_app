import axios from 'axios';
import React, { useState, useEffect } from 'react'

function Pneumonia() {
    const [selectedfile, setSelectedfile] = useState([]);
    const [message, setMessage] = useState("");
    const [imageURL, setImageURL] = useState([]);

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

        formData.append(
            "file",
            selectedfile,
            selectedfile.name
        );

        console.log(selectedfile)

        await axios.post("https://pneumoniaapi.herokuapp.com/", formData)
        .then(function(response){
            console.log(response.data.message)
            setMessage(response.data.message)
        })
    };

    const fileData = () => {
        if (selectedfile) {
		
            return (
            <div>
                <h2>File Details:</h2>
                
                <p>File Name: {selectedfile.name}</p>
    
                            
                <p>File Type: {selectedfile.type}</p>

                {/* {imageURL.map(imageSrc => <img src={imageSrc}/>)} */}
                <img src={imageURL} alt={selectedfile.name}/>
                <p>{message}</p>
    
                            
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
                <h4>Choose before Pressing the Upload button</h4>
            </div>
            );
        }
        };
    
  return (
    <div>
        <h1>Pneumonia</h1>
        
			<h3>
			File Upload using React!
			</h3>
			<div>
				<input type="file" onChange={onFileChange} />
				<button onClick={onFileUpload}>
				Predict!
				</button>
			</div>
		{fileData()}
    </div>
  )
}

export default Pneumonia