//4. Componente de Lista de Itens

// Construa um componente que receba uma lista de itens como props e os exiba como itens de uma lista não ordenada.
// Requisitos:
//Receber uma lista de itens como props.
//Renderizar os itens dentro de uma <ul>.
import PropTypes from "prop-types";

function ListItemCompras({ compra }: any) {
  return <li>{compra}</li>;
}

export default ListItemCompras;

ListItemCompras.propTypes = {
  compra: PropTypes.string,
};
