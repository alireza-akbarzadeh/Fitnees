import { useState, useEffect } from "react";
// utils
import { fetch } from "../../utils";
const url = "https://exercisedb.p.rapidapi.com/exercises";

const useSearch = ({ setExercises }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartData = await fetch.fetchData(
        `${url}/bodyPartList`,
        fetch.exerciseOptions
      );
      setBodyParts(["all", ...bodyPartData]);
    };
    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exerciseData = await fetch.fetchData(url, fetch.exerciseOptions);
      const searchExercises = exerciseData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search.toLowerCase()) ||
          exercise.target.toLowerCase().includes(search.toLowerCase()) ||
          exercise.equipment.toLowerCase().includes(search.toLowerCase()) ||
          exercise.bodyPart.toLowerCase().includes(search.toLowerCase())
      );
      setSearch("");
      setExercises(searchExercises);
    }
  };
  return {
    search,
    setSearch,
    bodyParts,
    setBodyParts,
    handleSearch,
    url,
  };
};

export default useSearch;
