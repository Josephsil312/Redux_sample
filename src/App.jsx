import Leftbar from "./components/leftbar/Leftbar";
import Navbar from "./components/navbar/Navbar";

import Update from "./components/update/Update";
import "./app.css";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Leftbar />
        <Update />
       
      </div>
    </>
  );
};

export default App;
