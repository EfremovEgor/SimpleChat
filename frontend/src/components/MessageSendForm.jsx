import { Box, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import api from "../axiosConfig";

export function MessageSendForm() {
  const [message, setMessage] = useState();
  const [error, setError] = useState("");
  function handleMessageInputChange(event) {
    setMessage(event.target.value);
  }
  function sendMessage() {
    if (!message || !message.trim()) {
      setError("Please send a valid message");
      return;
    }
    setError("");
    api.post("/tweets", { body: message.trim(), userid: 4 }).then((resp) => {});
    window.location.reload(false);
  }
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        gap: "10px",
      }}
    >
      <TextField
        id="outlined-basic"
        sx={{ minWidth: "300px" }}
        label="Message"
        error={error != ""}
        multiline
        rows={8}
        onChange={handleMessageInputChange}
        variant="outlined"
      />
      <Button
        onClick={sendMessage}
        variant="contained"
        size="large"
        endIcon={<SendIcon />}
      >
        Send
      </Button>
    </Box>
  );
}
