import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const [prompot, setPrompot] = useState("");
  const [res, setRes] = useState("");
  const [triger, setTriger] = useState(false);
  async function handleleasen() {
    const res = await fetch(
      "https://naol.app.n8n.cloud/webhook-test/2036bb49-7094-4706-8743-63249381d532"
    );
    console.log(res);
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
      message: `${prompot}`,
      conversation_id: null,
      tone: "BALANCED",
      markdown: false,
      photo_url: null,
    }),
  };
  useEffect(() => {}, [triger, setTriger]);
  async function fectchdata() {
    console.log("fetching musics based on your prompot ");
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      setTriger(true);
      setRes(result.data.message);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="h-full">
      <div className="h-[65%]   pr-20">
        {/* {message == "" ? (
          <span className="h-full flex justify-center items-center text-3xl font-bold">
            😃 Please tell me the symptoms of your sickness 👨
          </span>
        ) : (
          ""
        )} */}
        {res}
      </div>

      <div className="h-[35%]  flex justify-center items-center">
        <textarea
          type="text"
          className="w-[75%] min-h-[50%] rounded-lg bg-slate-800 border-none px-4 py-2 text-white"
          placeholder="how do you feel please tell me the symptom of your sickness"
          value={prompot}
          onChange={(e) => setPrompot(e.target.value)}
        />
        <div className="w-[20%] ml-4">
          <Button variant="contained" onClick={fectchdata}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}
