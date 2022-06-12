import { useState, useEffect } from "react";
// @mui
import { Box, Stack, Typography } from "@mui/material";
import Pagination from "@mui/material/Pagination";
// utils
import { fetch } from "../utils";
import ExerciseCard from "./ExerciseCard";
// components
const url = "https://exercisedb.p.rapidapi.com/exercises";
const Exercises = ({ exercises, bodyPart, setExercises }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisePerPage = 9;
  // Pagination
  const indexOfLastExercise = currentPage * exercisePerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisePerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );
  const paginate = (e, val) => {
    setCurrentPage(val);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };
  useEffect(() => {
    const fetchExercisesData = async () => {
      let exerciseData = [];
      if (bodyPart === "all") {
        exerciseData = await fetch.fetchData(url, fetch.exerciseOptions);
      } else {
        exerciseData = await fetch.fetchData(
          `${url}/bodyPart/${bodyPart}`,
          fetch.exerciseOptions
        );
      }
      setExercises(exerciseData);
    };
    fetchExercisesData();
  }, [bodyPart]);

  return (
    <Box
      id='exercises'
      sx={{
        mt: { lg: "110px" },
        mt: "50px",
        p: "20",
      }}
    >
      <Typography variant='h3' mb='46px'>
        Showing Results
      </Typography>
      <Stack
        direction='row'
        justifyContent='center'
        flexWrap='wrap'
        sx={{ gap: { lg: "110px", xs: "50px" } }}
      >
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt='100px' alignItems='center'>
        {exercises.length > 9 && (
          <Pagination
            color='standard'
            count={Math.ceil(exercises.length / exercisePerPage)}
            page={currentPage}
            onChange={paginate}
            shape={"rounded"}
            defaultPage={1}
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
