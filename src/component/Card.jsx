import React from "react";
import { Link } from "react-router-dom";


const Card = (props) => {
  // console.log(props);
  return (
    <div
      className={`relative bg-zinc-200 w-[480px] h-[270px] rounded mt-6 overflow-hidden mr-4 z-10 ${props.img.font}`}
    >
      <img
        className="z-10 absolute"
        src={`https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/${props.img.imageno}/landscape.png `}
        alt=""
      />
      <div className="absolute top-6 left-4 w-[43%] h-[23%] overflow-hidden text-wrap z-20">
        <h1 className="text-xl font-bold break-words">
        {props.img.title}
        </h1>
      </div>
      <div className="absolute top-20 left-4 w-[43%] h-[34%] text-wrap overflow-hidden z-20 mt-3">
        <h1 className="break-words font-medium">
        {props.img.description}
        </h1>
      </div>
      <div
        className={`absolute ${props.img.imageposition} ${props.img.wh} z-0`}
      >
        <img
          className="object-fit w-[100%] h-[100%]"
          src={`${props.img.image}`}
          alt="photo"
        />
      </div>
      <div className="absolute bottom-8 left-4 text-xl bg-white px-[6px] h-[12%]  z-20 text-black rounded border-2 ">
        <h1 className="text-center font-bold ">{props.img.button}</h1>
      </div>
      <Link
        className="absolute text-black top-4 right-4 z-20 font-medium bg-blue-200 px-2 rounded"
        to="/edit"
      >
        Edit
      </Link>
    </div>
  );
};
export default Card;
