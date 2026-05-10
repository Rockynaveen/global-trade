import { StrictMode } from "react";

import { createRoot } from "react-dom/client";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router";

import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import Home from "./pages/home-page";
import Shipping from "./components/shipping";

import "./assets/css/style.css";

const queryClient =
  new QueryClient();

createRoot(
  document.getElementById(
    "root"
  )!
).render(
  <StrictMode>
    <QueryClientProvider
      client={queryClient}
    >
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route path="/shipping" element={<Shipping />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);