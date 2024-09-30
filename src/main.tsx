import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
//Exercicio  1 - Componente Basico
import JSXBasico from "./pages/componente-jsx-basico/1-JSXBasico.tsx";
import ComponenteSimples from "./pages/componente-jsx-basico/2-ComponenteSimples.tsx";
import ComponeteComProps from "./pages/componente-jsx-basico/3-0-ComponentesComProps.tsx";
import GroupButton from "./pages/componente-jsx-basico/3-1-GroupButton.tsx";
import Fragment from "./pages/componente-jsx-basico/4-Fragments.tsx";
import ComponenteSimplesEProps from "./pages/componente-jsx-basico/5-ComponentesSimplesEProps.tsx";
// Exercicio 2 - Componente com Props
import Saudacaosimples from "./pages/componente-props/1-SaudacaoSimples.tsx";

const router = createBrowserRouter([
  //Exercicio  1-Componente Basico

  {
    path: "componente-jsx-basico/1",
    element: <JSXBasico />,
  },
  {
    path: "componente-jsx-basico/2",
    element: <ComponenteSimples />,
  },
  {
    path: "componente-jsx-basico/3-0",
    element: <ComponeteComProps label="Teste" />,
  },
  {
    path: "componente-jsx-basico/3-1",
    element: <GroupButton />,
  },
  {
    path: "componente-jsx-basico/4",
    element: <Fragment />,
  },
  {
    path: "componente-jsx-basico/5",
    element: <ComponenteSimplesEProps title="Exercicio 5" content="Props" />,
  },

  // Exercicio 2 - Componente com Props

  {
    path: "componente-props/1",
    element: <Saudacaosimples name="Anna" />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>
);
