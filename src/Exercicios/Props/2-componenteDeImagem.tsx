// 2. Componente de Imagem

// Desenvolva um componente que exiba uma imagem e receba a URL e o texto alternativo (alt) como props.

// Requisitos:

//Receber a URL e o texto alternativo via props.
//Renderizar a imagem com o texto alternativo para acessibilidade.

function Imagem(props) {
  return (
    <div>
      <img src={props.url} alt={props.alt} />
    </div>
  );
}

export default Imagem;
