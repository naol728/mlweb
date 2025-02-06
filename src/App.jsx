import { Outlet } from "react-router-dom";
import Appbar from "./componets/Appbar";
import { FiSidebar } from "react-icons/fi";
import { useState } from "react";
function App() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div
        className="pl-60 pt-5 text-xl cursor-pointer w-full bg-[#222] text-white"
        onClick={() => setOpen(!open)}
      >
        {<Appbar />}
        <FiSidebar />
      </div>

      <div className="pl-56 pt-5 h-[94dvh]  bg-[#222] text-white">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
