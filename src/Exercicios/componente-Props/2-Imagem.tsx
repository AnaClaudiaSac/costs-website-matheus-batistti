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

//"https://imga.freepik.com/fotos-gratis/vista-do-ceu-estrelado-com-paisagem-natural_23-2151683174.jpg";
