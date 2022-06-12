import React from "react";
// @mui
import { Box, Stack, Typography } from "@mui/material";
// components
import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./Loader";

const SimilarExcise = ({ equipment, targetMuscle }) => {
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0" } }}>
      <Typography mb={5}  variant='h3'>
        Exercise that target the same muscle group
      </Typography>
      <Stack direction='row' sx={{ p: "2", position: "relative" }}>
        {targetMuscle.length ? (
          <HorizontalScrollbar data={targetMuscle} />
        ) : (
          <Loader />
        )}
      </Stack>
        <Typography mb={5}  variant='h3'>
            Exercise that target the same equipment
        </Typography>
        <Stack direction='row' sx={{ p: "2", position: "relative" }}>
            {equipment.length ? (
                <HorizontalScrollbar data={equipment} />
            ) : (
                <Loader />
            )}
        </Stack>
    </Box>
  );
};

export default SimilarExcise;
