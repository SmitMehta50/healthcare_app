import React, {useState} from 'react';
import axios from 'axios'
import Nav from './Nav'

function Liver() {
    const [age, setAge] = useState("");
    const [alamine_Aminotransferase, setAlamine_Aminotransferase] = useState("");
    const [albumin, setAlbumin] = useState("");
    const [albumin_and_Globulin_Ratio, setAlbumin_and_Globulin_Ratio] = useState("");
    const [alkaline_Phosphotase, setAlkaline_Phosphotase] = useState("");
    const [aspartate_Aminotransferase, setAspartate_Aminotransferase] = useState("");
    const [direct_Bilirubin, setDirect_Bilirubin] = useState("");
    const [gender, setGender] = useState("");
    const [total_Bilirubin, setTotal_Bilirubin] = useState("");
    const [total_Protiens, setTotal_Protiens] = useState("");
    const [pred, setPred] = useState("");
    const [prob, setProb] = useState("");


    let handleSubmit = async (e) => {
        e.preventDefault();
        var myParams = {
            Age: age,
            Alamine_Aminotransferase: alamine_Aminotransferase,
            Albumin: albumin,
            Albumin_and_Globulin_Ratio: albumin_and_Globulin_Ratio,
            Alkaline_Phosphotase: alkaline_Phosphotase,
            Aspartate_Aminotransferase: aspartate_Aminotransferase,
            Direct_Bilirubin: direct_Bilirubin,
            Gender: gender,
            Total_Bilirubin: total_Bilirubin,
            Total_Protiens: total_Protiens
        }

        await axios.post('https://kidneydisease-api.herokuapp.com/liver', myParams)
        .then(function(response){
            console.log(response);
            var res = response
            if (res.status === 200){
            setPred(response.data.message)
            setProb(response.data.probability)
            }else{setPred("Error Occured")}
            // setMessage(response)
       //Perform action based on response
        }).catch((error)=>console.log(error));
      };


  return (
    <div>
      <Nav/>
        <h1 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl'>Liver</h1>
        <form onSubmit={handleSubmit}>
            <input
            type="number"
            value={age}
            placeholder="Age"
            onChange={(e) => setAge(e.target.value)}
            />

            <select id="" name="" placeholder="Gender" onChange={(e) => setGender(e.target.value)}>
              <option value="None" disabled selected>Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>

            <input
            type="number"
            value={total_Bilirubin}
            placeholder="Total_Bilirubin"
            onChange={(e) => setTotal_Bilirubin(e.target.value)}
            />

            <input
            type="number"
            value={direct_Bilirubin}
            placeholder="Direct_Bilirubin"
            onChange={(e) => setDirect_Bilirubin(e.target.value)}
            />

            <input
            type="number"
            value={alkaline_Phosphotase}
            placeholder="Alkaline_Phosphotase"
            onChange={(e) => setAlkaline_Phosphotase(e.target.value)}
            />

            <input
            type="number"
            value={alamine_Aminotransferase}
            placeholder="Alamine_Aminotransferase"
            onChange={(e) => setAlamine_Aminotransferase(e.target.value)}
            />

            <input
            type="number"
            value={aspartate_Aminotransferase}
            placeholder="Aspartate_Aminotransferase"
            onChange={(e) => setAspartate_Aminotransferase(e.target.value)}
            />

            <input
            type="number"
            value={total_Protiens}
            placeholder="Total_Protiens"
            onChange={(e) => setTotal_Protiens(e.target.value)}
            />

            <input
            type="number"
            value={albumin}
            placeholder="Albumin"
            onChange={(e) => setAlbumin(e.target.value)}
            />

            <input
            type="number"
            value={albumin_and_Globulin_Ratio}
            placeholder="Albumin_and_Globulin_Ratio"
            onChange={(e) => setAlbumin_and_Globulin_Ratio(e.target.value)}
            />

            <button type="submit">Submit</button>

            <div className="message">Status{pred ? <p>{pred}</p> : null}</div>
            <div className="prob">Probability{prob ? <p>{prob}</p> : null}</div>
        </form>
    
    </div>
  )
}

export default Liver