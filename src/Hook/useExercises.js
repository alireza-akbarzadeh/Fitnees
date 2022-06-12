import { useState, useEffect } from "react";
// react router dom
import { useParams } from "react-router-dom";
/// utils
import { fetch } from "../utils";
// constant
import { Api } from "../constant";
const useExercises = () => {
  const [exerciseDetails, setExerciseDetails] = useState({});
  const [exerciseVideo, setExerciseVideo] = useState([]);
  const [targetMuscle, setTargetMuscle] = useState([]);
  const [equipment, setEquipment] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDetailsData = await fetch.fetchData(
        `${Api.EXERCISE_URL}/exercise/${id}`,
        fetch.exerciseOptions
      );
      setExerciseDetails(exerciseDetailsData);

      const exerciseVideoData = await fetch.fetchData(
        `${Api.YOUTUBE_URL}/search?query=${exerciseDetailsData.name}`,
        Api.YOUTUBE_OPTION
      );
      setExerciseVideo(exerciseVideoData.contents);
      const targetMuscleExerciseData = await fetch.fetchData(
        `${Api.YOUTUBE_URL}/exercises/target/${exerciseDetailsData.target}`,
        Api.EXERCISE_OPTION
      );
      setTargetMuscle(targetMuscleExerciseData);
      const equipmentMuscleExerciseData = await fetch.fetchData(
        `${Api.YOUTUBE_URL}/exercises/equipment/${exerciseDetailsData.equipment}`,
        Api.EXERCISE_OPTION
      );
      setEquipment(equipmentMuscleExerciseData);
    };
    fetchExercisesData();
  }, [id]);

  return {
    exerciseDetails,
    exerciseVideo,
    targetMuscle,
    equipment,
    id,
  };
};

export default useExercises;
