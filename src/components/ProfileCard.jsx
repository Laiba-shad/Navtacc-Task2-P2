import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const ProfileCard = ({ person}) => {
  return (
    <>
      <div className="object-cover border-2 border-gray-200 shadow-sm rounded-3xl w-120 flex items-center p-12 gap-4">
        <div className="relative">
          <img
            src={person.pic}
            alt="Profile"
            className="rounded-full size-30 font-bold"
          ></img>

          {person.verified && (
            <div className="absolute bottom-3 right-3 ">
              <FaCheckCircle color="blue" size={24}/>
            </div>
          )}
        </div>

        <div className="flex-col ">
          <h1 className="font-bold text-black mb-4">{person.name}</h1>
          <h2 className="font-semibold text-gray-500 text-lg">
            {(person.title?.toUpperCase()?? "in case of null")||"in case of empty"}
          </h2>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
