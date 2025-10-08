// src/App.jsx
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Navigate,
} from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import Home from "./pages/Home";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Eula from "./pages/Eula";
import Disclaimer from "./pages/Disclaimer";

/* ─────────────────────────────
   ABM Codeworks Theme (matches Home.jsx)
   ───────────────────────────── */
const theme = extendTheme({
  fonts: { heading: "Poppins, sans-serif", body: "Poppins, sans-serif" },
  colors: {
    abm: {
      navy: "#0F1F39",
      ink: "#142645",
      teal: "#2C7A7B",
      paper: "#F5F5F3",
    },
  },
  styles: {
    global: {
      body: { bg: "abm.paper", color: "abm.ink", overflowX: "hidden" },
    },
  },
});

/* Smoothly scroll to top on route change */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <ScrollToTop />

        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Long, existing paths */}
          <Route
            path="/butterflies-of-zimbabwe/terms-and-conditions"
            element={<Terms />}
          />
          <Route
            path="/butterflies-of-zimbabwe/privacy-policy"
            element={<Privacy />}
          />
          <Route path="/butterflies-of-zimbabwe/eula" element={<Eula />} />
          <Route
            path="/butterflies-of-zimbabwe/disclaimer"
            element={<Disclaimer />}
          />

          {/* Short aliases (nice to share) */}
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/eula" element={<Eula />} />
          <Route path="/disclaimer" element={<Disclaimer />} />

          {/* Legacy/typo guard: redirect old BBDevs paths if needed */}
          <Route path="/bbdevs/*" element={<Navigate to="/" replace />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

/* Simple 404 component */
function NotFound() {
  return (
    <div style={{ padding: "6rem 1rem", textAlign: "center" }}>
      <h1 style={{ marginBottom: "0.5rem" }}>404</h1>
      <p>Page not found.</p>
      <a href="/" style={{ color: "#2C7A7B", textDecoration: "underline" }}>
        Go home
      </a>
    </div>
  );
}

export default App;
