//2. Componentes Simples
// Crie um componente simples chamado Profile que renderize seu nome, uma breve descrição e uma lista de hobbies.
// Cada hobby deve ser renderizado em um item de lista (<li>).

function Profile() {
  const nome = "Ana Cláudia";

  return (
    <div>
      <h1> Meu nome é {nome} </h1>
      <h2>Estou Aprendendo React</h2>
      <p> Eu Adoro :</p>
      <ul>
        <li>Filmes</li>
        <li>Séries</li>
        <li>Jogos</li>
        <li>Natureza</li>
        <li>Animais</li>
        <li>Namorar</li>
      </ul>
    </div>
  );
}

export default Profile;
