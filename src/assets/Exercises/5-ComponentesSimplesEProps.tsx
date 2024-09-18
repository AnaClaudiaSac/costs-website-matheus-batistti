//5. Combinando Componentes Simples e Props
///Crie um componente Card que receba title e content como props. O title deve ser renderizado como um título e o content como um parágrafo.
//Em outro componente, renderize três instâncias do Card com diferentes valores para title e content.

function Card({ title, content }: any) {
  return (
    <div>
      <h1>{title}</h1>
      <p> {content}</p>
    </div>
  );
}

export default Card;
