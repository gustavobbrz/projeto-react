// pages/Vip.jsx
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
import DiamondIcon from "@mui/icons-material/Diamond";
import StarIcon from "@mui/icons-material/Star";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { motion } from "framer-motion";

const DISCORD_VIP_LINK = "https://discord.gg/YOUR-VIP-CHANNEL";

const vipPlans = [
  {
    name: "PLANO GOLD",
    icon: <StarIcon sx={{ fontSize: 50, color: "#ffeb3b" }} />,
    color: "#ffeb3b",
    benefits: [
      "✅ Prioridade ao entrar nas salas",
      "✅ Selo VIP dourado",
      "✅ Acesso a comandos básicos",
      "✅ Suporte via Discord",
    ],
    price: "R$ 5,00",
  },
  {
    name: "PLANO PLATINA",
    icon: <MilitaryTechIcon sx={{ fontSize: 50, color: "#b0bec5" }} />,
    color: "#b0bec5",
    benefits: [
      "✅ Tudo do GOLD",
      "✅ Vaga reservada nas salas",
      "✅ Comandos especiais avançados",
      "✅ Sorteios mensais exclusivos",
    ],
    price: "R$ 10,00",
  },
  {
    name: "PLANO DIAMANTE",
    icon: <DiamondIcon sx={{ fontSize: 50, color: "#64b5f6" }} />,
    color: "#64b5f6",
    highlighted: true,
    benefits: [
      "✅ Tudo do PLATINA",
      "✅ Acesso antecipado a novidades",
      "✅ Destaque fixado nos rankings",
      "✅ Suporte ultra-prioritário",
    ],
    price: "R$ 15,00",
  },
  {
    name: "BOOSTER (Impulso Discord)",
    icon: <RocketLaunchIcon sx={{ fontSize: 50, color: "#ab47bc" }} />,
    color: "#ab47bc",
    benefits: [
      "✅ Tudo do PLATINA",
      "✅ Ícone personalizado no nome",
      "✅ Acesso ao canal privado VIP+",
      "✅ Agradecimento especial no servidor",
    ],
    price: "Gratuito com Impulso",
  },
];

const faq = [
  {
    question: "O que acontece após 30 dias de VIP?",
    answer:
      "Você precisará renovar o plano. Mas não se preocupe: enviaremos lembrete no Discord antes do vencimento.",
  },
  {
    question: "O BOOSTER tem os mesmos benefícios do VIP pago?",
    answer:
      "Sim! Impulsionar o servidor no Discord garante todos os benefícios do plano PLATINA + extras exclusivos.",
  },
  {
    question: "Posso mudar de plano depois de comprar?",
    answer:
      "Sim! É só nos chamar no Discord para fazer o upgrade pagando a diferença proporcional.",
  },
];

export default function Vip() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        py: 8,
        background: theme.palette.mode === "dark" ? "#1a1a1a" : "#fff",
        color: theme.palette.text.primary,
        position: "relative",
      }}
    >
      <Container maxWidth="xl">
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: 700, mb: 6 }}
        >
          💎 Escolha Seu Plano VIP (30 dias)
        </Typography>

        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="stretch"
        >
          {vipPlans.map((plan, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={plan.name}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    position: "relative",
                    height: "100%",
                    textAlign: "center",
                    overflow: "visible",
                    background:
                      theme.palette.mode === "dark"
                        ? "#222"
                        : "linear-gradient(135deg, #f5f5f5, #ffffff)",
                    border: `2px solid ${plan.color}`,
                    borderRadius: "20px",
                    boxShadow: plan.highlighted
                      ? `0 0 25px ${plan.color}`
                      : "0 0 15px rgba(0,0,0,0.15)",
                    transform: plan.highlighted ? "scale(1.04)" : "scale(1)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.06)",
                    },
                  }}
                >
                  {plan.highlighted && (
                    <Box
                      sx={{
                        position: "absolute",
                        top: -12,
                        left: "50%",
                        transform: "translateX(-50%)",
                        backgroundColor: "#ff9800",
                        color: "#fff",
                        px: 2,
                        py: "2px",
                        borderRadius: "12px",
                        fontWeight: "bold",
                        fontSize: "0.75rem",
                        boxShadow: "0 0 8px #ff9800",
                        zIndex: 10,
                      }}
                    >
                      Mais Popular
                    </Box>
                  )}

                  <CardContent>
                    {plan.icon}
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 700, mt: 1, color: plan.color }}
                    >
                      {plan.name}
                    </Typography>
                    <Typography sx={{ fontSize: "1.2rem", mt: 1, mb: 2 }}>
                      {plan.price}
                    </Typography>

                    <Box
                      component="ul"
                      sx={{
                        listStyle: "none",
                        padding: 0,
                        textAlign: "left",
                        fontSize: "0.95rem",
                        color: theme.palette.text.secondary,
                        mb: 3,
                        minHeight: "150px",
                      }}
                    >
                      {plan.benefits.map((b, i) => (
                        <li key={i}>• {b}</li>
                      ))}
                    </Box>

                    <Button
                      variant="contained"
                      href={DISCORD_VIP_LINK}
                      target="_blank"
                      fullWidth
                      sx={{
                        background: plan.color,
                        color: "#000",
                        fontWeight: 600,
                        borderRadius: "999px",
                        px: 4,
                        "&:hover": {
                          background: plan.color,
                          boxShadow: `0 0 12px ${plan.color}`,
                        },
                      }}
                    >
                      {plan.name === "BOOSTER (Impulso Discord)"
                        ? "Impulsione e Ganhe"
                        : "Adquirir no Discord"}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* FAQ */}
        <Box mt={8}>
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
        href={DISCORD_VIP_LINK}
        target="_blank"
        color="primary"
        sx={{
          position: "fixed",
          bottom: 24,
          right: 24,
          backgroundColor: "#ffc107",
          color: "#000",
          fontWeight: "bold",
          "&:hover": {
            backgroundColor: "#ffca28",
            boxShadow: "0 0 12px #ffc107",
          },
        }}
      >
        <EmojiEventsIcon />
      </Fab>
    </Box>
  );
}
