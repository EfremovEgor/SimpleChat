import List from "@mui/material/List";
import { useState, useEffect } from "react";
import Divider from "@mui/material/Divider";
import * as React from "react";
import api from "../axiosConfig";
import { ProfileListItem } from "./ProfileListItem";
export function ProfileItemsList() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    getProfiles();
  }, []);
  function getProfiles() {
    api.get("/profiles").then((resp) => {
      const profiles = resp.data;
      setProfiles(profiles);
    });
  }
  return (
    <List sx={{ maxWidth: "600px", margin: "auto" }}>
      {profiles.map((profile) => {
        return (
          <React.Fragment key={profile.id}>
            <ProfileListItem profile={profile}></ProfileListItem>
            <Divider component="li" variant="middle" />
          </React.Fragment>
        );
      })}
    </List>
  );
}
