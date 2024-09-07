import Item from "./Item";

function List() {
  return (
    // <>
    //   <h1>Minha Lista</h1>
    //   <ul>
    //     <Item marca="Ferrari" ano_lancamento={1966} />
    //     <Item marca="Porche" ano_lancamento={2012} />
    //     <Item marca="Ford" ano_lancamento={1916} />
    //   </ul>
    // </>

    <>
      <h1>Lista de compras</h1>
      <ul>
        <Item compras="Arroz" />
        <Item compras="Feijão" />
        <Item compras="Açucar" />
        <Item compras="Requijão" />
        <Item compras="Vinagre de Maçã" />
        <Item compras="Tapioca" />
        <Item compras="Leite" />
      </ul>
    </>
  );
}

export default List;
