import "./App.css";
import Evento from "./components/Evento";
import Form from "./components/Form";

//import Card from "./assets/Exercicios/5-ComponentesSimplesEProps";
// import WelcomeJSX from "./assets/Exercicios/1-JSXBasico";
// import Profile from "./assets/Exercicios/2-ComponenteSimples";
// import Button from "./assets/Exercicios/3-ComponentesComProps";
// import GroupButton from "./assets/Exercicios/3.2-GroupButton";
// import Header from "./assets/Exercicios/4-Fragments";
function App() {
  return (
    <div className="App">
      <h1>Testando Eventos</h1>
      <Evento numero="1" />
      <Evento numero="2" />
      <Form />
    </div>
  );
}

export default App;
