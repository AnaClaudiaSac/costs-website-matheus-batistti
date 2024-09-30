//3. Componente de Frase Personalizada

// Crie um componente que receba duas props: uma frase e um autor, e exiba a frase seguida do nome do autor.

// Requisitos:
// Receber a frase e o autor via props.
// Exibir o texto no formato: "A vida é bela" - Autor Desconhecido.

//-----------------------------------------------------------------------------
//1 -  passando props como parametro

type FraseAutorProps = {
  frase: string;
  autor: string;
};

function FraseAutor(props: FraseAutorProps) {
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
