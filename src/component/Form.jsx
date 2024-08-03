import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
const Form = ({ formSubmitData }) => {
  const { register, handleSubmit } = useForm();
  return (
    <div className="flex justify-center bg-zinc-300">
      <div className="fixed h-[50%] w-[50%] bg-zinc-100 mx-auto top-40 z-10 rounded-md p-8">
        <span className="font-bold text-zinc-700 text-xl">
          Enter Details - Create Your Own Banner
        </span>
        <Link
          className="absolute top-6 text-2xl right-8 font-bold text-zinc-400 hover:text-zinc-700  "
          to="/"
        >
          {" "}
          X{" "}
        </Link>
        <div className="flex mt-4"></div>
        <form
          action=""
          onSubmit={handleSubmit(data=> {
            formSubmitData(data);
            console.log(data);
          })}
        >
          <input
            {...register("title")}
            className=" mt-12 p-2 h-8 w-[80%] rounded"
            type="text"
            placeholder="Please Enter Heading"
          />
          <textarea
            {...register("dis")}
            className="mt-4 p-2 w-[80%] rounded"
            name="Enter Description"
            id=""
          >
            Enter Description.....
          </textarea>
          <input
            {...register("button")}
            className=" mt-4 p-2 h-8 w-[80%] rounded block"
            type="text"
            placeholder="Enter Button Name"
          />
          <input
            {...register("img")}
            className="mt-4 p-2 h-8 w-[80%] rounded block"
            type="text"
            placeholder=" Image Link Background"
          />
          <button
            type="submit"
            className=" mt-4 px-2 py-[2px] rounded bg-green-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
