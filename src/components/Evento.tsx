function Evento({ numero }) {
  function meuEvento() {
    console.log(`Opa, fui ativado! ${numero}`);
  }
  return (
    <div>
      <p>Clique para disparar um evento</p>
      <button onClick={meuEvento}>Ativar!</button>
    </div>
  );
}

export default Evento;

//function App() {
//   return (
//     <div className="App">
//       <h1>Testando Eventos</h1>
//       <Evento numero="1" />
//       <Evento numero="2" />
//       <Form />
//     </div>
//   );
// }
