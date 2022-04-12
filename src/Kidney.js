import React, {useState} from 'react';
import axios from 'axios'

function Kidney() {
    const [age, setAge] = useState("");
    const [albumin, setAlbumin] = useState("");
    const [anemia, setAnemia] = useState("");
    const [appetite, setAppetite] = useState("");
    const [bacteria, setBacteria] = useState("");
    const [blood_glucose_random, setBlood_glucose_random] = useState("");
    const [blood_pressure, setBlood_pressure] = useState("");
    const [blood_urea, setBlood_urea] = useState("");
    const [coronary_artery_disease, setCoronary_artery_disease] = useState("");
    const [diabetes_mellitus, setDiabetes_mellitus] = useState("");
    const [haemoglobin, setHaemoglobin] = useState("");
    const [hypertension, setHypertension] = useState("");
    const [packed_cell_volume, setPacked_cell_volume] = useState("");
    const [pedal_edema, setPedal_edema] = useState("");
    const [potassium, setPotassium] = useState("");
    const [pus_cell, setPus_cell] = useState("");
    const [pus_cell_clumps, setPus_cell_clumps] = useState("");
    const [red_blood_cell_count, setRed_blood_cell_count] = useState("");
    const [red_blood_cells, setRed_blood_cells] = useState("");
    const [serum_creatinine, setSerum_creatinine] = useState("");
    const [sodium, setSodium] = useState("");
    const [specific_gravity, setSpecific_gravity] = useState("");
    const [sugar, setSugar] = useState("");
    const [white_blood_cell_count, setWhite_blood_cell_count] = useState("");
    const [pred, setPred] = useState("");
    const [prob, setProb] = useState("");

    let handleSubmit = async (e) => {
        e.preventDefault();
        var myParams = {
            age: age,
            albumin: albumin,
            anemia: anemia,
            appetite: appetite,
            bacteria: bacteria,
            blood_glucose_random: blood_glucose_random,
            blood_pressure: blood_pressure,
            blood_urea: blood_urea,
            coronary_artery_disease: coronary_artery_disease,
            diabetes_mellitus: diabetes_mellitus,
            haemoglobin: haemoglobin,
            hypertension: hypertension,
            packed_cell_volume: packed_cell_volume,
            pedal_edema: pedal_edema,
            potassium: potassium,
            pus_cell: pus_cell,
            pus_cell_clumps: pus_cell_clumps,
            red_blood_cell_count: red_blood_cell_count,
            red_blood_cells: red_blood_cells,
            serum_creatinine: serum_creatinine,
            sodium: sodium,
            specific_gravity: specific_gravity,
            sugar: sugar,
            white_blood_cell_count: white_blood_cell_count
        }

        await axios.post('https://kidneydisease-api.herokuapp.com/kidney', myParams)
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
        <h1>Kidney</h1>
        <form onSubmit={handleSubmit}>
            <input
            type="number"
            value={age}
            placeholder="Age"
            onChange={(e) => setAge(e.target.value)}
            />
            {/* <select id="" name="" placeholder="Gender" onChange={(e) => setSex(e.target.value)}>
              <option value="None" disabled selected>Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select> */}

            <input
            type="number"
            value={blood_pressure}
            placeholder="blood_pressure"
            onChange={(e) => setBlood_pressure(e.target.value)}
            />

            <input
            type="number"
            value={specific_gravity}
            placeholder="specific_gravity"
            onChange={(e) => setSpecific_gravity(e.target.value)}
            />

            <input
            type="number"
            value={albumin}
            placeholder="albumin"
            onChange={(e) => setAlbumin(e.target.value)}
            />

            <input
            type="number"
            value={sugar}
            placeholder="sugar"
            onChange={(e) => setSugar(e.target.value)}
            />

            <select id="" name="" placeholder="Red_blood_cells" onChange={(e) => setRed_blood_cells(e.target.value)}>
              <option value="None" disabled selected>Select</option>
              <option value="abnormal">Abnormal</option>
              <option value="normal">Normal</option>
            </select>

            <select id="" name="" placeholder="pus_cell" onChange={(e) => setPus_cell(e.target.value)}>
              <option value="None" disabled selected>Select</option>
              <option value="abnormal">Abnormal</option>
              <option value="normal">Normal</option>
            </select>

            <select id="" name="" placeholder="pus_cell_clumps" onChange={(e) => setPus_cell_clumps(e.target.value)}>
              <option value="None" disabled selected>Select</option>
              <option value="present">Present</option>
              <option value="notpresent">Notpresent</option>
            </select>

            <select id="" name="" placeholder="bacteria" onChange={(e) => setBacteria(e.target.value)}>
              <option value="None" disabled selected>Select</option>
              <option value="present">Present</option>
              <option value="notpresent">Notpresent</option>
            </select>

            <input
            type="number"
            value={blood_glucose_random}
            placeholder="blood_glucose_random"
            onChange={(e) => setBlood_glucose_random(e.target.value)}
            />

            <input
            type="number"
            value={blood_urea}
            placeholder="blood_urea"
            onChange={(e) => setBlood_urea(e.target.value)}
            />

            <input
            type="number"
            value={serum_creatinine}
            placeholder="serum_creatinine"
            onChange={(e) => setSerum_creatinine(e.target.value)}
            />

            <input
            type="number"
            value={sodium}
            placeholder="sodium"
            onChange={(e) => setSodium(e.target.value)}
            />

            <input
            type="number"
            value={potassium}
            placeholder="potassium"
            onChange={(e) => setPotassium(e.target.value)}
            />

            <input
            type="number"
            value={haemoglobin}
            placeholder="haemoglobin"
            onChange={(e) => setHaemoglobin(e.target.value)}
            />

            <input
            type="number"
            value={packed_cell_volume}
            placeholder="packed_cell_volume"
            onChange={(e) => setPacked_cell_volume(e.target.value)}
            />

            <input
            type="number"
            value={white_blood_cell_count}
            placeholder="white_blood_cell_count"
            onChange={(e) => setWhite_blood_cell_count(e.target.value)}
            />

            <input
            type="number"
            value={red_blood_cell_count}
            placeholder="red_blood_cell_count"
            onChange={(e) => setRed_blood_cell_count(e.target.value)}
            />

            <select id="" name="" placeholder="hypertension" onChange={(e) => setHypertension(e.target.value)}>
              <option value="None" disabled selected>Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>

            <select id="" name="" placeholder="diabetes_mellitus" onChange={(e) => setDiabetes_mellitus(e.target.value)}>
              <option value="None" disabled selected>Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>

            <select id="" name="" placeholder="coronary_artery_disease" onChange={(e) => setCoronary_artery_disease(e.target.value)}>
              <option value="None" disabled selected>Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>

            <select id="" name="" placeholder="appetite" onChange={(e) => setAppetite(e.target.value)}>
              <option value="None" disabled selected>Select</option>
              <option value="poor">Poor</option>
              <option value="good">Good</option>
            </select>

            <select id="" name="" placeholder="pedal_edema" onChange={(e) => setPedal_edema(e.target.value)}>
              <option value="None" disabled selected>Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>

            <select id="" name="" placeholder="anemia" onChange={(e) => setAnemia(e.target.value)}>
              <option value="None" disabled selected>Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>

            <button type="submit">Submit</button>

            <div className="message">Status{pred ? <p>{pred}</p> : null}</div>
            <div className="prob">Probability{prob ? <p>{prob}</p> : null}</div>
        </form>
        
    </div>
  )
}

export default Kidney