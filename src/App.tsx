import "./App.css";
// import Evento from "./components/Evento";
import Card from "./assets/Exercises/5-ComponentesSimplesEProps";

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
