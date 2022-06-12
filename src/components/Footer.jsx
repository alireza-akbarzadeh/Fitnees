import React from "react";
// @mui
import {Box, Stack, Typography} from "@mui/material";
// @constant
import {Images} from "../constant"

const Footer = () => {
    return (<Box mt={"80px"} bgcolor={"#fff3f4"}>
        <Stack gap={"40px"} sx={{alignItems: "center", justifyContent: "center"}} px={"40px"} py={"24px"}>
            <img src={Images.Logo} alt="Logo" width={200} height={40}/>
            <Typography>
                Design and Create by Alireza Akbarzadeh
                @2022
            </Typography>
        </Stack>
    </Box>);
};

export default Footer;
