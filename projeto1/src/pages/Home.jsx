import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { motion } from "framer-motion";

const salas = [
  {
    nome: "🍁 Pro-League Arenas | X4 🍁 NIVEL",
    link: "https://www.haxball.com/play?c=UWedRa3LTHY",
  },
  {
    nome: "🍁 Pro-League Arenas | X4 🍁 NOOBS",
    link: "https://www.haxball.com/play?c=hN5mGNk3IHI",
  },
  {
    nome: "🍁 Pro-League Arenas | X3 🍁 NIVEL",
    link: "https://www.haxball.com/play?c=yNOP83vq3L4",
  },
  {
    nome: "🍁 Pro-League Arenas | X3 🍁 NOOBS",
    link: "https://www.haxball.com/play?c=bB-6GubvyQw",
  },
  {
    nome: "🍁 Pro-League Arenas | X3 🍁 FLASH",
    link: "https://www.haxball.com/play?c=KKuONhemN6s",
  },
  {
    nome: "🍁 Pro-League Arenas | X1 🍁 DUELOS",
    link: "https://www.haxball.com/play?c=ZreKJMj2l58",
  },
];

export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ mt: 8 }}>
      {/* Header */}
      <Box textAlign="center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h2" gutterBottom>
            🍁 Pro-League Arenas 🍁
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Todas as salas com sistemas únicos e suporte dedicado para os
            players
          </Typography>
        </motion.div>
      </Box>

      {/* Benefícios */}
      <Box mt={8} textAlign="center">
        <Typography variant="h4" gutterBottom>
          🌟 Benefícios Exclusivos
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={4} sx={{ p: 4, borderRadius: 4, height: "100%" }}>
              <Typography variant="h5" gutterBottom>
                🤝 Suporte & Staff
              </Typography>
              <Typography variant="body1">
                • Staff competente via tickets no Discord
                <br />
                • Respostas rápidas
                <br />• Feedback constante da comunidade
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={4} sx={{ p: 4, borderRadius: 4, height: "100%" }}>
              <Typography variant="h5" gutterBottom>
                🖥️ Hospedagem Premium
              </Typography>
              <Typography variant="body1">
                • Servidores AWS (ping baixo)
                <br />
                • Alta performance e estabilidade
                <br />• Atualizações constantes
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={4} sx={{ p: 4, borderRadius: 4, height: "100%" }}>
              <Typography variant="h5" gutterBottom>
                💎 Compra de VIP
              </Typography>
              <Typography variant="body1">
                • Furar fila nas salas
                <br />
                • Scripts automatizados, replays e logs
                <br />• Sistema admin com chat e integração Discord
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* Experiência de Jogo */}
      <Box mt={10} textAlign="center">
        <Typography variant="h4" gutterBottom>
          🎮 Experiência de Jogo
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ maxWidth: "800px", mx: "auto" }}
        >
          Com uma arquitetura inovadora, nosso servidor se destaca por seus
          sistemas exclusivos e uma ampla variedade de salas com diferentes
          modalidades de jogo. Comprometemo-nos com atualizações, sempre
          buscando aprimorar a experiência de jogo ao máximo.
        </Typography>
      </Box>

      {/* Hospedagem */}
      <Box mt={8} textAlign="center">
        <Typography variant="h4" gutterBottom>
          🛡️ Hospedagem de Qualidade
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ maxWidth: "800px", mx: "auto" }}
        >
          Nossos servidores são alojados em infraestruturas protegidas e
          mantidas com as mais recentes atualizações tecnológicas, garantindo
          desempenho excepcional de CPU, memória e internet. Isso assegura uma
          jogabilidade fluída e de alta qualidade para todos os jogadores.
        </Typography>
      </Box>

      {/* Salas Online */}
      <Box mt={10}>
        <Typography variant="h4" gutterBottom textAlign="center">
          🟢 Salas Online
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {salas.map((sala, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  elevation={6}
                  sx={{
                    borderRadius: 4,
                    background: "#121212",
                    color: "#fff",
                    border: "1px solid #333",
                    transition: "0.3s",
                    "&:hover": {
                      boxShadow: "0 0 20px #4caf50",
                      transform: "scale(1.03)",
                    },
                  }}
                >
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      {sala.nome}
                    </Typography>
                    <Typography variant="body2" color="gray">
                      Status:{" "}
                      <span style={{ color: "#4caf50" }}>🟢 Online</span>
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ px: 2, pb: 2 }}>
                    <Button
                      variant="contained"
                      fullWidth
                      color="success"
                      startIcon={<PlayArrowIcon />}
                      href={sala.link}
                      target="_blank"
                      sx={{ textTransform: "none" }}
                    >
                      🎮 Jogar Agora
                    </Button>
                  </CardActions>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
