import { Messages } from "../components/Messages";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import { MessageSendForm } from "../components/MessageSendForm";
export function Index() {
  return (
    <Container>
      <Grid container justifyContent={"center"} spacing={2}>
        <Grid>
          <Messages></Messages>
        </Grid>
        <Grid>
          <MessageSendForm></MessageSendForm>
        </Grid>
      </Grid>
    </Container>
  );
}
