import { Button } from "@mui/material";
import React from "react";

export default function Popup({ handleclose, prediction }) {
  return (
    <div className="w-full h-screen absolute top-0 right-0 backdrop-blur-2xl  flex justify-center items-center   bg-opacity-5 z-50">
      <div className="bg-gray-800 w-[50%] h-[60%]  flex justify-center items-center  space-y-2 rounded-xl">
        <div className="flex justify-around h-full flex-col">
          <span className="self-center mt-28">
            prediction :
            {prediction == 1 ? "indecats debate" : "inicate no debate"}
          </span>
          <span className="" onClick={handleclose}>
            <Button variant="contained">close</Button>
          </span>
        </div>
      </div>
    </div>
  );
}
