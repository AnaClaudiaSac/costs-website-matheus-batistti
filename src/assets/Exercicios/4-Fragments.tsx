// 4. Fragments
// Crie um componente Header que utilize React Fragments para agrupar um título e um subtítulo, sem adicionar elementos extras no DOM.
// Renderize esse componente dentro de um componente principal.

function Header() {
  return (
    <>
      <h1>Título</h1>
      <h2>Subtítulo</h2>
    </>
  );
}

export default Header;
