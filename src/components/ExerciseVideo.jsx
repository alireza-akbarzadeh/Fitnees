import React from "react";
// @mui
import { Stack, Typography, Box, Grid } from "@mui/material";
import Loader from "./Loader";

const ExerciseVideo = ({ exerciseVideo, name }) => {
  if (!exerciseVideo.length) return <Loader />;
  return (
    <Box sx={{ mt: { lg: "200px", xs: "20px" }, p: "20px" }}>
      <Typography textTransform='capitalize' variant='h3' mb='33px'>
        Watch{" "}
        <span style={{ color: "#ff2526", textTransform: "capitalize" }}>
          {name}
        </span>
        exercise Videos
      </Typography>
      <Grid container spacing={3}>
        {exerciseVideo.slice(0, 8).map((item, index) => (
          <Grid key={index} mb='65px' item xs={12} sm={6} md={4} lg={3}>
            <a
              target='_blank'
              rel='noreferrer'
              href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            >
              <Box
                component='img'
                sx={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "15px",
                  transform: "scale(1)",
                  transition: "transform 0.4s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                    transition: "transform 0.4s ease-in-out",
                  },
                }}
                src={item.video.thumbnails[0].url}
                alt={item.video.title}
              />
            </a>
            <Stack gap='5px' sx={{ mb: 10, display: "block" }}>
              <Typography variant='h5' fontSize='14px' lineHeight='1.5rem'>
                {item.video.title}
              </Typography>
              <a
                target='_blank'
                rel='noreferrer'
                href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
              >
                <Typography
                  color='#ff2526'
                  fontSize='16px'
                  fontWeight='500'
                  variant='body'
                >
                  {item.video.channelName}
                </Typography>
              </a>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ExerciseVideo;
