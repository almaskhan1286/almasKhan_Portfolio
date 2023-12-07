import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
// import CircularCursor from "./components/CircularCursor";

import AnimatedCursor from "react-animated-cursor";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary App">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <AnimatedCursor
        color="#fff"
        innerSize={8}
        outerSize={50}
        innerScale={1}
        outerScale={2}
        outerAlpha={0.1}
        // outerStyle={{
        //   mixBlendMode: 'exclusion',
        // }}
        outerStyle={{mixBlendMode:'exclusive'}}
      

        />
          <Navbar />
          {/* <CircularCursor/> */}
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
