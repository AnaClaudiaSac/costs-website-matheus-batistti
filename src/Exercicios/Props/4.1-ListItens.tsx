import ListItemCompras from "./4.0-ComponenteItens";

function ListItens() {
  return (
    <div>
      <h1>Compras de Frutas</h1>
      <ul>
        <ListItemCompras compra="Abacaxi" />
        <ListItemCompras compra="Bananas" />
        <ListItemCompras compra="Maças" />
        <ListItemCompras compra="Peras" />
        <ListItemCompras compra="Goiabas" />
        <ListItemCompras compra="Uvas" />
      </ul>
    </div>
  );
}

export default ListItens;
