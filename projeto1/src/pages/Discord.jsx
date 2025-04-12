import { Container, Typography, Button, Box } from "@mui/material";
import discordLogo from "../assets/discord.svg"; // importando o SVG como imagem comum

export default function DiscordPage() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Nossa Comunidade no Discord
      </Typography>

      <Box sx={{ mt: 4 }}>
        <Button
          variant="contained"
          href="https://discord.gg/aqpFuceaC3"
          target="_blank"
          startIcon={
            <img
              src={discordLogo}
              alt="Discord"
              style={{ width: 24, height: 24 }}
            />
          }
        >
          Entrar no Discord
        </Button>
      </Box>
    </Container>
  );
}
