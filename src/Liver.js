import React, {useState} from 'react';
import axios from 'axios'
// import ScrollToTop from './ScroolToTop';
import Modal from './Modal'
// import Nav from './Nav'

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
    // const [submit, setSubmit] = useState(false)
    const [open, setOpen] = useState(false)


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
        // setSubmit(true)

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

      // const fileData = () => {
      //   if (submit){
      //   return(
      //     <div>
      //       <ScrollToTop>
      //       <div className="message">Status{pred ? <p>{pred}</p> : null}</div>
      //     <div className="prob">Probability{prob ? <p>{prob}</p> : null}</div>

      //       </ScrollToTop>
            
      //     </div>
      //   );
      // }
      // }

  return (
    <div className='py-10'>
      <h1 className='text-center  mb-10 text-xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl'>Liver Disease Prediction</h1>
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
              <p className='text-gray-500 text-xs italic'>4.0 {'>'} value {'>'} 90.0 </p>
            </div>
            <div className='w-full md:w-1/2 px-3'>
              <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
                Gender
              </label>
              <select className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' id="" name="" placeholder="Gender" onChange={(e) => setGender(e.target.value)}>
                <option value="None" disabled selected>Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <p className='text-gray-500 text-xs italic'>Select Gender</p>
            </div>
          </div>

          <div className='flex flex-wrap mx-3 mb-6'>
            <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
              <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
                Total Bilirubin
              </label>
              <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              type="number"
              value={total_Bilirubin}
              placeholder="Total_Bilirubin"
              onChange={(e) => setTotal_Bilirubin(e.target.value)}
              />
              <p className='text-gray-500 text-xs italic'>0.4 {'>'} value {'>'} 75.0</p>
            </div>
            <div className='w-full md:w-1/2 px-3'>
              <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
                Direct Bilirubin
              </label>
              <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              type="number"
              value={direct_Bilirubin}
              placeholder="Direct_Bilirubin"
              onChange={(e) => setDirect_Bilirubin(e.target.value)}
              />
              <p className='text-gray-500 text-xs italic'>2.816499 {'>'} value {'>'} 19.7 </p>
            </div>
          </div>

          <div className='flex flex-wrap mx-3 mb-6'>
            <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
              <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
                Alkaline Phosphotase
              </label>
              <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              type="number"
              value={alkaline_Phosphotase}
              placeholder="Alkaline_Phosphotase"
              onChange={(e) => setAlkaline_Phosphotase(e.target.value)}
              />
              <p className='text-gray-500 text-xs italic'>175.5 {'>'} value {'>'} 2110.0 </p>
            </div>
            <div className='w-full md:w-1/2 px-3'>
              <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
              Alamine Aminotransferase
              </label>
              <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              type="number"
              value={alamine_Aminotransferase}
              placeholder="Alamine_Aminotransferase"
              onChange={(e) => setAlamine_Aminotransferase(e.target.value)}
              />
              <p className='text-gray-500 text-xs italic'>10.0 {'>'} value {'>'} 2000.0 </p>
            </div>
          </div>
          <div className='flex flex-wrap mx-3 mb-6'>
            <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
              <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
              Aspartate Aminotransferase
              </label>
              <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              type="number"
              value={aspartate_Aminotransferase}
              placeholder="Aspartate_Aminotransferase"
              onChange={(e) => setAspartate_Aminotransferase(e.target.value)}
              />
              <p className='text-gray-500 text-xs italic'>10.0 {'>'} value {'>'} 4929.0</p>
            </div>
            <div className='w-full md:w-1/2 px-3'>
              <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
              Total Protiens
              </label>
              <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              type="number"
              value={total_Protiens}
              placeholder="Total_Protiens"
              onChange={(e) => setTotal_Protiens(e.target.value)}
              />
              <p className='text-gray-500 text-xs italic'>2.7 {'>'} value {'>'} 9.6</p>
            </div>
          </div>

          <div className='flex flex-wrap mx-3 mb-6'>
            <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
              <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
              Albumin
              </label>
              <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              type="number"
              value={albumin}
              placeholder="Albumin"
              onChange={(e) => setAlbumin(e.target.value)}
              />
              <p className='text-gray-500 text-xs italic'>0.9 {'>'} value {'>'} 5.5 </p>
            </div>
            <div className='w-full md:w-1/2 px-3'>
              <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
              Albumin and Globulin Ratio
              </label>
              <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              type="number"
              value={albumin_and_Globulin_Ratio}
              placeholder="Albumin_and_Globulin_Ratio"
              onChange={(e) => setAlbumin_and_Globulin_Ratio(e.target.value)}
              />
              <p className='text-gray-500 text-xs italic'>0.3 {'>'} value {'>'} 2.8 </p>
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
          prob= {prob*100}
          ></Modal> : null}</div>
          {/* <div className="message">Status{pred ? <p>{pred}</p> : null}</div>
          <div className="prob">Probability{prob ? <p>{prob}</p> : null}</div> */}
          
        </form>


      {/* *********************************************************************************************************** */}
        {/* <h1 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl'>Liver</h1>
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
     */}
    </div>
  )
}

export default Liver