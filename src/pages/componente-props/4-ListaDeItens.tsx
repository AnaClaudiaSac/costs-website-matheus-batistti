//4. Componente de Lista de Itens

// Construa um componente que receba uma lista de itens como props e os exiba como itens de uma lista não ordenada.
// Requisitos:
//Receber uma lista de itens como props.
//Renderizar os itens dentro de uma <ul>.

type ItemComprasProps = {
  compra: string;
};

function ItemCompras({ compra }: ItemComprasProps) {
  return (
    <>
      <li>{compra}</li>
    </>
  );
}

export default ItemCompras;
