//4. Componente de Lista de Itens

// Construa um componente que receba uma lista de itens como props e os exiba como itens de uma lista não ordenada.
// Requisitos:
//Receber uma lista de itens como props.
//Renderizar os itens dentro de uma <ul>.

import PropTypes from "prop-types";

function ItemCompras({ compra }) {
  return (
    <>
      <li>{compra}</li>
    </>
  );
}

export default ItemCompras;

ItemCompras.propTypes = {
  compra: PropTypes.string,
};

//-------------------------------------------------------------------------

//App

{
  /* <h1>Compras de Frutas:</h1>
<ul>
  <ItemCompra compra="Abacaxi" />
  <ItemCompra compra="Bananas" />
  <ItemCompra compra="Maças" />
  <ItemCompra compra="Peras" />
  <ItemCompra compra="Goiabas" />
  <ItemCompra compra="Uvas" />
</ul>
</div> */
}

//Na tela
// Compras de Frutas:
// Abacaxi
// Bananas
// Maças
// Peras
// Goiabas
// Uvas
