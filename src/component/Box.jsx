import React from "react";
import Card from "./Card";
import { useState } from "react";

const Box = ({cardData}) => {
  // console.log(cardData[0].title);
  // const [title, settitle] = useState(cardData[0].title);
  // const [description, setdescription] = useState(cardData[0].dis);
  // const [button, setbutton] = useState(cardData[0].button);
  // const [image, setimage] = useState(cardData[0].img)
  return (
    <div className="w-[65vw] h-[100vh] mx-auto pt-8 flex flex-wrap px-auto justify-center mt-12">
      <Card
        img={{
          imageposition: "top-0 w-[100%] h-[100%]",
          imageno: 2,
          font: "text-white",
          title: cardData[0].title,
          description: cardData[0].dis,
          button: cardData[0].button,
          image: cardData[0].img,
        }}
      />
      <Card
        img={{
          imageposition: "bottom-0 right-0 w-[50%] h-[90%]",
          imageno: 4,
          font: "text-white",
          title: cardData[0].title,
          description: cardData[0].dis,
          button: cardData[0].button,
          image: cardData[0].img,
        }}
      />
      <Card
        img={{
          imageposition: "top-4 right-6 w-[40%] h-[90%]",
          imageno: 7,
          font: "text-white",
          title: cardData[0].title,
          description: cardData[0].dis,
          button: cardData[0].button,
          image: cardData[0].img,
          
        }}
      />
      <Card
        img={{
          imageposition: "top-10 right-2",
          wh: "w-[35%] h-[70%]",
          imageno: 8,
          font: "text-white",
          title: cardData[0].title,
          description: cardData[0].dis,
          button: cardData[0].button,
          image: cardData[0].img,
        }}
      />
      <Card
        img={{
          imageposition: "top-4 right-4 w-[50%] h-[90%]",
          imageno: 10,
          font: "text-white",
          title: cardData[0].title,
          description: cardData[0].dis,
          button: cardData[0].button,
          image: cardData[0].img,
        }}
      />
      <Card
        img={{
          imageposition: "top-0 right-0 w-[45%] h-[100%]",
          imageno: 14,
          font: "text-white",
          title: cardData[0].title,
          description: cardData[0].dis,
          button: cardData[0].button,
          image: cardData[0].img,
        }}
      />
    </div>
  );
};

export default Box;
