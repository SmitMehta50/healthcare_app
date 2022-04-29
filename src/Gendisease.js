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
      const [treatments, setTreatments] = useState([]);
      const [rates, setRates] = useState([])
    
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
            setTreatments(response.data[3].treatment)
            setRates(response.data[1]["rate"])
            
        
            // }else{setMessage("Error Occured")}
            // setMessage(response)
       //Perform action based on response
        }).catch((error)=>console.log(error));
      };
      const treat = treatments.map((treatment)=>{
        return <li key={treatment.toString()}>
          {treatment}
          </li>;
        });

        const fileData = () => {
            if (message && discription){
            return(
              <div>
                <div className="bg-white mx-6 lg:mx-[20%] mb-10 shadow overflow-hidden sm:rounded-lg">
                  <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Disease Information</h3>
                  </div>
                  <div className="border-t border-gray-200">
                    <dl>
                      <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Disease</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{message}</dd>
                      </div>
                      <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Description</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{discription}</dd>
                      </div>
                      <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className=" text-sm font-medium text-gray-500">Treatment/Precautions</dt>
                        <dd className="list-none  mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{treat}</dd>
                      </div>
                      <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Rate</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{rates ? `${JSON.stringify(rates)}` : null}</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            );
          }
          }
      
      // const selectvalue = selectedValue.map((sv)=>{
      //   return <li key={sv.toString()}>
      //     {sv}
      //     </li>;
      //   });


  return (
    <div className='text-left'>
        <h1 className='text-center mt-6 mb-10 text-xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl'>General Disease Prediction</h1>

      
      <form onSubmit={handleSubmit}>
        <div className='flex justify-center'>
          <Select
              className="dropdown w-[80%] lg:w-[50%]"
              placeholder="Select Option"
              value={data.filter(obj => selectedValue.includes(obj.value))} // set selected values
              options={data} // set list of the data
              onChange={handleChange} // assign onChange function
              isMulti
              isClearable
          />
        </div>

        <div className='flex justify-center'>
          <p className='mt-2 text-gray-500 text-xs italic'>Select Minimun 3 values for better results</p>
        </div>

        <div className='flex justify-center'>
          <button className='place-self-center my-5 shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded' type="submit">Submit</button>
        </div>
        
        {/* {selectedValue && <div style={{ marginTop: 20, lineHeight: '25px' }}>
            <div><b>Selected Value: </b> {JSON.stringify(selectedValue, null, 2)}</div>
        </div>} */}
        
            {/* <div className='flex flex-wrap justify-evenly'>
              <b>Selected Value: </b> {selectvalue}
            </div> */}

        {/* <button className='place-self-center my-5 shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded' type="submit">Submit</button> */}
      </form>
      {/* <div className="message"><h3>Status :</h3> {message }</div>
      <div className="prob"><h3>Description :</h3> {discription}</div>
      <div className='list-none'><h3>Treatment :</h3>{treat}</div>
      <div><h3>Rate :</h3>{JSON.stringify(rates)}</div> */}


      {fileData()}
      {/* ***************************************************************** */}
      {/* <div className="bg-white mx-6 lg:mx-[20%] mb-10 shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Disease Information</h3>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Disease</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{message}</dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Description</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{discription}</dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className=" text-sm font-medium text-gray-500">Treatment/Precautions</dt>
              <dd className="list-none  mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{treat}</dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Rate</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{rates ? `${JSON.stringify(rates)}` : null}</dd>
            </div>
          </dl>
        </div>
      </div> */}

        
      
  </div>
  )
}


export default Gendisease;