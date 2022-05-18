import React from "react";
import Caption from "./utils/Caption";

const CardCountry = ({ name, emoji, phone, capital, currency, groupBy }) => {
  return (
    <div className="my-8">
      <Caption text={groupBy} />
      <div className=" bg-white shadow border-gray-500 w-full sm:w-2/3  lg:w-2/5 border p-5 mt-3 rounded">
        <div className="flex items-center">
          <span className="mr-3">{emoji}</span>
          <p className="font-semibold">{name}</p>
        </div>
        <div className="text-gray-500 pt-2">
          <p>
            <span className="text-black font-semibold">Capital: </span>
            {capital}
          </p>
          <p>
            <span className="text-black font-semibold">Currency: </span>
            {currency}
          </p>
          <p>
            <span className="text-black font-semibold">Area code: </span>+
            {phone}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardCountry;
