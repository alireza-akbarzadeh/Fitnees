import React from "react";
// @mui
import { Stack, Typography, Button } from "@mui/material";
// constant
import { Images } from "../constant";

const Details = ({ exerciseDetails }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetails;
  const extraDetails = [
    { icon: Images.BodyPart, name: bodyPart },
    { icon: Images.Target, name: target },
    { icon: Images.Equipment, name: equipment },
  ];
  return (
    <Stack
      gap='60px'
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <img src={gifUrl} alt={name} loading={"lazy"} className='detail-image' />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography sx={{ textTransform: "capitalize" }} variant='h3'>
          {name}
        </Typography>
        <Typography variant='body1'>
          Exercise Keep you strong.{name} bup is one of the exercises to target
          your {target}. it will help you to improve your mood and gain energy.
        </Typography>
        {extraDetails.map((item, index) => (
          <Stack direction={"row"} gap='24px' alignItems={"center"} key={index}>
            <Button
              sx={{
                background: "#fff2db",
                borderRadius: "50%",
                width: "100px",
                height: "100px",
              }}
            >
              <img
                style={{ with: "50px", height: "50px" }}
                src={item.icon}
                alt={item.name}
              />
            </Button>
            <Typography textTransform='capitalize' variant='h5'>
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Details;
