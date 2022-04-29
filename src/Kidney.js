import React, {useState} from 'react';
import axios from 'axios'
// import ScrollToTop from './ScroolToTop';
import Modal from './Modal'
// import Nav from './Nav'

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
    // const [submit, setSubmit] = useState(false)
    const [open, setOpen] = useState(false)

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
        // setSubmit(true)

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

      // const fileData = () => {
      //   if (submit){
      //   return(
      //     <div>
      //       <ScrollToTop>
      //       <div className="message">Status{pred ? <p>{pred}</p> : null}</div>
      //       <div className="prob">Probability{prob ? <p>{prob}</p> : null}</div>

      //       </ScrollToTop>
            
      //     </div>
      //   );
      // }
      // }


  return (
    <div className='py-10'>
      <h1 className='text-center  mb-10 text-xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl'>Kidney Disease Prediction</h1>
      {/* {fileData()} */}
        <form className='w-full' onSubmit={handleSubmit}>
          <div className='flex flex-wrap mx-3 mb-6'>
            <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
              <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
                Age
              </label>
              <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              type="number"
              value={age}
              placeholder="Age"
              onChange={(e) => setAge(e.target.value)}
              />
              <p className='text-gray-500 text-xs italic'>Fill out this field</p>
            </div>

            <div className='w-full md:w-1/2 px-3'>
              <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
                Blood Pressure
              </label>
              <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              type="number"
              value={blood_pressure}
              placeholder="blood_pressure"
              onChange={(e) => setBlood_pressure(e.target.value)} 
              />
              <p className='text-gray-500 text-xs'>Fill out this field</p>
            </div>
          </div>

          <div className='flex flex-wrap mx-3 mb-6'>
            <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
              <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
                Specific Gravity
              </label>
              <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              type="number"
              value={specific_gravity}
              placeholder="specific_gravity"
              onChange={(e) => setSpecific_gravity(e.target.value)}
              />
              <p className='text-gray-500 text-xs italic'>Fill out this field</p>
            </div>
            <div className='w-full md:w-1/2 px-3'>
              <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
                Albumin
              </label>
              <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              type="number"
              value={albumin}
              placeholder="albumin"
              onChange={(e) => setAlbumin(e.target.value)}
              />
              <p className='text-gray-500 text-xs'>Fill out this field</p>
            </div>
          </div>

          <div className='flex flex-wrap mx-3 mb-6'>
            <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
              <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
                Sugar
              </label>
              <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              type="number"
              value={sugar}
              placeholder="sugar"
              onChange={(e) => setSugar(e.target.value)}
              />
              <p className='text-gray-500 text-xs italic'>Fill out this field</p>
            </div>
            <div className='w-full md:w-1/2 px-3'>
              <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
                Red Blood Cells
              </label>
              <select className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' id="" name="" placeholder="Red_blood_cells" onChange={(e) => setRed_blood_cells(e.target.value)}>
                <option value="None" disabled selected>Select</option>
                <option value="abnormal">Abnormal</option>
                <option value="normal">Normal</option>
              </select>
              <p className='text-gray-500 text-xs'>Fill out this field</p>
            </div>
          </div>
          <div className='flex flex-wrap mx-3 mb-6'>
            <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
              <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
                Pus Cells
              </label>
              <select className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' id="" name="" placeholder="pus_cell" onChange={(e) => setPus_cell(e.target.value)}>
                <option value="None" disabled selected>Select</option>
                <option value="abnormal">Abnormal</option>
                <option value="normal">Normal</option>
              </select>
              <p className='text-gray-500 text-xs italic'>Fill out this field</p>
            </div>
            <div className='w-full md:w-1/2 px-3'>
              <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
                Pus Cell Clumps
              </label>
              <select className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' id="" name="" placeholder="pus_cell_clumps" onChange={(e) => setPus_cell_clumps(e.target.value)}>
                <option value="None" disabled selected>Select</option>
                <option value="present">Present</option>
                <option value="notpresent">Notpresent</option>
              </select>
              <p className='text-gray-500 text-xs'>Fill out this field</p>
            </div>
          </div>

          <div className='flex flex-wrap mx-3 mb-6'>
            <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
              <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
                Bacteria
              </label>
              <select className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' id="" name="" placeholder="bacteria" onChange={(e) => setBacteria(e.target.value)}>
                <option value="None" disabled selected>Select</option>
                <option value="present">Present</option>
                <option value="notpresent">Notpresent</option>
              </select>
              <p className='text-gray-500 text-xs italic'>Fill out this field</p>
            </div>

            <div className='w-full md:w-1/2 px-3'>
              <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
                Blood Glucose Random
              </label>
              <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              type="number"
              value={blood_glucose_random}
              placeholder="blood_glucose_random"
              onChange={(e) => setBlood_glucose_random(e.target.value)}
              />
              <p className='text-gray-500 text-xs'>Fill out this field</p>
            </div>
          </div>

          <div className='flex flex-wrap mx-3 mb-6'>
            <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
              <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
                Blood Urea
              </label>
              <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              type="number"
              value={blood_urea}
              placeholder="blood_urea"
              onChange={(e) => setBlood_urea(e.target.value)}
              />
              <p className='text-gray-500 text-xs italic'>Fill out this field</p>
            </div>

            <div className='w-full md:w-1/2 px-3'>
              <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
                Serum Creatinine
              </label>
              <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                type="number"
                value={serum_creatinine}
                placeholder="serum_creatinine"
                onChange={(e) => setSerum_creatinine(e.target.value)}
              />
              <p className='text-gray-500 text-xs'>Fill out this field</p>
            </div>
          </div>

          <div className='flex flex-wrap mx-3 mb-6'>
            <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
              <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
                Sodium
              </label>
              <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              type="number"
              value={sodium}
              placeholder="sodium"
              onChange={(e) => setSodium(e.target.value)}
              />
              <p className='text-gray-500 text-xs italic'>Fill out this field</p>
            </div>

            <div className='w-full md:w-1/2 px-3'>
              <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
                Potassium
              </label>
              <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              type="number"
              value={potassium}
              placeholder="potassium"
              onChange={(e) => setPotassium(e.target.value)} 
              />
              <p className='text-gray-500 text-xs'>Fill out this field</p>
            </div>
          </div>

          <div className='flex flex-wrap mx-3 mb-6'>
            <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
              <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
                Heamoglobin
              </label>
              <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              type="number"
              value={haemoglobin}
              placeholder="haemoglobin"
              onChange={(e) => setHaemoglobin(e.target.value)}
              />
              <p className='text-gray-500 text-xs italic'>Fill out this field</p>
            </div>

            <div className='w-full md:w-1/2 px-3'>
              <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
                Packed Cell Volume
              </label>
              <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              type="number"
              value={packed_cell_volume}
              placeholder="packed_cell_volume"
              onChange={(e) => setPacked_cell_volume(e.target.value)}
              />
              <p className='text-gray-500 text-xs'>Fill out this field</p>
            </div>
          </div>

          <div className='flex flex-wrap mx-3 mb-6'>
            <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
              <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
                White Blood Cell Count
              </label>
              <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              type="number"
              value={white_blood_cell_count}
              placeholder="white_blood_cell_count"
              onChange={(e) => setWhite_blood_cell_count(e.target.value)}
              />
              <p className='text-gray-500 text-xs italic'>Fill out this field</p>
            </div>

            <div className='w-full md:w-1/2 px-3'>
              <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
                Red Blood Cell Count
              </label>
              <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              type="number"
              value={red_blood_cell_count}
              placeholder="red_blood_cell_count"
              onChange={(e) => setRed_blood_cell_count(e.target.value)}
              />
              <p className='text-gray-500 text-xs'>Fill out this field</p>
            </div>
          </div>

          <div className='flex flex-wrap mx-3 mb-6'>
            <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
              <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
                Hypertension
              </label>
              <select className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' id="" name="" placeholder="hypertension" onChange={(e) => setHypertension(e.target.value)}>
                <option value="None" disabled selected>Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              <p className='text-gray-500 text-xs italic'>Fill out this field</p>
            </div>

            <div className='w-full md:w-1/2 px-3'>
              <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
                Diabetes Mellitus
              </label>
              <select className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' id="" name="" placeholder="diabetes_mellitus" onChange={(e) => setDiabetes_mellitus(e.target.value)}>
                <option value="None" disabled selected>Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              <p className='text-gray-500 text-xs'>Fill out this field</p>
            </div>
          </div>

          <div className='flex flex-wrap mx-3 mb-6'>
            <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
              <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
                Coronary Artery Disease
              </label>
              <select className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' id="" name="" placeholder="coronary_artery_disease" onChange={(e) => setCoronary_artery_disease(e.target.value)}>
                <option value="None" disabled selected>Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              <p className='text-gray-500 text-xs italic'>Fill out this field</p>
            </div>

            <div className='w-full md:w-1/2 px-3'>
              <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
                Appetite
              </label>
              <select className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' id="" name="" placeholder="appetite" onChange={(e) => setAppetite(e.target.value)}>
                <option value="None" disabled selected>Select</option>
                <option value="poor">Poor</option>
                <option value="good">Good</option>
              </select>
              <p className='text-gray-500 text-xs'>Fill out this field</p>
            </div>
          </div>

          <div className='flex flex-wrap mx-3 mb-6'>
            <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
              <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
                Pedal Edema
              </label>
              <select className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' id="" name="" placeholder="pedal_edema" onChange={(e) => setPedal_edema(e.target.value)}>
                <option value="None" disabled selected>Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              <p className='text-gray-500 text-xs italic'>Fill out this field</p>
            </div>

            <div className='w-full md:w-1/2 px-3'>
              <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
                Anemia
              </label>
              <select className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' id="" name="" placeholder="anemia" onChange={(e) => setAnemia(e.target.value)}>
                <option value="None" disabled selected>Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              <p className='text-gray-500 text-xs'>Fill out this field</p>
            </div>
          </div>
          {/* Submit Button */}
          <div className='md:flex lg:flex md:items-center lg:items-center'>
            <div className='md:w-1/3'></div>
            <div className='md:w-1/3'>
              <button onClick={() => setOpen(true)} className='shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded' type="submit">
                Submit
              </button>
            </div>
          </div>
          {/* Modal */}

          <div>{pred ? <Modal
          open = {open}
          setOpen = {setOpen}
          status ={pred}
          prob= {Number(prob)*100 }
          ></Modal> : null}</div>
          {/* <div className="message">Status{pred ? <p>{pred}</p> : null}</div>
          <div className="prob">Probability{prob ? <p>{prob}</p> : null}</div> */}
          
        </form>





      {/* 8******************************************************************************************* */}



        {/* <h1 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl'>Kidney</h1>
        <form onSubmit={handleSubmit}>
            <input
            type="number"
            value={age}
            placeholder="Age"
            onChange={(e) => setAge(e.target.value)}
            />

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

            <select className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' id="" name="" placeholder="Red_blood_cells" onChange={(e) => setRed_blood_cells(e.target.value)}>
              <option value="None" disabled selected>Select</option>
              <option value="abnormal">Abnormal</option>
              <option value="normal">Normal</option>
            </select>

            <select className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' id="" name="" placeholder="pus_cell" onChange={(e) => setPus_cell(e.target.value)}>
              <option value="None" disabled selected>Select</option>
              <option value="abnormal">Abnormal</option>
              <option value="normal">Normal</option>
            </select>

            <select className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' id="" name="" placeholder="pus_cell_clumps" onChange={(e) => setPus_cell_clumps(e.target.value)}>
              <option value="None" disabled selected>Select</option>
              <option value="present">Present</option>
              <option value="notpresent">Notpresent</option>
            </select>

            <select className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' id="" name="" placeholder="bacteria" onChange={(e) => setBacteria(e.target.value)}>
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

            <select className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' id="" name="" placeholder="hypertension" onChange={(e) => setHypertension(e.target.value)}>
              <option value="None" disabled selected>Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>

            <select className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' id="" name="" placeholder="diabetes_mellitus" onChange={(e) => setDiabetes_mellitus(e.target.value)}>
              <option value="None" disabled selected>Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>

            <select className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' id="" name="" placeholder="coronary_artery_disease" onChange={(e) => setCoronary_artery_disease(e.target.value)}>
              <option value="None" disabled selected>Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>

            <select className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' id="" name="" placeholder="appetite" onChange={(e) => setAppetite(e.target.value)}>
              <option value="None" disabled selected>Select</option>
              <option value="poor">Poor</option>
              <option value="good">Good</option>
            </select>

            <select className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' id="" name="" placeholder="pedal_edema" onChange={(e) => setPedal_edema(e.target.value)}>
              <option value="None" disabled selected>Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>

            <select className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' id="" name="" placeholder="anemia" onChange={(e) => setAnemia(e.target.value)}>
              <option value="None" disabled selected>Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>

            <button type="submit">Submit</button>

            <div className="message">Status{pred ? <p>{pred}</p> : null}</div>
            <div className="prob">Probability{prob ? <p>{prob}</p> : null}</div>
        </form> */}
        
    </div>
  )
}

export default Kidney