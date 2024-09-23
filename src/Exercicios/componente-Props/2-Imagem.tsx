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

//-------------------------------------------------------------------------------------

//Output:

// const url = //"https://img.freepik.com/fotos-gratis/paisagem-de-praia-do-havai-com-natureza-e-litoral_23-2151795032.jpg?size=626&ext=jpg&ga=GA1.1.777392151.1726770096&semt=ais_hybrid";

// function App() {
//   return (
//     <div>
//       <Imagem url={url} alt={"Imagem de uma praia"} />
//     </div>
//   );
// }
