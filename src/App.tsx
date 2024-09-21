import "./App.css";
//import Form from "./components/Form";
//import Saudacao from "./Exercicios/JSXBasico/Prpos/1-ComponenteSaudacaoSimples";
import Imagem from "./Exercicios/Props/2-componenteDeImagem";

// import Card from "./assets/Exercicios/5-ComponentesSimplesEProps";
// import WelcomeJSX from "./assets/Exercicios/1-JSXBasico";
// import Profile from "./assets/Exercicios/2-ComponenteSimples";
// import Button from "./assets/Exercicios/3-ComponentesComProps";
// import GroupButton from "./assets/Exercicios/3.2-GroupButton";
// import Header from "./assets/Exercicios/4-Fragments";

function App() {
  const url =
    "https://imga.freepik.com/fotos-gratis/vista-do-ceu-estrelado-com-paisagem-natural_23-2151683174.jpg";
  return (
    <div className="App">
      {/* <Saudacao name="Gabriel!" /> */}
      <Imagem url={url} alt="Praia" />

      {/* <h1>Testando Eventos</h1>
      // <Evento numero="1" />
      // <Evento numero="2" />
      // <Form /> */}
    </div>
  );
}

export default App;
