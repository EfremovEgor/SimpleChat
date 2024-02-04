import { ListItemButton } from "@mui/material";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
export function Message({ tweet: { id, username, body, created_at } }) {
  const formatted_time = new Date(created_at).toLocaleString();
  return (
    <ListItem alignItems="flex-start">
      <ListItemButton>
        <ListItemAvatar>
          <Avatar alt={username} />
        </ListItemAvatar>
        <ListItemText
          primary={`[${formatted_time}] ${username}`}
          secondary={
            <>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              ></Typography>
              {body}
            </>
          }
        />
      </ListItemButton>
    </ListItem>
  );
}
