import React ,{ useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";


const App = () => {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
     
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
     
    }
  };

 
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      {/*<Navbar />*/}
      <div className="container my-3">
        <TextForm BoxHeading="Enter text to Anaylise" mode={mode} />
      </div>
   </>
  );
};

export default App;

