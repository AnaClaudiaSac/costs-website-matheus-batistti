// 3. Campo de Input com Validação de Preenchimento

// Crie um componente com um campo de input e, quando o usuário sair do campo (evento onBlur), exiba uma mensagem "Campo obrigatório" caso o campo esteja vazio.

// Requisitos:

// Exibir um campo de input.
// Quando o usuário sair do campo e ele estiver vazio, mostrar a mensagem "Campo obrigatório".

import { useState } from "react";
export default function CampoValidação() {
  const [campo, setCampo] = useState("");

  const OnBlur;

  return (
    <div>
      <input value={campo} />
    </div>
  );
}
