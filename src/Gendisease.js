import React, {useState} from 'react';
import Select from 'react-select';
import diseaselist from './diseaselist';
import axios from 'axios';
// import Nav from './Nav'

function Gendisease() {
    const data = diseaselist
    
      // set value for default selection
      const [selectedValue, setSelectedValue] = useState([""]);
      const [message, setMessage] = useState("");
      const [discription, setDiscription] = useState("");
      const [treatment, setTreatment] = useState("");
      const [rate, setRate] = useState("")
    
      // handle onChange event of the dropdown
      const handleChange = (e) => {
        setSelectedValue(Array.isArray(e) ? e.map(x => x.value) : []);
      }


      let handleSubmit = async (e) => {
        e.preventDefault();
        var myParams = selectedValue

        await axios.post('https://diabetessapi.herokuapp.com/generalprediction', myParams)
        .then(function(response){
            console.log(response.data);
            // if (response.status === 200){
            setMessage(response.data[0].prediction)
            setDiscription(response.data[2].discription)
            setTreatment(response.data[3].treatment)
            setRate(response.data[1]["rate"])
        
            // }else{setMessage("Error Occured")}
            // setMessage(response)
       //Perform action based on response
        }).catch((error)=>console.log(error));
      };
  return (
    <div>
        <h1 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl'>Gendisease</h1>

      
      <form onSubmit={handleSubmit}>
        <Select
            className="dropdown"
            placeholder="Select Option"
            value={data.filter(obj => selectedValue.includes(obj.value))} // set selected values
            options={data} // set list of the data
            onChange={handleChange} // assign onChange function
            isMulti
            isClearable
        />
        {selectedValue && <div style={{ marginTop: 20, lineHeight: '25px' }}>
            <div><b>Selected Value: </b> {JSON.stringify(selectedValue, null, 2)}</div>
        </div>}
        <button className='shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded' type="submit">Submit</button>

        <div className="message"><h3>Status :</h3> {message }</div>
        <div className="prob"><h3>Description :</h3> {discription}</div>
        <div><h3>Treatment :</h3>{JSON.stringify(treatment)}</div>
        <div><h3>Rate :</h3>{JSON.stringify(rate)}</div>
      </form>
      
    </div>
  )
}


export default Gendisease;