import React from 'react';
import NavBar from '../components/NavBar';
import FindTutor from '../components/FindTutor';

function Home() {
  return (
    <div className="">
        {/* Header*/}
        <div className="w-full bg-gradient-to-b from-[#a8f5c9] to-white pb-16">
          <NavBar />
          <FindTutor />
          {/* <div className="mx-auto mt-8 w-[90%] max-w-4xl bg-white rounded-[2rem] py-10 px-6 shadow-md">
            <FindTutor />
          </div> */}
        </div>
        

        {/*  */}
        <div className="">
            
        </div>

        {/*  */}
        <div className="">

        </div>

        {/*  */}
        <div className="">

        </div>

        {/* Footer */}
        <div className="">

        </div>

    </div>
  )
}

export default Home;