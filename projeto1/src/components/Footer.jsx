import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        mt: 6,
        py: 3,
        textAlign: "center",
        borderTop: "1px solid #333",
        color: "#aaa",
        fontSize: "0.9rem",
      }}
    >
      Desenvolvido por <strong style={{ color: "#81c784" }}>Pro-League</strong>{" "}
      ⚽ | Salas desde 2025 🍁 | Versão 1.0
    </Box>
  );
}
