import { useState } from "react";
import "./App.css";
import Nav from "./component/Nav.jsx";
import Box from "./component/Box";
import { Route, Routes } from "react-router-dom";
import Form from "./component/Form.jsx";
import Contact from "./component/Contact.jsx";
function App() {
  const [card, setCard] = useState([
    {
      title: "GrowEasy",
      dis: "YOUR AI POWERED ALL IN ONE LEAD GENERATION APP",
      button: "Learn More",
      img: "https://i.pinimg.com/564x/7d/0d/31/7d0d3178aca50f34a8d586d2cbef27dc.jpg",
    },
  ]);
  const formSubmitData = (data) => {
    setCard([data]);
    console.log(card);
  };

  return (
    <>
      <div className="">
        <Nav />
        <Box cardData={card} />
      </div>
      <Routes>
        <Route
          path="/edit"
          element={<Form formSubmitData={formSubmitData} />}
        />
        <Route
          path="/contact"
          element={<Contact/>}
        />

      </Routes>
    </>
  );
}

export default App;
