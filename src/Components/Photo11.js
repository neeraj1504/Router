// import React from 'react';
// import image from './1.jpg';
// const Photo11 = () => {
//   return (
//     <div >
//       <div className=' items-center justify-center overflow-hidden'>
//       <img src={image} className="w-[400px] h-[400px] "></img>
//       </div>
//     </div>
//   )
// }

// export default Photo11;

import React from 'react';
import image from './1.jpg';

const Photo11 = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="overflow-hidden">
        <img src={image} className="w-[400px] h-[400px]" alt="Image" />
      </div>
    </div>
  );
};

export default Photo11;
