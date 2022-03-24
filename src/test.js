import React, {useState, useEffect} from 'react'
import axios from 'axios';

function Pneumonia() {
    const [image, setImage] = useState([]);
    const [imageURL, setImageURL] = useState([]);
    const [message, setMessage] = useState("");

    useEffect(()=>{
        if (image.length < 1) return;
        const newImageUrl = [];
        image.forEach(image => newImageUrl.push(URL.createObjectURL(image)));
        setImageURL(newImageUrl);
    }, [image]);

    function onImageChange(e){
        setImage([e.target.files[0]])
    }

    let handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append(
            "file",
            image,
        )

        await axios.post('http://127.0.0.1:5000/pneumonia', formData)
        .then(function(response){
            console.log(response);
            
            var res = response
            if (res.status === 200){
            setMessage(response)
            }else{setMessage("Error Occured")}
            // setMessage(response)
       //Perform action based on response
        }).catch((error)=>console.log(error));
      };
  return (
    <div>
        <h1>Pneumonia</h1>
        <form onSubmit={handleSubmit}>
            <input type="file" name='file' accept='image/*' onChange={onImageChange}/>
            {imageURL.map(imageSrc => <img src={imageSrc}/>)}
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Pneumonia