// import React, { useState, useEffect, use } from "react";

// function Counter() {

//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log("Count changed:", count);
//   }, [count]); // This will run every time 'count' changes.[count] is the dependency array

//   // useEffect(() => {
   
//   // }, []);


//   return (
//     <div>
//       <h2>Count: {count}</h2>

//       <button onClick={() => setCount(count + 1)}>
//         Increase
//       </button>
//     </div>
//   );
// }

// export default Counter;

import React, { useState, useEffect } from "react";

function Counter() {

  const [count, setCount] = useState(0);

  // This will run only once when component loads
  useEffect(() => {
    console.log("Component Loaded");
    console.log("Initial Count:", count);
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      
      <h2>Counter Example</h2>
      
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>
      Increase 
      </button>

    </div>
  );
}

export default Counter;