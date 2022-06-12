// @mui
import { Box, Stack, Button, TextField, Typography } from "@mui/material";
import HorizontalScrollbar from "../HorizontalScrollbar";

import useSearch from "./useSearch";
const SearchExercises = ({ bodyPart, setBodyPart, setExercises }) => {
  const { bodyParts, search, setSearch, setBodyParts, handleSearch } =
    useSearch({
      setExercises,
    });

  return (
    <Stack alignItems='center' mt='37px' justifyContent='center' p='20px'>
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: "48px", xs: "30px" },
          mb: "50px",
          textAlign: "center",
        }}
      >
        Awesome Exercises you <br /> Should Know
      </Typography>
      <Box position='relative' mb='72px'>
        <TextField
          height='76px'
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder='Search Exercises'
          type='text'
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "800px", xs: "330px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
        />
        <Button
          className='search-btn'
          onClick={handleSearch}
          sx={{
            bgcolor: "#ff2526",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            height: "56px",
            fontSize: { lg: "20px", xs: "14px" },
            position: "absolute",
            right: 0,
          }}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollbar
          data={bodyParts}
          bodyParts={bodyParts}
          setBodyPart={setBodyPart}
          bodyPart={bodyPart}
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
