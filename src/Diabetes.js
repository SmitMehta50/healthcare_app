import React, {useState} from 'react';
import axios from 'axios'


function Diabetes() {
    const [pregnancies, setPregnancies] = useState("");
    const [glucose, setGlucose] = useState("");
    const [bloodPressure, setBloodPressure] = useState("");
    const [skinThickness, setSkinThickness] = useState("");
    const [insulin, setInsulin] = useState("");
    const [bmi, setBmi] = useState("");
    const [diabetesPedigreeFunction, setDiabetesPedigreeFunction] = useState("");
    const [age, setAge] = useState("");
    const [message, setMessage] = useState("");
    const [prob, setProb] = useState("");


    let handleSubmit = async (e) => {
        e.preventDefault();
        var myParams = {
              Pregnancies : pregnancies,
              Glucose : glucose,
              BloodPressure : bloodPressure,
              SkinThickness : skinThickness,
              Insulin : insulin,
              BMI : bmi,
              DiabetesPedigreeFunction : diabetesPedigreeFunction,
              Age : age
        }

        await axios.post('https://diabetessapi.herokuapp.com/diabetes', myParams)
        .then(function(response){
            console.log(response);
            var res = response
            if (res.status === 200){
            setMessage(response.data.message)
            setProb(response.data.probability)
            }else{setMessage("Error Occured")}
            // setMessage(response)
       //Perform action based on response
        }).catch((error)=>console.log(error));
      };
  return (
    <div>
        <h1>Diabetes</h1>
        <form onSubmit={handleSubmit}>
            <input
            type="number"
            value={pregnancies}
            placeholder="pregnancies"
            onChange={(e) => setPregnancies(e.target.value)}
            />
            <input
            type="number"
            value={glucose}
            placeholder="glucose"
            onChange={(e) => setGlucose(e.target.value)}
            />
            <input
            type="number"
            value={bloodPressure}
            placeholder="bloodPressure"
            onChange={(e) => setBloodPressure(e.target.value)}
            />
            <input
            type="number"
            value={skinThickness}
            placeholder="skinThickness"
            onChange={(e) => setSkinThickness(e.target.value)}
            />
            <input
            type="number"
            value={insulin}
            placeholder="insulin"
            onChange={(e) => setInsulin(e.target.value)}
            />
            <input
            type="number"
            value={bmi}
            placeholder="bmi"
            onChange={(e) => setBmi(e.target.value)}
            />
            <input
            type="number"
            value={diabetesPedigreeFunction}
            placeholder="diabetesPedigreeFunction"
            onChange={(e) => setDiabetesPedigreeFunction(e.target.value)}
            />
            <input
            type="number"
            value={age}
            placeholder="age"
            onChange={(e) => setAge(e.target.value)}
            />

            <button type="submit">Submit</button>

            <div className="message">Status{message ? <p>{message}</p> : null}</div>
            <div className="prob">Probability{prob ? <p>{prob}</p> : null}</div>
      </form>
    </div>
  )
}

export default Diabetes