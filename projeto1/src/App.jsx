import { useMemo, useState } from "react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  IconButton,
} from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Rooms from "./pages/Rooms";
import Vip from "./pages/Vip";
import Rules from "./pages/Rules";

function App() {
  const [mode, setMode] = useState("dark");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          background: {
            default: mode === "dark" ? "#121212" : "#f5f5f5",
          },
        },
      }),
    [mode]
  );

  const toggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <NavBar />

      <IconButton
        onClick={toggleTheme}
        sx={{ position: "fixed", top: 16, right: 16, zIndex: 9999 }}
      >
        {mode === "dark" ? <Brightness7 /> : <Brightness4 />}
      </IconButton>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vip" element={<Vip />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </ThemeProvider>
  );
}

export default App;
