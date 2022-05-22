import React, {useState} from 'react';
import axios from 'axios'
import Modal from './Modal'
// import Nav from './Nav'


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
    // const [submit, setSubmit] = useState(false)
    const [open, setOpen] = useState(false)



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
        // setSubmit(true)

        await axios.post('https://diabetessapi.herokuapp.com/diabetes', myParams)
        .then(function(response){
            console.log(response);
            var res = response
            if (res.status === 200){
            setMessage(response.data.message)
            setProb(response.data.probability)
            }else{setMessage("error")}
            // setMessage(response)
       //Perform action based on response
        }).catch((error)=>console.log(error));
      };

      // const fileData = () => {
      //   if (submit && message && prob){
      //   return(
      //     <div>
      //       <div className="message">Status{message ? <p>{message}</p> : null}</div>
      //       <div className="prob">Probability{prob ? <p>{prob/100}</p> : null}</div>
            
      //     </div>
      //   );
      // }
      // }
  return (
    <div className='mb-10'>
        <h4 className='text-center mt-6 mb-10 text-xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl'>Diabetes Detection</h4>
        {/* {fileData()} */}
        <form className='w-full' onSubmit={handleSubmit}>
          <div className='flex flex-wrap mx-3 mb-6'>
            <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
              <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
                Pregnancies
              </label>
              <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              type="number"
              value={pregnancies}
              placeholder="pregnancies"
              onChange={(e) => setPregnancies(e.target.value)}
              />
              <p className='text-gray-500 text-xs italic'> 0.000 {'>'} value {'>'} 17.00</p>
            </div>
            <div className='w-full md:w-1/2 px-3'>
              <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
                Glucose
              </label>
              <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              type="number"
              value={glucose}
              placeholder="glucose"
              onChange={(e) => setGlucose(e.target.value)}
              />
              <p className='text-gray-500 text-xs italic'>0.000 {'>'} value {'>'} 199.00</p>
            </div>
          </div>

          <div className='flex flex-wrap mx-3 mb-6'>
            <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
              <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
                BloodPressure
              </label>
              <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              type="number"
              value={bloodPressure}
              placeholder="bloodPressure"
              onChange={(e) => setBloodPressure(e.target.value)}
              />
              <p className='text-gray-500 text-xs italic'>0.000 {'>'} value {'>'} 199.00</p>
            </div>
            <div className='w-full md:w-1/2 px-3'>
              <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
                SkinThickness
              </label>
              <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              type="number"
              value={skinThickness}
              placeholder="skinThickness"
              onChange={(e) => setSkinThickness(e.target.value)}
              />
              <p className='text-gray-500 text-xs italic'>0.000 {'>'} value {'>'} 99.00</p>
            </div>
          </div>

          <div className='flex flex-wrap mx-3 mb-6'>
            <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
              <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
                Insulin
              </label>
              <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              type="number"
              value={insulin}
              placeholder="insulin"
              onChange={(e) => setInsulin(e.target.value)}
              />
              <p className='text-gray-500 text-xs italic'>0.000 {'>'} value {'>'} 846.00</p>
            </div>
            <div className='w-full md:w-1/2 px-3'>
              <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
                BMI
              </label>
              <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              type="number"
              value={bmi}
              placeholder="bmi"
              onChange={(e) => setBmi(e.target.value)}
              />
              <p className='text-gray-500 text-xs italic'>0.000 {'>'} value {'>'} 67.10</p>
            </div>
          </div>
          <div className='flex flex-wrap mx-3 mb-6'>
            <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
              <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
                Diabetes Pedigree Function
              </label>
              <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              type="number"
              value={diabetesPedigreeFunction}
              placeholder="diabetesPedigreeFunction"
              onChange={(e) => setDiabetesPedigreeFunction(e.target.value)}
              />
              <p className='text-gray-500 text-xs italic'>0.078 {'>'} value {'>'} 2.42</p>
            </div>
            <div className='w-full md:w-1/2 px-3'>
              <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
                Age
              </label>
              <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              type="number"
              value={age}
              placeholder="age"
              onChange={(e) => setAge(e.target.value)}
              />
              <p className='text-gray-500 text-xs italic'>21.000 {'>'} value {'>'} 81.00</p>
            </div>
          </div>
          {/* Submit Button */}

          <div className='md:flex lg:flex md:items-center lg:items-center'>
            <div className='md:w-1/3'></div>
            <div className='md:w-1/3'>
              <button onClick={() => setOpen(true)} className='shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded' type="submit" >
                Submit
              </button>
            </div>
          </div>

          {/* Modal */}

          <div>{message ?<Modal
          open = {open}
          setOpen = {setOpen}
          status ={message}
          prob= {prob}
          ></Modal>: null}</div>

          {/* <Modal
          open = {open}
          setOpen = {setOpen}/> */}

          
          {/* <div className="message">Status{message ? <p>{message}</p> : null}</div>
          <div className="prob">Probability{prob ? <p>{prob/100}</p> : null}</div> */}
          
        </form>



        {/* <form onSubmit={handleSubmit}>
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
      </form> */}

      
    </div>
  )
}

export default Diabetes