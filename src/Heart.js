import React, {useState} from 'react';
import axios from 'axios'
import ScrollToTop from './ScroolToTop';
// import Nav from './Nav'

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
    const [submit, setSubmit] = useState(false)

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
        setSubmit(true)

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

      const fileData = () => {
        if (submit && message && prob){
        return(
          <div>
            <ScrollToTop>
            <div className="message">Status{message ? <p>{message}</p> : null}</div>
            <div className="prob">Probability{prob ? <p>{prob}</p> : null}</div>

            </ScrollToTop>
            
          </div>
        );
      }
      }

  return (
    <div>
        <h1 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl'>Heart</h1>
        {fileData()}
        {/* <form onSubmit={handleSubmit}>
            <input
            type="number"
            value={age}
            placeholder="Age"
            onChange={(e) => setAge(e.target.value)}
            />
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
      </form> */}

{/* ************************************************************************************************** */}
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
                Gender
              </label>
              <select className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' id="" name="" placeholder="Gender" onChange={(e) => setSex(e.target.value)}>
                <option value="None" disabled selected>Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <p className='text-gray-500 text-xs'>Fill out this field</p>
            </div>
          </div>

          <div className='flex flex-wrap mx-3 mb-6'>
            <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
              <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
                Chest Pain
              </label>
              <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              type="number"
              value={cp}
              placeholder="Chest Pain"
              onChange={(e) => setCp(e.target.value)}
              />
              <p className='text-gray-500 text-xs italic'>Fill out this field</p>
            </div>
            <div className='w-full md:w-1/2 px-3'>
              <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
                Resting Blood Pressure
              </label>
              <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              type="number"
              value={trestbps}
              placeholder="Resting Blood Pressure"
              onChange={(e) => setTrestbps(e.target.value)}
              />
              <p className='text-gray-500 text-xs'>Fill out this field</p>
            </div>
          </div>

          <div className='flex flex-wrap mx-3 mb-6'>
            <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
              <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
                Serum cholestoral in mg/dl
              </label>
              <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              type="number"
              value={chol}
              placeholder="Serum cholestoral in mg/dl"
              onChange={(e) => setChol(e.target.value)}
              />
              <p className='text-gray-500 text-xs italic'>Fill out this field</p>
            </div>
            <div className='w-full md:w-1/2 px-3'>
              <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
              Fasting blood sugar {'>'} 120 mg/dl
              </label>
              <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              type="number"
              value={fbs}
              placeholder="Fasting blood sugar > 120 mg/dl"
              onChange={(e) => setFbs(e.target.value)}
              />
              <p className='text-gray-500 text-xs'>Fill out this field</p>
            </div>
          </div>
          <div className='flex flex-wrap mx-3 mb-6'>
            <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
              <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
              Resting electrocardiographic
              </label>
              <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              type="number"
              value={restecg}
              placeholder="Resting electrocardiographic"
              onChange={(e) => setRestecg(e.target.value)}
              />
              <p className='text-gray-500 text-xs italic'>Fill out this field</p>
            </div>
            <div className='w-full md:w-1/2 px-3'>
              <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
              Maximum heart rate
              </label>
              <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              type="number"
              value={thalach}
              placeholder="Maximum heart rate"
              onChange={(e) => setThalach(e.target.value)}
              />
              <p className='text-gray-500 text-xs'>Fill out this field</p>
            </div>
          </div>

          <div className='flex flex-wrap mx-3 mb-6'>
            <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
              <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
              Exercise induced angina
              </label>
              <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              type="number"
              value={exang}
              placeholder="Exercise induced angina"
              onChange={(e) => setExang(e.target.value)}
              />
              <p className='text-gray-500 text-xs italic'>Fill out this field</p>
            </div>
            <div className='w-full md:w-1/2 px-3'>
              <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
              Old Peak
              </label>
              <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              type="number"
              value={oldpeak}
              placeholder="Old Peak"
              onChange={(e) => setOldpeak(e.target.value)}
              />
              <p className='text-gray-500 text-xs'>Fill out this field</p>
            </div>
          </div>

          <div className='flex flex-wrap mx-3 mb-6'>
            <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
              <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
              ST segment
              </label>
              <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              type="number"
              value={slope}
              placeholder="ST segment"
              onChange={(e) => setSlope(e.target.value)}
              />
              <p className='text-gray-500 text-xs italic'>Fill out this field</p>
            </div>
            <div className='w-full md:w-1/2 px-3'>
              <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
              Number of major vessels
              </label>
              <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              type="number"
              value={ca}
              placeholder="Number of major vessels"
              onChange={(e) => setCa(e.target.value)}
              />
              <p className='text-gray-500 text-xs'>Fill out this field</p>
            </div>
          </div>
          <div className='flex flex-wrap mx-3 mb-6'>
            <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
              <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
              Thal
              </label>
              <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
               type="number"
               value={thal}
               placeholder="Thal"
               onChange={(e) => setThal(e.target.value)}
              />
              <p className='text-gray-500 text-xs italic'>Fill out this field</p>
            </div>
            
          </div>
          
          



          {/* Submit Button */}
          <div className='md:flex lg:flex md:items-center lg:items-center'>
            <div className='md:w-1/3'></div>
            <div className='md:w-1/3'>
              <button className='shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded' type="submit">
                Submit
              </button>
            </div>
          </div>
          {/* <div className="message">Status{message ? <p>{message}</p> : null}</div>
          <div className="prob">Probability{prob ? <p>{prob}</p> : null}</div> */}
          
        </form>
    </div>
  )
}

export default Heart