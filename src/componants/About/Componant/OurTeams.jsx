import React from "react";
import "./Style/OurTeams.css";
import { Box, Typography } from "@mui/material";

const OurTeams = (props) => {
  let teamList = props.data.card;

  return (
    <div className="ourTeams-main-container">
      <div className="ourTeams-heading">
        
        <Typography variant="h6">
          &quot;{props.data.Description[0].quote}&quot;
        </Typography>
        <p className="ourTeams-p" >
          {props.data.Description[0].caption}
        </p>
      </div>

      {/* <div className="ourTeams-list">
        {teamList.map((teamsData) => (
          <div key={crypto.randomUUID} className="ourTeam-list--container">
            <p className="ourTeams-items">
              <span className="ourTeam-name">{teamsData.name}</span>
              <span className="ourTeam-position">({teamsData.position})</span>
            </p>
          </div>
        ))}
      </div> */}

      <div className="ourTeams-sub-description">
        <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
          {props.data.Description[0].message}
        </Typography>
      </div>
    </div>
  );
};

export default OurTeams;
