// 1. Botão de Contagem

// Crie um componente com um botão que, ao ser clicado, aumenta um número exibido na tela.

// Requisitos:

//Exibir um número inicial, como 0.
// Ao clicar no botão, o número deve aumentar em 1.

// Dica: Use o evento onClick no botão.
import { useState } from "react";
function ButtonCounter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return <button onClick={handleClick}>Clicado número: {count} vezes</button>;
}

export default ButtonCounter;

// function App() {
//   return (
//     <div>
//       <ButtonCounter />;
//     </div>
//   );
// }

// export default App;
