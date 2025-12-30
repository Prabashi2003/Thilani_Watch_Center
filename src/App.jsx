import React from "react";
import Hero from "./component/Hero/Hero";
import Services from "./component/Services/Services"; 

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero/>
      <Services/>
    </div>
  );
};

export default App;