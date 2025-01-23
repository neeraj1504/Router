import React from 'react'
import Image from './3.jpg'; 
const Photo3 = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="overflow-hidden">
        <img src={Image} className="w-[400px] h-[400px]" alt="Image" />
      </div>
    </div>
  )
}

export default Photo3