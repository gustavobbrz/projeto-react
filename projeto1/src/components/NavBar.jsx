// components/NavBar.jsx
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  useTheme,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

export default function NavBar() {
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const menuItems = [
    { to: "/", label: "🏠 Home" },
    { to: "/vip", label: "💎 VIP" },
    { to: "/rules", label: "📜 Regras" },
    { to: "/rooms", label: "🎮 Salas" },
    { to: "/contact", label: "📬 Contato" },
  ];

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{
          background:
            theme.palette.mode === "dark"
              ? "linear-gradient(to right, #1e1e1e, #121212)"
              : "linear-gradient(to right, #2e7d32, #1b5e20)",
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            sx={{
              py: 1,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* Logo + Título */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                cursor: "pointer",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "scale(1.03)",
                },
              }}
            >
              <img
                src="https://media.discordapp.net/attachments/1280499520995725393/1360110989114085466/Intense_dramatic_weather__blurred_bokeh_effect__sharp_subject_focus__soft_background__stormy_skies__high_tension._A_Pro-League_Arenas_e-sports_logo_for_website_use__resembling_a_football_crest-removeb.png?ex=67f9ed91&is=67f89c11&hm=f3f2469a2c4cfe5bb3196767da752932f2113ab434846a1fe64b43dc11cde8da&=&format=webp&quality=lossless"
                alt="Logo Pro-League Arenas"
                style={{
                  height: "50px",
                  width: "50px",
                  borderRadius: "50%",
                  border: "2px solid #ffc107",
                  boxShadow: "0 0 12px #ff9800",
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  letterSpacing: 1,
                  color: "#fff",
                  textShadow: "0 1px 4px rgba(0,0,0,0.6)",
                }}
              >
                PRO-LEAGUE ARENAS
              </Typography>
            </Box>

            {/* Menu Desktop */}
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
              {menuItems.map((item) => (
                <Button
                  key={item.label}
                  component={Link}
                  to={item.to}
                  sx={{
                    color: "#fff",
                    fontWeight: 500,
                    textTransform: "none",
                    fontSize: "1rem",
                    px: 2,
                    borderRadius: "8px",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.08)",
                      boxShadow: "0 0 8px #4caf50",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}

              <Button
                component="a"
                href="https://discord.gg/sua-sala"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  backgroundColor: "#5865F2",
                  color: "#fff",
                  fontWeight: "bold",
                  textTransform: "none",
                  px: 3,
                  borderRadius: "8px",
                  ml: 1,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#4752C4",
                    boxShadow: "0 0 12px #5865F2",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                💬 Discord
              </Button>
            </Box>

            {/* Botão de Menu Mobile */}
            <IconButton
              sx={{ display: { xs: "flex", md: "none" }, color: "#fff" }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Drawer Mobile */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 260,
            background: theme.palette.mode === "dark" ? "#121212" : "#f5f5f5",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                p: 2,
              }}
            >
              <IconButton onClick={toggleDrawer(false)}>
                <CloseIcon
                  sx={{
                    color: theme.palette.mode === "dark" ? "#fff" : "#333",
                  }}
                />
              </IconButton>
            </Box>

            <Divider />

            <List>
              {menuItems.map((item) => (
                <ListItem
                  key={item.label}
                  disablePadding
                  onClick={toggleDrawer(false)}
                >
                  <ListItemButton component={Link} to={item.to}>
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{
                        fontWeight: 600,
                        color: theme.palette.mode === "dark" ? "#fff" : "#000",
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}

              <ListItem>
                <Button
                  fullWidth
                  component="a"
                  href="https://discord.gg/sua-sala"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    mt: 2,
                    backgroundColor: "#5865F2",
                    color: "#fff",
                    fontWeight: "bold",
                    textTransform: "none",
                    px: 3,
                    borderRadius: "8px",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "#4752C4",
                      boxShadow: "0 0 12px #5865F2",
                    },
                  }}
                >
                  💬 Entrar no Discord
                </Button>
              </ListItem>
            </List>
          </Box>

          <Box
            sx={{
              textAlign: "center",
              py: 2,
              fontSize: "0.8rem",
              color: "#888",
            }}
          >
            🍁 Pro-League Arenas • Versão 1.0
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
