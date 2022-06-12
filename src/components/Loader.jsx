import React from "react";
// @mui
import { Stack } from "@mui/material";
// third party
import { ThreeDots } from "react-loader-spinner";
const Loader = () => {
  return (
    <Stack
      justifyContent='center'
      direction='row'
      alignItems='center'
      width={"100%"}
    >
      <ThreeDots color='gray' />
    </Stack>
  );
};

export default Loader;
