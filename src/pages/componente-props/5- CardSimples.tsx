// 5. Componente de Card Simples

// Desenvolva um componente de card que receba como props um título e um parágrafo de texto e exiba essas informações.

// Requisitos:

// Receber como props um título e um texto.
// Renderizar um h2 para o título e um p para o texto.

type CardProps = {
  title: string;
  text: string;
};

function Card({ title, text }: CardProps) {
  return (
    <div>
      <h2>{title}</h2>
      <p> {text}</p>
    </div>
  );
}

export default Card;
