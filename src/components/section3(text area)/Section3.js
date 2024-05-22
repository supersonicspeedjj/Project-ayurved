import React, { useContext } from "react";
import { Typography } from "@mui/material";
import Search from "./Search.js";
import Boxcomponent from "./Boxcomponent.js";
import { Button } from "@mui/material";
import SymptomsContext from "../../context/SymptopsContext";

function Section3() {
  const symptomsContext = useContext(SymptomsContext);
  const { predictions, send_symptoms } = symptomsContext;
  console.log(predictions);
  return (
    <div className="w-screen text-center -mt-32">
      <Typography variant="h1" gutterBottom>
        Add Your Symptoms
      </Typography>
      
      <Search />
      <Boxcomponent />
      
      <Button variant="contained" color="success" className="mt-2 w-32 h-10 mb-10" onClick={send_symptoms}>
        Next
      </Button>
      <h1>hello</h1>
      {predictions && predictions.Disease&& (
        <h1>{predictions.Disease[0]}</h1>
      )}
    </div>
  );
}

export default Section3;
