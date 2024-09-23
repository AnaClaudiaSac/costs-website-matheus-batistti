//1. JSX Básico === JSX é uma extensão da linguagem JavaScript que é usada pelo React para criar interfaces de usuário. Ele permite que você misture código JavaScript com sintaxe de HTML, o que torna mais fácil escrever componentes de interface de usuário em um único arquivo de código.

// Resumo:
// JSX == É como um HTML, pórem dentro do código Javascript

// Crie um componente que renderize uma mensagem de boas-vindas em JSX.
// Dentro do componente, adicione um parágrafo com uma mensagem de incentivo para quem está aprendendo React.
// Utilize pelo menos um elemento h1 e um p

function WelcomeJSX() {
  return (
    <div>
      <h1>Ana Cláudia!</h1>
      <h1>Boas vindas ao React!!!</h1>
      <h2>Você está começando e vai APRENDER!!!</h2>
      <p>Aprender um passo de cada vez!</p>
      <p>De cima para baixo da esquerda para a direita</p>
      <p>Perguntar quando não entender a pergunta</p>
      <p>
        Ouvir a pessoa que te ensina e fazer o que ela diz, referente ao
        aprendizado
      </p>
      <p> E ter foco no assunto </p>
    </div>
  );
}

export default WelcomeJSX;
