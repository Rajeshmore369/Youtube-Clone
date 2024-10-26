import React from "react";
const buttonList = ["All", "JavaScript", "java", "live", "tranding", "songs"];
const ButtonList = () => {
  return (
    <div className="py-4">
      {buttonList.map((items, index) => {
        return (
          <button
            key={index}
            className="bg-gray-100 mx-2 font-medium px-4 py-1 rounded-lg"
          >
            {items}
          </button>
        );
      })}
    </div>
  );
};

export default ButtonList;
