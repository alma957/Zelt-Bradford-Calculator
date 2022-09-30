import {useState} from "react";

import {
  TextField,
  Paper,
  Box,


} from "@mui/material";

import "../App.css";



 export const ProgressBar = (props:any):JSX.Element=>{
    const bgcolor:string = props.bgcolor as string;
    const completed:number = props.completed as number
    
    const containerStyles = {
        height: 20,
        width: '100%',
        backgroundColor: "#ffffff",
        borderRadius: 50,
        margintTop:"20px"
        
      }
    
      const fillerStyles = {
        height: '100%',
        width: `${completed*100}%`,
        backgroundColor: bgcolor,
        borderRadius: 'inherit',
  
      }
    
      const labelStyles = {
        padding: 5,
        color: 'white',
        fontWeight: 'bold'
      }

  return (
    <Box style={containerStyles}>
      <Box style={fillerStyles}>
        {/* <span style={labelStyles}>{`${completed}%`}</span> */}
      </Box>
    </Box>
  );
};