import React from 'react'
import report from './assets/ProjectReport.pdf'

function About() {
  return (
    <div>
        <h1 className="py-8 text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">About</span>{' '}
              </h1>
              <div className=''>
              <object width="100%" height="600" data={report} type="application/pdf">   </object>
              </div>
              
    </div>
    
  )
}

export default About