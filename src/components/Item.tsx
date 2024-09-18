import PropTypes from "prop-types";
//marca, ano_lancamento,
function Item({ compras }) {
  return (
    <>
      <li>
        {/* {marca} - {ano_lancamento} */}
        {compras}
      </li>
    </>
  );
}

export default Item;
Item.propTypes = {
  marca: PropTypes.string.isRequired,
  ano_lancamento: PropTypes.number,
  compras: PropTypes.string,
};
