import { ListItemButton } from "@mui/material";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
export function ProfileListItem({ profile: { id, username } }) {
  return (
    <ListItem alignItems="flex-start">
      <ListItemButton href={"profile/" + id}>
        <ListItemAvatar>
          <Avatar alt={username} />
        </ListItemAvatar>
        <ListItemText primary={username} />
      </ListItemButton>
    </ListItem>
  );
}
