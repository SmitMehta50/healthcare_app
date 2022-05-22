import React from 'react'
// import Diabetes from './Diabetes'

function Patient() {
  return (
    <div>
      <div className='grid lg:grid-cols-2 bg-contain'>
        <main className="w-auto pt-16 lg:pt-32 px-10">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Enrich your</span>{' '}
                <span className="block text-indigo-600 xl:inline">health</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Get yourself check before its too late</p>
              <p className=" text-base text-gray-500  sm:text-lg sm:max-w-xl sm:mx-auto  md:text-xl lg:mx-0">A Disease prediction system using cutting-edge AI technology to assist Doctors and Patients.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="/generaldisease"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                  >
                    General Disease
                  </a>
                </div>

                
                {/* <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="/diabetes"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                  >
                    Diabetes
                  </a>
                </div> */}

                {/* <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="/pneumonia"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                  >
                    Pneumonia
                  </a>
                </div> */}
              </div>
            </div>
          </main>
        </div>
    </div>
  )
}

export default Patient