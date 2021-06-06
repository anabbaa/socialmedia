import React , {useState} from "react";
import Social from "./components/Social";
import Data from "./data.json";

function App() {
   const [post , setPost] = useState(Data);

  return (
    <React.Fragment>
<Social post={post}    />

    </React.Fragment>
    
  );
}

export default App;
