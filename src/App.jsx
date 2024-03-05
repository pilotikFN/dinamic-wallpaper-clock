import { useState } from "react";
import DigitalClock from "./DigitalClock";

function App() {
   const [count, setCount] = useState(0);

   return (
      <div>
         <DigitalClock />
      </div>
   );
}

export default App;
