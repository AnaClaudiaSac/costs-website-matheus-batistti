import "./App.css";
// import Evento from "./components/Evento";
import Card from "./assets/Exercises/5-ComponentesSimplesEProps";

// import WelcomeJSX from "./assets/Exercicios/1-JSXBasico";
//import Profile from "./assets/Exercicios/2-ComponenteSimples";
// import Button from "./assets/Exercicios/3-ComponentesComProps";
// import GroupButton from "./assets/Exercicios/3.2-GroupButton";
// import Header from "./assets/Exercicios/4-Fragments";
function App() {
  return (
    <div className="App">
      <Card title="React" content="Aprendendo" />
      <Card title="React-Native" content="Aprendendo" />
      <Card title="Kotlin" content="Estudando" />
      <Card title="Java" content="Vou estudar mais" />
      <Card title="Android Studio" content="Vou estudar mais" />
      <Card title="Java Script" content="Aprendendo" />
    </div>
  );
}

export default App;
