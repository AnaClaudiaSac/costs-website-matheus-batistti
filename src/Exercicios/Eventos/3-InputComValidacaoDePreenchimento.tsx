// 3. Campo de Input com Validação de Preenchimento

// Crie um componente com um campo de input e, quando o usuário sair do campo (evento onBlur), exiba uma mensagem "Campo obrigatório" caso o campo esteja vazio.

// Requisitos:

// Exibir um campo de input.
// Quando o usuário sair do campo e ele estiver vazio, mostrar a mensagem "Campo obrigatório".
import { useState } from "react";

export default function CampoValidaçãoObrigatório() {
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  function handleBlur() {
    if (inputValue === "") {
      setErrorMessage("Campo obrigatório");
    } else {
      setErrorMessage("");
    }
  }

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onBlur={handleBlur}
        placeholder="Digite algo..."
      />
      <p>{errorMessage}</p>
    </div>
  );
}

// function App() {
//   return (
//     <div>
//       <CampoValidaçãoObrigatório />
//     </div>
//   );
// }
