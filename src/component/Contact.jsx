import React from "react";

const Contact = () => {
  return (
    <div class="box flex flex-col items-center fixed top-0 mt-12 z-20 bg-white h-[100%] w-[100%]">
      <div class="image w-36 h-36 overflow-hidden bg-sky-200 rounded-full mt-10 mb-3">
        <img
          class=" w-full h-full "
          src="https://i.redd.it/cb7kubsfs5551.jpg"
          alt="photo"
        />
      </div>
      <div class="flex items-center flex-col">
        <h3 class="font-semibold text-xl  text-center">Hi! i Am Kunal😄</h3>
        <h1 class="text-center font-bold text-2xl  mt-6 mx-5 leading-none w-3/4	">
        Passionate Frontend Developer | Seeking Opportunities to Grow and Learn
        </h1>
        <h4 class="text-center mt-6 w-2/3 font-medium	 ">
          💻 My love for coding and creating captivating user experiences drives
          me to stay updated with the latest technologies and trends in
          front-end development. From HTML5, CSS3, and JavaScript to frameworks
          like React.js and Vue.js, I'm dedicated to mastering the tools that
          power modern web applications.
        </h4>
        <button class=" bg-black rounded-full mt-5 text text-white px-4 py-2 font-medium">
          Contact Me on Kunalms203@gmail.com
        </button>
      </div>
    </div>
  );
};

export default Contact;
