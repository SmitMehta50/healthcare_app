import React, {useState} from 'react';
import axios from 'axios'

function Heart() {
    const [age, setAge] = useState("");
    const [ca, setCa] = useState("");
    const [chol, setChol] = useState("");
    const [cp, setCp] = useState("");
    const [exang, setExang] = useState("");
    const [fbs, setFbs] = useState("");
    const [oldpeak, setOldpeak] = useState("");
    const [restecg, setRestecg] = useState("");
    const [sex, setSex] = useState("");
    const [slope, setSlope] = useState("");
    const [thal, setThal] = useState("");
    const [thalach, setThalach] = useState("");
    const [trestbps, setTrestbps] = useState("");
    const [message, setMessage] = useState("");
    const [prob, setProb] = useState("");

    let handleSubmit = async (e) => {
        e.preventDefault();
        var myParams = {
            age: age,
            ca: ca,
            chol: chol,
            cp: cp,
            exang: exang,
            fbs: fbs,
            oldpeak: oldpeak,
            restecg: restecg,
            sex: sex,
            slope: slope,
            thal: thal,
            thalach: thalach,
            trestbps: trestbps
        }

        await axios.post('https://diabetessapi.herokuapp.com/heart', myParams)
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
        <h1>Heart</h1>
        <form onSubmit={handleSubmit}>
            <input
            type="number"
            value={age}
            placeholder="Age"
            onChange={(e) => setAge(e.target.value)}
            />
            {/* <input
            type="text"
            value={sex}
            placeholder="glucose"
            onChange={(e) => setSex(e.target.value)}
            /> */}
            <select id="" name="" placeholder="Gender" onChange={(e) => setSex(e.target.value)}>
              <option value="None" disabled selected>Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <input
            type="number"
            value={cp}
            placeholder="Chest Pain"
            onChange={(e) => setCp(e.target.value)}
            />
            <input
            type="number"
            value={trestbps}
            placeholder="Resting Blood Pressure"
            onChange={(e) => setTrestbps(e.target.value)}
            />
            <input
            type="number"
            value={chol}
            placeholder="Serum cholestoral in mg/dl"
            onChange={(e) => setChol(e.target.value)}
            />
            <input
            type="number"
            value={fbs}
            placeholder="Fasting blood sugar > 120 mg/dl"
            onChange={(e) => setFbs(e.target.value)}
            />
            <input
            type="number"
            value={restecg}
            placeholder="Resting electrocardiographic"
            onChange={(e) => setRestecg(e.target.value)}
            />
            <input
            type="number"
            value={thalach}
            placeholder="Maximum heart rate"
            onChange={(e) => setThalach(e.target.value)}
            />
            <input
            type="number"
            value={exang}
            placeholder="Exercise induced angina"
            onChange={(e) => setExang(e.target.value)}
            />
            <input
            type="number"
            value={oldpeak}
            placeholder="Old Peak"
            onChange={(e) => setOldpeak(e.target.value)}
            />
            <input
            type="number"
            value={slope}
            placeholder="ST segment"
            onChange={(e) => setSlope(e.target.value)}
            />
            <input
            type="number"
            value={ca}
            placeholder="Number of major vessels"
            onChange={(e) => setCa(e.target.value)}
            />
            <input
            type="number"
            value={thal}
            placeholder="Thal"
            onChange={(e) => setThal(e.target.value)}
            />

            <button type="submit">Submit</button>

            <div className="message">Status{message ? <p>{message}</p> : null}</div>
            <div className="prob">Probability{prob ? <p>{prob}</p> : null}</div>
      </form>
    </div>
  )
}

export default Heart