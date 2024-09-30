// 5. Campo de Texto com Limite de Caracteres

// Crie um componente com um campo de texto que tenha um limite de 20 caracteres. Se o usuário tentar digitar mais do que 20 caracteres, exiba uma mensagem avisando que o limite foi atingido.

// Requisitos:

// Exibir uma caixa de texto.
// Se o usuário digitar mais de 20 caracteres, exibir a mensagem "Limite de caracteres atingido".

// Dica: Use o evento onChange para monitorar o valor do campo e o comprimentodotexto.

import { useState } from "react";

export default function LimiteDeCaractere() {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  function handleChange(e) {
    const inputText = e.target.value;

    if (inputText.length > 20) {
      setError("Limite de caracteres atingido");
    } else {
      setError("");
    }

    setText(inputText);
  }

  return (
    <div>
      <textarea
        value={text}
        onChange={handleChange}
        rows={4}
        cols={40}
        placeholder="Digite aqui: (máximo 20 caracteres)"
      />
      <div style={{ color: "red" }}>{error}</div>
      <p>{20 - text.length} caracteres restantes</p>
    </div>
  );
}
