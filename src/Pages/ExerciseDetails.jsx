import React, { useEffect, useState } from "react";
// @mui
import { Box } from "@mui/material";
// components
import { Details, ExerciseVideo, SimilarExcise } from "../components";
// Hook
import { useExercises } from "../Hook";

const ExerciseDetails = () => {
  const { exerciseDetails, exerciseVideo, targetMuscle, equipment } =
    useExercises();

  return (
    <Box>
      <Details exerciseDetails={exerciseDetails} />
      <ExerciseVideo
        name={exerciseDetails.name}
        exerciseVideo={exerciseVideo}
      />
      <SimilarExcise equipment={equipment} targetMuscle={targetMuscle} />
    </Box>
  );
};

export default ExerciseDetails;
