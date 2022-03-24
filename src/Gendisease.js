import React, {useState} from 'react';
import Select from 'react-select';
import axios from 'axios';

function Gendisease() {
    const data = [
        {
          value: "abdominal_pain",
          label: "Abdominal Pain"
        },
        {
          value: "abnormal_menstruation",
          label: "Abdominal Menstruation"
        },
        {
          value: "acidity",
          label: "Acidity"
        },
        {
          value: "acute_liver_failure",
          label: "Acute Live Failure"
        },
        {
          value: "altered_sensorium",
          label: "Altered Sensorium"
        },
        {
          value: "anxiety",
          label: "Anxiety"
        }
      ];
    
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
            setDiscription(response.data[2].discription[message])
            setTreatment(response.data[3].treatment[message])
            setRate(response.data[1]["rate"])
            // }else{setMessage("Error Occured")}
            // setMessage(response)
       //Perform action based on response
        }).catch((error)=>console.log(error));
      };
  return (
    <div>
        <h1>Gendisease</h1>

      
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
        <button type="submit">Submit</button>

        <div className="message"><h3>Status :</h3> {message }</div>
        <div className="prob"><h3>Description :</h3> {discription}</div>
        <div><h3>Treatment :</h3>{JSON.stringify(treatment, null, 2)}</div>
        <div><h3>Rate :</h3>{JSON.stringify(rate, null, 2)}</div>
        
      </form>
      
    </div>
  )
}


export default Gendisease;