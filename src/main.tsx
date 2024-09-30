import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

//Exercicios:  1-Componente Basico
import JSXBasico from "./pages/componente-jsx-basico/1-JSXBasico.tsx";
import ComponenteSimples from "./pages/componente-jsx-basico/2-ComponenteSimples.tsx";
import ComponeteComProps from "./pages/componente-jsx-basico/3-0-ComponentesComProps.tsx";
import GroupButton from "./pages/componente-jsx-basico/3-1-GroupButton.tsx";
import Fragment from "./pages/componente-jsx-basico/4-Fragments.tsx";
import ComponenteSimplesEProps from "./pages/componente-jsx-basico/5-ComponentesSimplesEProps.tsx";

// Exercicios: 2-Componente com Props
import Saudacaosimples from "./pages/componente-props/1-SaudacaoSimples.tsx";
import Imagem from "./pages/componente-props/2-Imagem.tsx";
import FrasesPersonalizadas from "./pages/componente-props/3-FrasePersonalizada.tsx";
import ListaDeEItens from "./pages/componente-props/4-ListaDeItens.tsx";
import CardSimples from "./pages/componente-props/5- CardSimples.tsx";

//Exercicios: 3-Eventos
import Contagem from "./pages/eventos/1-Contagem.tsx";
import CaixaTextoContador from "./pages/eventos/2-CaixaDeTextoContador.tsx";
import InputValidacaoPreenchimento from "./pages/eventos/3-InputComValidacaoDePreenchimento.tsx";
import BotaoAlteraCor from "./pages/eventos/4-BotaoAlterarCor.tsx";
import LimiteDeCaractere from "./pages/eventos/5-LimiteDeCaracteres.tsx";

const router = createBrowserRouter([
  //Exercicios:  1-Componente Basico
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

  // Exercicios:  2-Componente com Props
  {
    path: "componente-props/1",
    element: <Saudacaosimples name="Anna" />,
  },
  {
    path: "componente-props/2",
    element: <Imagem url="http://imagem de..." alt="Imagem de..." />,
  },
  {
    path: "componente-props/3",
    element: (
      <FrasesPersonalizadas
        frase="Estudando React e amando cada vez mais!"
        autor="Anna"
      />
    ),
  },
  {
    path: "componente-props/4",
    element: <ListaDeEItens compra="Fone de ouvido" />,
  },
  {
    path: "componente-props/5",
    element: (
      <CardSimples title="React" text="Evoluindo e aprendendo cada vez mais!" />
    ),
  },

  //Exercicos: 3-Eventos
  {
    path: "eventos/1",
    element: <Contagem />,
  },
  {
    path: "eventos/2",
    element: <CaixaTextoContador />,
  },
  {
    path: "eventos/3",
    element: <InputValidacaoPreenchimento />,
  },
  {
    path: "eventos/4",
    element: <BotaoAlteraCor />,
  },
  {
    path: "eventos/5",
    element: <LimiteDeCaractere />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>
);
