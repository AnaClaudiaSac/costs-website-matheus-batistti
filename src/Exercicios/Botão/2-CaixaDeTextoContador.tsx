//2. Caixa de Texto com Contador de Caracteres

//Desenvolva um componente que tenha uma caixa de texto (input). Conforme o usuário digita, a quantidade de caracteres digitados deve ser exibida abaixo do campo.

// Requisitos:

// Exibir uma caixa de texto.
// Abaixo dela, mostrar quantos caracteres o usuário digitou até o momento.

import { useState } from "react";

export default function CaixaDeTextoComContador() {
  const [texto, setTexto] = useState("");

  const handleChange = (e) => {
    setTexto(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={texto}
        onChange={handleChange}
        placeholder="Digite algo..."
      />
      <p>Caracteres digitados: {texto.length}</p>
      <p>Texto: {texto} </p>
    </div>
  );
}

// Output:
// function App() {
//   return (
//     <div>
//       <CaixaDeTextoComContador />
//     </div>
//   );
// }
