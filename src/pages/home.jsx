import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import Popup from "../componets/Popup";
import axios from "axios";

export default function Home() {
  const [message, setMessage] = useState("");
  const [prompot, setPrompot] = useState("");
  const [prediction, setPrediction] = useState("");
  const [res, setRes] = useState("");
  const [triger, setTriger] = useState(false);
  const [open, setopen] = useState(true);
  const [form, setForm] = useState({
    pregnancies: null,
    glucose: null,
    blood_pressure: null,
    skin_thickness: null,
    insulin: null,
    bmi: null,
    diabetes_pedigree_function: null,
    age: null,
  });
  function handleform(e) {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: Number(value),
    }));
  }

  const url = "https://copilot5.p.rapidapi.com/copilot";

  const options = {
    method: "POST",
    headers: {
      "x-rapidapi-key": "4ca82cfd70msh8633c610962ffc6p1a5a51jsn08efc1ec5f44",
      "x-rapidapi-host": "copilot5.p.rapidapi.com",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: ` Given the following health data:
    Age: ${form.age}
    BMI: ${form.bmi}
    Blood Pressure: ${form.blood_pressure}
    Glucose Level: ${form.glucose}
    Cholesterol Level: ${form.insulin}

    Provide personalized health advice including diet, exercise, and medical recommendations. `,
      conversation_id: null,
      tone: "BALANCED",
      markdown: false,
      photo_url: null,
    }),
  };

  useEffect(() => {}, [triger, setTriger]);

  async function fetchprediction(e) {
    e.preventDefault();
    const numericForm = Object.fromEntries(
      Object.entries(form).map(([key, value]) => [key, Number(value)])
    );
    setopen(true);
    try {
      const response = await axios.post(
        "https://ml-2-0dlr.onrender.com/predict",
        numericForm
      );
      console.log(response);
      setPrediction(response.data.prediction);
      await fectchdata();
    } catch (error) {
      console.error(error);
    }
  }

  async function fectchdata() {
    console.log("fetching answer from the server");
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      setTriger(true);
      setRes(result.data.message);
      console.log(result.data.message);
    } catch (error) {
      console.error(error);
    }
  }

  function handleclose() {
    setopen(!open);
  }

  return (
    <div className="h-full flex px-10  ">
      <div className=" h-full  w-[70%] ">
        {open && <Popup handleclose={handleclose} prediction={prediction} />}
        <form onSubmit={fetchprediction}>
          <div className=" h-full flex flex-col justify-center items-center space-y-2  w-[70%]">
            <div className="w-full flex flex-col space-x-3 justify-center items-center shadow-lg ">
              <label htmlFor="" className="self-start font-bold pl-14">
                Pregnancies
              </label>
              <input
                type="number"
                className="w-96 bg-slate-700 px-2 py-1 border-none rounded-md shadow-xl "
                name="pregnancies"
                value={form.pregnancies}
                onChange={handleform}
                required
              />
            </div>

            <div className="w-full flex flex-col space-x-3  justify-center items-center">
              <label htmlFor="" className="self-start font-bold pl-14">
                glucose
              </label>
              <input
                type="number"
                className="w-96 bg-slate-700 px-2 py-1 border-none rounded-md shadow-xl"
                name="glucose"
                value={form.glucose}
                onChange={handleform}
                required
              />
            </div>
            <div className="w-full flex flex-col space-x-3  justify-center items-center">
              <label htmlFor="" className="self-start font-bold pl-14">
                blood pressure
              </label>
              <input
                type="number"
                className="w-96 bg-slate-700 px-2 py-1 border-none rounded-md shadow-xl"
                name="blood_pressure"
                value={form.blood_pressure}
                onChange={handleform}
                required
              />
            </div>
            <div className="w-full flex flex-col space-x-3  justify-center items-center">
              <label htmlFor="" className="self-start font-bold pl-14">
                skin thickness
              </label>
              <input
                type="number"
                className="w-96 bg-slate-700 px-2 py-1 border-none rounded-md shadow-xl"
                name="skin_thickness"
                value={form.skin_thickness}
                onChange={handleform}
                required
              />
            </div>
            <div className="w-full flex flex-col space-x-3  justify-center items-center">
              <label htmlFor="" className="self-start font-bold pl-14">
                insulin
              </label>
              <input
                type="number"
                className="w-96 bg-slate-700 px-2 py-1 border-none rounded-md shadow-xl"
                name="insulin"
                value={form.insulin}
                onChange={handleform}
                required
              />
            </div>
            <div className="w-full flex flex-col space-x-3  justify-center items-center">
              <label htmlFor="" className="self-start font-bold pl-14">
                bmi
              </label>
              <input
                type="number"
                className="w-96 bg-slate-700 px-2 py-1 border-none rounded-md shadow-xl"
                name="bmi"
                value={form.bmi}
                onChange={handleform}
                required
              />
            </div>
            <div className="w-full flex flex-col space-x-3    justify-center items-center">
              <label htmlFor="" className="self-start font-bold pl-14">
                diabetes pedigree function
              </label>
              <input
                type="number"
                className="w-96 bg-slate-700 px-2 py-1 border-none rounded-md shadow-xl"
                name="diabetes_pedigree_function"
                value={form.diabetes_pedigree_function}
                onChange={handleform}
                required
              />
            </div>
            <div className="w-full flex flex-col space-x-3  justify-center items-center">
              <label htmlFor="" className="self-start font-bold pl-14">
                age
              </label>
              <input
                type="number"
                className="w-96 bg-slate-700 px-2 py-1 border-none rounded-md shadow-xl"
                name="age"
                value={form.age}
                onChange={handleform}
                required
              />
            </div>
            <div>
              <Button
                variant="contained"
                type="submit"
                sx={{
                  width: "18rem",
                  marginTop: 2,
                  backgroundColor: "#00B0FF",
                  borderRadius: "0.4rem",
                }}
              >
                predict{" "}
              </Button>
            </div>
          </div>
        </form>
      </div>

      <div className=" h-full bg-slate-700 rounded-lg   w-[40%]  p-8 overflow-scroll">
        {res == "" &&
          (message == "" ? (
            <span className="h-full flex justify-center items-center text-xl text-center font-bold">
              😃 Please tell me the information of your self i will predict your
              Diabate and give you a recomendation
            </span>
          ) : (
            ""
          ))}
        {res}
      </div>
    </div>
  );
}
