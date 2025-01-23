import React, { useState } from 'react';
const Hooks = () => {
  const [color, setColor] = useState("white");

  const changedColor = (color) => {
    setColor(color);
  };

  return (
    <div className={`h-screen ${color}`}>
      <h1 className="text-center text-2xl font-bold py-4">
        Changing the Background Color
      </h1>
      <div className="flex justify-center gap-4">
        <button
          onClick={() => changedColor("bg-red-500")}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Red
        </button>
        <button
          onClick={() => changedColor("bg-green-500")}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Green
        </button>
        <button
          onClick={() => changedColor("bg-purple-500")}
          className="px-4 py-2 bg-purple-500 text-white rounded"
        >
          Purple
        </button>
        <button
          onClick={() => changedColor("bg-teal-500")}
          className="px-4 py-2 bg-teal-500 text-white rounded"
        >
          Aqua
        </button>
      </div>
    </div>
  );
};

export default Hooks;
