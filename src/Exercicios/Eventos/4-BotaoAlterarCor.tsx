// 4. Botão de Alterar Cor

// Construa um componente com um botão que muda a cor de um texto ao ser clicado. Cada vez que o botão é clicado, a cor do texto deve alternar entre duas cores diferentes.

// Requisitos:

//Exibir um texto e um botão.
//Ao clicar no botão, a cor do texto deve mudar (por exemplo, de preto para azul).

import { useState } from "react";

export default function AlterarCorTexto() {
  const [corTexto, setCorTexto] = useState<string>("");

  const alternarCor = () => {
    if (corTexto === "Black") {
      setCorTexto("Blue");
    } else {
      setCorTexto("Black");
    }
  };

  return (
    <div>
      <p style={{ color: corTexto }}>
        Este texto muda de cor ao clicar no botão!
      </p>

      <button onClick={alternarCor}>Alterar Cor do texto</button>
    </div>
  );
}

// function App() {
//   return (
//     <div>
//       <AlterarCorTexto />
//     </div>
//   );
// }
