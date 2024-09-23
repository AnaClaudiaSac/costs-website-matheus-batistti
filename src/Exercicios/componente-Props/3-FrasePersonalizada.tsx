//3. Componente de Frase Personalizada

// Crie um componente que receba duas props: uma frase e um autor, e exiba a frase seguida do nome do autor.

// Requisitos:
// Receber a frase e o autor via props.
// Exibir o texto no formato: "A vida é bela" - Autor Desconhecido.

//-----------------------------------------------------------------------------
//1 -  passando props como parametro

function FraseAutor(props) {
  return (
    <div>
      <h1>
        {props.frase} - {props.autor}
      </h1>
    </div>
  );
}

export default FraseAutor;

//
//------------------------------------------------------------------------------

//2 - Descontruindo as props e passando os types exe: string.

// import PropTypes from "prop-types";

// function Item({ frase, autor }: any) {
//   return (
//     <div>
//       {frase} - {autor}
//     </div>
//   );
// }

// export default Item;
// Item.propTypes = {
//   frase: PropTypes.string,
//   autor: PropTypes.string,
// };

//-----------------------------------------------------

// Output:

// function App() {
//   return (
//     <div>
//       <FraseAutor frase="A vida é Bela" autor="Desconhecido" />
//     </div>
//   );
// }
