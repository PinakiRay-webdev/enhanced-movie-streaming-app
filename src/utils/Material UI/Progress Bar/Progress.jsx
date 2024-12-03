import React, { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
const Progress = ({ rating }) => {
  const style = {
    color: "#fca311",
  };

  const [value, setValue] = useState(0);

  const getRating = async () => {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 500);
    }).then(() => {
      setValue(rating * 10);
    }).catch((error) =>{
        console.log(error);
    })
  };

  useEffect(() => {
    getRating()
  }, [value]);

  return (
    <div className="w-fit">
      <Stack spacing={8} direction="row">
        <CircularProgress
          style={style}
          size={50}
          thickness={4}
          variant="determinate"
          value={value}
        />
      </Stack>
    </div>
  );
};

export default Progress;
