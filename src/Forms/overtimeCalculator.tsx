import {useState} from "react";

import {
  TextField,
  Paper,
  Box,
  Typography,


} from "@mui/material";
import GaugeChart from 'react-gauge-chart';
import "../App.css";
import { InputState } from "./variables";
import {ProgressBar} from "./progressbar"



const labelStyle = {
  color: "black",fontWeight:"bold",fontSize:"95%"
}

const inputStyle = {background: "white",marginLeft:"0px",width:"100%"}
const inputSameRow = {display:"flex",FlexDirection:"row",justifyContent:"flex-start"}
 export const OvertimeCalculator = ():JSX.Element=>{

  const [inputState,setInputState] = useState<InputState>({
   daysOffWork:0,
   numberOfAbsences:0
  });

  const [output,setOutput] = useState<number>(0);
  return (
    <Paper
      className="myinput"
      style={{
        width: "30%",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        marginLeft: "20px",
        marginTop: "20px",
        background: "#F2F2F7",

      }}
    >
  
    
      
     <Box style={{width:"100%",marginLeft:"0px"}}>
       
       <Box style={{width:"100%",marginLeft:"0px",marginTop:"10px"}}>
        <TextField
        size="small"
        type="number"
        style={{...inputStyle,width:"100%"}}
        inputProps={{min:0}}
      
        label="Number of times off work"
        value={inputState?.numberOfAbsences}
        
        InputLabelProps={{
          shrink: true,
          style: labelStyle,
        }}
      //  value={inputState.date}
        onChange={e => {
          inputState.numberOfAbsences=parseInt(e.target.value)
          setInputState({...inputState})
          setOutput(calculateFactor(inputState.numberOfAbsences,inputState.daysOffWork))
        }}
        //error={ErrorInputState.date !== ""}
       // helperText={ErrorInputState.date}
        FormHelperTextProps={{
         // style: errorStyle,
        }}

      />    
      
      
      </Box>
      <Box style={{width:"100%",marginLeft:"0px",marginTop:"10px"}}>
        <TextField
        size="small"
        type="number"
        style={{...inputStyle,width:"100%"}}
        inputProps={{min:0}}
      
        label="Total number of days off work"
        value={inputState?.daysOffWork}
        
        InputLabelProps={{
          shrink: true,
          style: labelStyle,
        }}
      //  value={inputState.date}
        onChange={e => {
          inputState.daysOffWork=parseInt(e.target.value)
          setInputState({...inputState})
          setOutput(calculateFactor(inputState.numberOfAbsences,inputState.daysOffWork))
        }}
        //error={ErrorInputState.date !== ""}
       // helperText={ErrorInputState.date}
        FormHelperTextProps={{
         // style: errorStyle,
        }}

      />    
      
      
      </Box>
      <Box style={{marginTop:"10px"}}> 
      <Typography style={{fontWeight:"bold"}}>
        Bradford Score: {isNaN(output) ? "":output}
      </Typography>
      <Box style={{marginTop:"10px"}}>
      <ProgressBar  bgcolor={barColor(output==0||isNaN(output)? 0 :Math.min(1, output/500))} completed={output==0?0:Math.min(1, output/500)} />
      </Box>
      </Box>

      </Box>



    </Paper>
  );
};

const calculateFactor = (inst:number, daysOff:number):number=>{
  return inst**2*daysOff
}
const barColor = (completed:number):string => {
  console.log(completed,"hello")
  if(completed===0){
    return "white"
  }
  if (completed<0.1) {
    return "green"
  } else if (completed<0.4) {
    return "yellow"
  } else if (completed<0.8) {
    return "orange"
  } else {
    return "red"
  }
  }
