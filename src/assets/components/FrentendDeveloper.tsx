import { FaLinkedin } from "react-icons/fa";
import type { Developer } from "../../App";
import { FaGithub } from "react-icons/fa6";
import { Mail } from "lucide-react";

type DeveloperCardProps = {
  Dev: Developer;
};

const FrentendDeveloper = ({ Dev }: DeveloperCardProps) => {
  return (
    <>
      <div className="relative rounded-3xl shadow-xl w-60 h-70 mt-4 items-center flex flex-col mx-3">
        <div className="h-1/3 bg-blue-500 w-full rounded-t-3xl"> </div>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border-4 border-blue-500 ">
          <img src={Dev.pic} alt="picture" className="rounded-full font-bold" />
        </div>

        <div className="mt-12 mb-2 ">
          <h1 className=" text-base text-center">{Dev.title}</h1>
          <h2 className="text-[14px] text-gray-500 text-center">{Dev.subtitle}</h2>
        </div>
        <div className="flex gap-2 mb-5">
          <a href="">
            <FaLinkedin size={19} color="blue" />
          </a>
          <a href="">
            <FaGithub size={19} />
          </a>
          <a href="">
            <Mail size={19} color="red" />
          </a>
        </div>

<div className="mb-4">
  <button className="bg-blue-500 rounded-2xl text-white px-3 py-1 text-sm ">Message</button>
</div>

      </div>
    </>
  );
};

export default FrentendDeveloper;
