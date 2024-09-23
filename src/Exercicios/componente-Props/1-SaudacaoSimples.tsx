//1. Componente de Saudação Simples

//Crie um componente que receba o nome de uma pessoa como prop e exiba uma saudação, como "Bem-vindo, [Nome]!".
//Requisitos:
//Receber via props o nome da pessoa.
//Exibir uma saudação simples, como: Bem-vindo, Gabriel!.

function Saudacao(props) {
  return (
    <div>
      <h1>Bem vindo,{props.name}</h1>
    </div>
  );
}

export default Saudacao;

//------------------------------------------------------------------------

//Output:

//function App() {
//return (
//<div className="App">
// <Saudacao name="Gabriel" />
//</div>
// );
// }
