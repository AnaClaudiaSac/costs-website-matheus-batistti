//3. Componentes com Props
// Crie um componente Button que receba uma prop chamada label e renderize um botão com o texto fornecido.
// Em outro componente, renderize três instâncias do componente Button, cada uma com um texto diferente para o botão.

function Button(props) {
  return (
    <button style={{ height: "40px", color: "blue", fontSize: "20px" }}>
      {props.label}
    </button>
  );
}
export default Button;
