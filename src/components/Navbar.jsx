import React from "react";
// react router dom
import { Link } from "react-router-dom";
// @mui
import { Stack } from "@mui/material";
import Logo from "../assets/images/Logo.png";
const Navbar = () => {
  return (
    <div>
      <Stack
        direction='row'
        justifyContent={"space-around"}
        sx={{
          gap: { sm: "122px", xs: "40px" },
          mt: { sm: "32px", xs: "20px" },
          justifyContent: "none",
          px: "20px",
        }}
      >
        <Link to='/'>
          <img
            src={Logo}
            alt='Logo'
            style={{ width: 48, height: 48, margin: "0 20px" }}
          />
        </Link>
        <Stack direction='row' gap='40px' alignItems={"flex-end"} fontSize={24}>
          <Link
            style={{
              textDecoration: "none",
              color: "#3a1212",
              borderBottom: "1px solid #ff2625",
            }}
            to='/'
          >
            Home
          </Link>
          <a
            href={"#exercises"}
            style={{ textDecoration: "none", color: "#3a1212" }}
          >
            Exercises
          </a>
        </Stack>
      </Stack>
    </div>
  );
};

export default Navbar;
