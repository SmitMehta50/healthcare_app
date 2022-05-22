import React from 'react'
import Featuresection from './Featuresection'

function Services() {
  return (
    <div>
        <div>
      <div className='grid lg:grid-cols-1 bg-contain'>
        <main className="w-auto pt-10 lg:pt-10 px-10">
            <div className="sm:text-center lg:text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Services</span>{' '}
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl ">
              Get yourself check before its too late</p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center">
              
              <div className="rounded-md shadow">
                    <a
                    href="/generaldisease"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                    >
                    General&nbsp;Disease
                  </a>
                </div>

                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="/diabetes"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                  >
                    Diabetes
                  </a>
                </div>

                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="/pneumonia"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                  >
                    Pneumonia
                  </a>
                </div>

                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="/heart"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                  >
                    Heart
                  </a>
                </div>

                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="/kidney"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                  >
                    Kidney
                  </a>
                </div>

                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="/liver"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                  >
                    Liver
                  </a>
                </div>

              </div>
            </div>
          </main>
          
      </div> 
    </div>
    <Featuresection/>
    </div>
  )
}

export default Services