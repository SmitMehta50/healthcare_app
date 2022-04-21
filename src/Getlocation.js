import React, {  } from 'react'
import useGeoLocation from './hooks/useGeoLocation'

function Getlocation() {
const location = useGeoLocation("");
// console.log(location.coordinates.lat)
// console.log(location.coordinates.lng)
console.log(location.loaded)

var mylocation={
    latitude: location.coordinates.lat,
    longitude : location.coordinates.lng
}

console.log(mylocation)



  return (
    <div className=" inline-block mr-auto pt-1">
        <h2>{mylocation.latitude}</h2>
        <h2>{mylocation.longitude}</h2>
    </div>
  )
}

export default Getlocation