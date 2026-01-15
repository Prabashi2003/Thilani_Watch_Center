import React from "react";
import Hero from "./component/Hero/Hero";
import Services from "./component/Services/Services"; 
import Delivery from "./component/Delivery/Delivery";
import NewRealese from "./component/NewRelease/NewRealese";
import Footer from "./component/Footer/Footer";


const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero/>
      <Services/>
      <NewRealese/>
      <Delivery/>
      <Footer/>
    </div>
  );
};

export default App;