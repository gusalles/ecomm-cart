import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { useCartStore } from "@/state/useCartStore";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
import App from "./pages";
import Layout from "./layout";

const queryClient = new QueryClient();

useCartStore.subscribe((state) => console.log("Cart ->", state.cart));

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Layout>
          <App />
        </Layout>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
