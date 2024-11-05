"use client"

import usecounterStore from "@/app/stores/usecounterStore";

const DisplayCounter = () => {

    const counter = usecounterStore(( state: any) => state.count);

    return(
        <div>
           Counter : {counter}
        </div>
    )

};

const CounterControl = () => {

    const incrCounter = usecounterStore((state) => state.incrCounter);
  
    return (
      <div>
        <button onClick={incrCounter}>Increase Number</button>
      </div>
    );
  };


const page = () => {
  return (
    <div>   

       <h1>Zustand Counter Example</h1>

        <DisplayCounter />

        <CounterControl />

    </div>
  )
}

export default page
