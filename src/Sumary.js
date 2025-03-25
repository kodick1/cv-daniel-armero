import React from 'react';
import Experience from './components/Experience';
import Education from './components/Education';
import Refenrences from './components/References';
import SumaryPersonal from './components/SumaryPersonal';
import WhoAmI from './components/WhoAmI';
import './tailwind.css';

const Sumary = () => {



  return (
    <div className="container mx-auto px-4 py-8 ">  
      <div className="flex flex-col md:flex-row gap-6">
        {/* Profile Section */}
        <div className="w-full md:w-1/2 ">
        
          <WhoAmI />
          <SumaryPersonal/>
          <Refenrences/>
        </div>
        {/* Main Content */}
        <div className="w-full md:w-2/4">
          <Experience />
          <Education/>
        </div>
      </div>
    </div>
  );
};
export default Sumary;