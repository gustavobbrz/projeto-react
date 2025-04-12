// pages/Rules.jsx
import {
  Box,
  Container,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Divider,
  Button,
} from "@mui/material";
import GavelIcon from "@mui/icons-material/Gavel";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import { motion } from "framer-motion";

const DISCORD_SUPPORT_LINK = "https://discord.gg/YOUR-SUPPORT-LINK";
const DISCORD_STAFF_FORM = "https://discord.gg/YOUR-STAFF-FORM";

const rules = [
  "Respeite todos os jogadores",
  "Proibido flood/spam no chat",
  "Não use hacks ou bugs",
  "Siga as instruções dos admins",
  "Nomes ofensivos serão banidos",
  "Não saia e entre para evitar punições",
  "No modo X1, espere sua vez",
  "Reporte problemas para a staff",
];

export default function Rules() {
  return (
    <Box sx={{ py: 8, minHeight: "100vh" }}>
      <Container maxWidth="md">
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: 700, mb: 4 }}
        >
          📜 Regras do Servidor
        </Typography>

        <Paper elevation={4} sx={{ p: 4, borderRadius: 4 }}>
          <List>
            {rules.map((rule, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ListItem>
                  <ListItemIcon>
                    <GavelIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primaryTypographyProps={{ fontSize: "1rem" }}
                    primary={`${index + 1}. ${rule}`}
                  />
                </ListItem>
              </motion.div>
            ))}
          </List>

          <Divider sx={{ my: 3 }} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Typography variant="body1" sx={{ mb: 2 }}>
              Se você foi vítima de alguma quebra de regra, fale diretamente com
              a staff pelo nosso Discord:
            </Typography>

            <Button
              variant="contained"
              startIcon={<SupportAgentIcon />}
              href={DISCORD_SUPPORT_LINK}
              target="_blank"
              sx={{
                backgroundColor: "#ff9800",
                color: "#fff",
                fontWeight: 600,
                borderRadius: "999px",
                "&:hover": {
                  backgroundColor: "#fb8c00",
                },
              }}
            >
              Falar com a Staff no Discord
            </Button>
          </motion.div>
        </Paper>

        {/* Torne-se um Staff */}
        <Box mt={8}>
          <Typography
            variant="h5"
            align="center"
            gutterBottom
            sx={{ fontWeight: 700 }}
          >
            🤝 Torne-se um Staff
          </Typography>

          <Paper elevation={3} sx={{ p: 4, borderRadius: 4 }}>
            <Typography sx={{ mb: 2 }}>
              Quer fazer parte da equipe e ajudar a manter nosso servidor top?
              Veja os requisitos:
            </Typography>
            <List>
              <ListItem>• Ter experiência em jogo</ListItem>
              <ListItem>• Saber reportar, banir e responder tickets</ListItem>
              <ListItem>• Estar ativo no servidor com frequência</ListItem>
            </List>

            <Button
              variant="contained"
              startIcon={<VolunteerActivismIcon />}
              href={DISCORD_STAFF_FORM}
              target="_blank"
              sx={{
                mt: 2,
                backgroundColor: "#4caf50",
                color: "#fff",
                fontWeight: 600,
                borderRadius: "999px",
                "&:hover": {
                  backgroundColor: "#43a047",
                },
              }}
            >
              Candidatar-se no Discord
            </Button>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
}
