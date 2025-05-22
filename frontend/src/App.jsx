import { Route } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
    
      <Navbar/>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/login" element={<Login/>}/>

    </div>
  )
}

export default App;