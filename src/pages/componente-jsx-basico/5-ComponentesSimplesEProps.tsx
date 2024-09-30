//5. Combinando Componentes Simples e Props
///Crie um componente Card que receba title e content como props. O title deve ser renderizado como um título e o content como um parágrafo.
//Em outro componente, renderize três instâncias do Card com diferentes valores para title e content.

type CardProps = {
  title: string;
  content: string;
};

function Card({ title, content }: CardProps) {
  return (
    <div>
      <h1>{title}</h1>
      <p> {content}</p>
    </div>
  );
}

export default Card;

//--------------------------------------------------------------------------------------

//function App() {
//   return (
//     <div className="App">
//       <Card title="React" content="Aprendendo" />
//       <Card title="React-Native" content="Aprendendo" />
//       <Card title="Kotlin" content="Estudando" />
//       <Card title="Java" content="Vou estudar mais" />
//       <Card title="Android Studio" content="Vou estudar mais" />
//       <Card title="Java Script" content="Aprendendo" />
//     </div>
//   );
// }
