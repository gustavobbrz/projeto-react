// pages/Rooms.jsx
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Button,
  useTheme,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Fab,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { motion } from "framer-motion";

const rooms = [
  {
    name: "🍁 X4 🍁 NIVEL",
    link: "https://www.haxball.com/play?c=UWedRa3LTHY",
  },
  {
    name: "🍁 X4 🍁 NOOBS",
    link: "https://www.haxball.com/play?c=hN5mGNk3IHI",
  },
  {
    name: "🍁 X3 🍁 NIVEL",
    link: "https://www.haxball.com/play?c=yNOP83vq3L4",
  },
  {
    name: "🍁 X3 🍁 NOOBS",
    link: "https://www.haxball.com/play?c=bB-6GubvyQw",
  },
  {
    name: "🍁 X3 🍁 FLASH",
    link: "https://www.haxball.com/play?c=KKuONhemN6s",
  },
  {
    name: "🍁 X1 🍁 DUELOS",
    link: "https://www.haxball.com/play?c=ZreKJMj2l58",
  },
];

const ranking = [
  { name: "🔥 Zoro", points: 128 },
  { name: "⚡ Killua", points: 112 },
  { name: "👑 Gohan", points: 109 },
  { name: "🎯 Levi", points: 103 },
  { name: "🥇 Saitama", points: 97 },
];

const faq = [
  {
    question: "Como entro em uma sala?",
    answer:
      "Basta clicar no botão 'Jogar Agora' da sala desejada. Você será redirecionado automaticamente.",
  },
  {
    question: "Preciso ter conta para jogar?",
    answer:
      "Não. Você pode entrar como convidado, mas recomendamos logar para salvar seu progresso.",
  },
  {
    question: "Onde posso assistir o replay das partidas?",
    answer:
      "Os replays ficam disponíveis em nosso canal oficial de Discord! Acesse e confira sua última partida.",
  },
];

export default function Rooms() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        py: 8,
        background: theme.palette.mode === "dark" ? "#1a1a1a" : "#f9f9f9",
        color: theme.palette.text.primary,
      }}
    >
      <Container maxWidth="xl">
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: 700, mb: 6 }}
        >
          🎮 Salas Online
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {rooms.map((room, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    background:
                      theme.palette.mode === "dark"
                        ? "#222"
                        : "linear-gradient(135deg, #fefefe, #f5f5f5)",
                    border: "2px solid #4caf50",
                    borderRadius: "20px",
                    boxShadow: "0 0 15px rgba(0,0,0,0.1)",
                    transition: "0.3s",
                    "&:hover": {
                      transform: "scale(1.04)",
                      boxShadow: "0 0 20px #4caf50",
                    },
                  }}
                >
                  <CardContent sx={{ textAlign: "center" }}>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      {room.name}
                    </Typography>
                    <Typography variant="body2" color="gray" mb={2}>
                      Status:{" "}
                      <span style={{ color: "#4caf50" }}>🟢 Online</span>
                    </Typography>
                    <Button
                      variant="contained"
                      fullWidth
                      color="success"
                      href={room.link}
                      target="_blank"
                      sx={{
                        textTransform: "none",
                        fontWeight: "bold",
                        borderRadius: "999px",
                      }}
                    >
                      Jogar Agora
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* RANKING */}
        <Box mt={10}>
          <Typography
            variant="h5"
            align="center"
            sx={{ fontWeight: 700, mb: 4 }}
          >
            🏆 Ranking de Jogadores
          </Typography>

          <Grid container spacing={3} justifyContent="center">
            {ranking.map((player, i) => (
              <Grid item xs={12} sm={6} md={3} key={i}>
                <Card
                  sx={{
                    borderRadius: "16px",
                    borderLeft: "6px solid #4caf50",
                    padding: 2,
                    height: "100%",
                    backgroundColor:
                      theme.palette.mode === "dark" ? "#2c2c2c" : "#ffffff",
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    fontWeight="bold"
                    gutterBottom
                  >
                    {player.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Pontos: {player.points}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* AVISO SOBRE REPLAYS */}
        <Box mt={10} textAlign="center">
          <Typography variant="h5" fontWeight={700} gutterBottom>
            🎥 Replays das Partidas
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            maxWidth="700px"
            mx="auto"
          >
            Quer assistir sua última jogada ou mostrar aos amigos aquele golaço?
            Todos os replays ficam disponíveis em nosso canal oficial no
            Discord. Entre agora e reviva seus melhores momentos!
          </Typography>
        </Box>

        {/* FAQ */}
        <Box mt={10}>
          <Typography
            variant="h5"
            align="center"
            sx={{ fontWeight: 700, mb: 4 }}
          >
            ❓ Dúvidas Frequentes (FAQ)
          </Typography>

          {faq.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <Accordion sx={{ mb: 2 }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography sx={{ fontWeight: 600 }}>
                    {item.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{item.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            </motion.div>
          ))}
        </Box>
      </Container>

      {/* Botão flutuante */}
      <Fab
        href="https://discord.gg/YOUR-DISCORD"
        target="_blank"
        color="primary"
        sx={{
          position: "fixed",
          bottom: 24,
          right: 24,
          backgroundColor: "#4caf50",
          color: "#fff",
          fontWeight: "bold",
          "&:hover": {
            backgroundColor: "#66bb6a",
            boxShadow: "0 0 12px #4caf50",
          },
        }}
      >
        <SportsEsportsIcon />
      </Fab>
    </Box>
  );
}
