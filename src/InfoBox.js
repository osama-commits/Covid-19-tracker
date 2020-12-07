import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./InfoBox.css";

function InfoBox({ title, cases, total, active, isRed, isBlack, ...props }) {
  console.log(title, active);
  return (
    <Card
      onClick={props.onClick}
      className={`infoBox ${active && "infoBox--selected"} ${
        isRed && "infoBox--red"
      } ${
        isBlack && "infoBox--black"
      }`}
      
    >
      
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <h2 className={`infoBox__cases  ${!isRed && "infoBox__cases--green"} ${!isBlack && "infoBox__cases--black"}`}>
        Total {total} 
        </h2>

        
      </CardContent>
    </Card>
  );
}

export default InfoBox;
