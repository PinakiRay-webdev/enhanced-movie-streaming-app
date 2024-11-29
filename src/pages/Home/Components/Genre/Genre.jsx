import React from "react";
import { genres } from "../../../../utils/Utils";

const Genre = () => {
  return (
    <div className="px-10 py-3">
      <h1 className="text-amber-400 text-4xl">Spotlight of the week</h1>
      <div className="grid grid-rows-2 grid-cols-3 gap-4" >
        {genres.map((Element, id) => (
          <div
            key={id}
            className="g-box h-[25vh] flex items-center justify-center rounded-md cursor-pointer relative"
          >
            <p className="z-10 absolute font-semibold text-lg text-white">
              {Element.name}
            </p>
            <img
              className="w-full h-full object-cover brightness-[50%]"
              src={Element.imgage}
              alt=""
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Genre;
