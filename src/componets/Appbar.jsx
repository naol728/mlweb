import {
  backdropClasses,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { IoMdHome } from "react-icons/io";
import { IoAnalytics } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoMdSettings } from "react-icons/io";
import { Link } from "react-router-dom";
export default function Appbar() {
  return (
    <Drawer variant="permanent" anchor="left">
      <List
        sx={{
          width: 200,

          fontSize: "2rem",
          height: "100vh",
          shadow: "2px 2px 4px #000000",
          backgroundColor: "#222",
          color: "#fff",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            textTransform: "uppercase",
            textShadow: "2px 2px 4px #000000",
            fontWeight: "800",
            fontSize: "1.5rem",
            cursor: "pointer",
          }}
        >
          Diabate
        </Typography>
        <ListItem
          button
          sx={{ padding: "1rem 1rem", shadow: "2px 2px 4px #000000" }}
        >
          <IoMdHome />
          <Link to="/">
            <ListItemText
              primary={`Model`}
              sx={{
                marginLeft: "8px",
                fontSize: "2rem",
                fontWeight: "900",
                cursor: "pointer",
              }}
            />
          </Link>
        </ListItem>
        <ListItem button sx={{ padding: "1rem 1rem" }}>
          <IoAnalytics />
          <Link to="/analytics">
            <ListItemText
              primary="Analytics"
              sx={{
                marginLeft: "8px",
                fontSize: "2rem",
                fontWeight: "900",
                cursor: "pointer",
              }}
            />
          </Link>
        </ListItem>
        <ListItem button sx={{ padding: "1rem 1rem" }}>
          <CgProfile />
          <Link to={"/profile"}>
            <ListItemText
              primary="Profile"
              sx={{
                marginLeft: "8px",
                fontSize: "2rem",
                fontWeight: "900",
                cursor: "pointer",
              }}
            />
          </Link>
        </ListItem>
        <ListItem button sx={{ padding: "1rem 1rem" }}>
          {/* <IoMdSettings />
          <Link to="/setting">
            <ListItemText
              primary="Setting"
              sx={{
                marginLeft: "8px",
                fontSize: "2rem",
                fontWeight: "900",
                cursor: "pointer",
              }}
            />
          </Link>*/}
        </ListItem>
      </List>
    </Drawer>
  );
}
