import { BrowserRouter } from "react-router-dom";

import { Contact1, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas1, StarsCanvas } from "./components";
// import Contact1 from "./components/Contact1";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        
        {/* <div className='relative z-0'> */}
          {/* <StarsCanvas /> */}
        {/* </div> */}
        {/* <Experience /> */}
        <Tech />
        {/* <Works /> */}
        {/* <Feedbacks /> */}
        <div className='relative z-0'>
          <Contact1 />
          <StarsCanvas1 />
        </div>
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;