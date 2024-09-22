import "./App.css";
//import Form from "./components/Form";
//import Saudacao from "./Exercicios/JSXBasico/Prpos/1-ComponenteSaudacaoSimples";

// import WelcomeJSX from "./assets/Exercicios/1-JSXBasico";
// import Profile from "./assets/Exercicios/2-ComponenteSimples";
// import Button from "./assets/Exercicios/3-ComponentesComProps";
// import GroupButton from "./assets/Exercicios/3.2-GroupButton";
// import Header from "./assets/Exercicios/4-Fragments";
// import Card from "./assets/Exercicios/5-ComponentesSimplesEProps";

//---------------------------------------------------------------------------

//import Imagem from "./Exercicios/Props/2-componenteDeImagem";
//import FraseAutor from "./Exercicios/Props/3-ConpenteFrasePersonalizada";
import ListItemCompras from "./Exercicios/Props/4.0-ComponenteItens";

function App() {
  // const url =
  //   "https://imga.freepik.com/fotos-gratis/vista-do-ceu-estrelado-com-paisagem-natural_23-2151683174.jpg";
  return (
    <div className="App">
      {/* <Saudacao name="Gabriel!" /> */}
      {/* <FraseAutor frase="A vida é bela" autor="Autor Desconhecido" />
      <FraseAutor
        frase="Eu entendi, ou não? não sei? quero saber e irei!"
        autor="Ana"
      />
      <FraseAutor frase="Estou Doida kkkkkk" autor="Ana" /> */}

      {/* <FraseAutor frase={"A vida é bela"} autor={"Autor Descochecido"} /> */}

      {/* <h1>Testando Eventos</h1>
      // <Evento numero="1" />
      // <Evento numero="2" />
      // <Form /> */}

      <ListItemCompras />
    </div>
  );
}

export default App;
