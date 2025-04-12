import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Paper,
  Stack,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import ChatIcon from "@mui/icons-material/Chat";
import SendIcon from "@mui/icons-material/Send";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <Container maxWidth="md" sx={{ mt: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{ color: "#fff", fontWeight: "bold" }}
        >
          📬 Fale Conosco
        </Typography>
        <Typography variant="h6" align="center" sx={{ color: "gray", mb: 4 }}>
          Dúvidas, sugestões ou parcerias? Entre em contato com a gente!
        </Typography>
      </motion.div>

      <Paper
        elevation={6}
        sx={{
          backgroundColor: "#1e1e1e",
          p: 4,
          borderRadius: 4,
          color: "#fff",
        }}
      >
        <Stack spacing={3}>
          <TextField
            fullWidth
            label="Seu nome"
            variant="outlined"
            sx={{
              input: { color: "#fff" },
              label: { color: "gray" },
              fieldset: { borderColor: "#444" },
            }}
          />
          <TextField
            fullWidth
            label="Seu email"
            variant="outlined"
            sx={{
              input: { color: "#fff" },
              label: { color: "gray" },
              fieldset: { borderColor: "#444" },
            }}
          />
          <TextField
            fullWidth
            label="Assunto"
            variant="outlined"
            sx={{
              input: { color: "#fff" },
              label: { color: "gray" },
              fieldset: { borderColor: "#444" },
            }}
          />
          <TextField
            fullWidth
            multiline
            rows={4}
            label="Mensagem"
            variant="outlined"
            sx={{
              textarea: { color: "#fff" },
              label: { color: "gray" },
              fieldset: { borderColor: "#444" },
            }}
          />

          <Button
            variant="contained"
            color="success"
            size="large"
            endIcon={<SendIcon />}
            sx={{ textTransform: "none", fontWeight: "bold" }}
          >
            Enviar Mensagem
          </Button>

          <Box textAlign="center" mt={4}>
            <Typography variant="subtitle1" gutterBottom>
              Ou nos encontre em:
            </Typography>

            <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
              <Button
                variant="outlined"
                startIcon={<ChatIcon />}
                href="https://discord.gg/sua-sala"
                target="_blank"
                sx={{
                  color: "#fff",
                  borderColor: "#4caf50",
                  "&:hover": {
                    backgroundColor: "#4caf50",
                    color: "#000",
                  },
                }}
              >
                Discord
              </Button>

              <Button
                variant="outlined"
                startIcon={<EmailIcon />}
                href="mailto:proleague@gmail.com"
                sx={{
                  color: "#fff",
                  borderColor: "#ff9800",
                  "&:hover": {
                    backgroundColor: "#ff9800",
                    color: "#000",
                  },
                }}
              >
                Email
              </Button>
            </Box>
          </Box>
        </Stack>
      </Paper>
    </Container>
  );
}
