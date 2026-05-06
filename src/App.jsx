import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Navigate,
  Link as RouterLink,
} from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { HelmetProvider, Helmet } from "react-helmet-async";

import Home from "./pages/Home";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Eula from "./pages/Eula";
import Disclaimer from "./pages/Disclaimer";

const SITE_URL = "https://www.abmcodeworks.com";

const theme = extendTheme({
  fonts: {
    heading: "Poppins, Inter, system-ui, sans-serif",
    body: "Poppins, Inter, system-ui, sans-serif",
  },
  colors: {
    abm: {
      navy: "#0B172A",
      navy2: "#10233F",
      ink: "#16243E",
      teal: "#2C7A7B",
      tealDark: "#1F5F60",
      gold: "#C89B3C",
      paper: "#F7F6F1",
      soft: "#EEF3F0",
      line: "#D8DDD5",
    },
  },
  styles: {
    global: {
      html: {
        scrollBehavior: "smooth",
      },
      body: {
        bg: "abm.paper",
        color: "abm.ink",
        overflowX: "hidden",
      },
      "::selection": {
        bg: "abm.teal",
        color: "white",
      },
    },
  },
});

const routeSeo = {
  "/": {
    title: "ABM Codeworks | Web, Mobile & Software Development in Zimbabwe",
    description:
      "ABM Codeworks designs and builds reliable web apps, mobile apps, custom dashboards, school systems, e-commerce platforms and cloud software for organisations in Zimbabwe and beyond.",
    canonical: `${SITE_URL}/`,
    noindex: false,
  },
  "/terms": {
    title: "Terms and Conditions | ABM Codeworks",
    description: "ABM Codeworks terms and conditions.",
    canonical: `${SITE_URL}/terms`,
    noindex: true,
  },
  "/privacy": {
    title: "Privacy Policy | ABM Codeworks",
    description: "ABM Codeworks privacy policy.",
    canonical: `${SITE_URL}/privacy`,
    noindex: true,
  },
  "/eula": {
    title: "End User Licence Agreement | ABM Codeworks",
    description: "ABM Codeworks End User Licence Agreement.",
    canonical: `${SITE_URL}/eula`,
    noindex: true,
  },
  "/disclaimer": {
    title: "Disclaimer | ABM Codeworks",
    description: "ABM Codeworks disclaimer.",
    canonical: `${SITE_URL}/disclaimer`,
    noindex: true,
  },
};

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

function Seo({ title, description, canonical, noindex = false }) {
  const image = `${SITE_URL}/assets/abm-og-image.png`;

  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />

      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}

      <link rel="canonical" href={canonical} />

      <meta property="og:site_name" content="ABM Codeworks" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_ZW" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}

function SeoRoute({ children, seo }) {
  return (
    <>
      <Seo {...seo} />
      {children}
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <ChakraProvider theme={theme}>
        <Router>
          <ScrollToTop />

          <Routes>
            <Route
              path="/"
              element={
                <SeoRoute seo={routeSeo["/"]}>
                  <Home />
                </SeoRoute>
              }
            />

            <Route
              path="/terms"
              element={
                <SeoRoute seo={routeSeo["/terms"]}>
                  <Terms />
                </SeoRoute>
              }
            />

            <Route
              path="/privacy"
              element={
                <SeoRoute seo={routeSeo["/privacy"]}>
                  <Privacy />
                </SeoRoute>
              }
            />

            <Route
              path="/eula"
              element={
                <SeoRoute seo={routeSeo["/eula"]}>
                  <Eula />
                </SeoRoute>
              }
            />

            <Route
              path="/disclaimer"
              element={
                <SeoRoute seo={routeSeo["/disclaimer"]}>
                  <Disclaimer />
                </SeoRoute>
              }
            />

            {/* Old long legal paths redirect to the short private pages */}
            <Route
              path="/butterflies-of-zimbabwe/terms-and-conditions"
              element={<Navigate to="/terms" replace />}
            />

            <Route
              path="/butterflies-of-zimbabwe/privacy-policy"
              element={<Navigate to="/privacy" replace />}
            />

            <Route
              path="/butterflies-of-zimbabwe/eula"
              element={<Navigate to="/eula" replace />}
            />

            <Route
              path="/butterflies-of-zimbabwe/disclaimer"
              element={<Navigate to="/disclaimer" replace />}
            />

            <Route path="/bbdevs/*" element={<Navigate to="/" replace />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </ChakraProvider>
    </HelmetProvider>
  );
}

function NotFound() {
  return (
    <>
      <Seo
        title="Page Not Found | ABM Codeworks"
        description="The page you are looking for could not be found."
        canonical={`${SITE_URL}/404`}
        noindex
      />

      <div
        style={{
          minHeight: "70vh",
          padding: "7rem 1rem",
          textAlign: "center",
          background: "#F7F6F1",
          color: "#16243E",
        }}
      >
        <p
          style={{
            marginBottom: "0.75rem",
            color: "#2C7A7B",
            fontWeight: 700,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
          }}
        >
          404
        </p>

        <h1 style={{ marginBottom: "0.75rem", fontSize: "2.5rem" }}>
          Page not found
        </h1>

        <p style={{ marginBottom: "1.5rem", color: "#4A5568" }}>
          The page may have moved, or the address may be incorrect.
        </p>

        <RouterLink
          to="/"
          style={{
            display: "inline-block",
            background: "#2C7A7B",
            color: "white",
            padding: "0.85rem 1.25rem",
            borderRadius: "999px",
            fontWeight: 700,
          }}
        >
          Go home
        </RouterLink>
      </div>
    </>
  );
}

export default App;
