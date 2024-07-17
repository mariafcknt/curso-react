import Button from './components/Button/index'

function App({nome}) {
  return (
    <div className="App">
      <h1>Olá Mundo</h1>
      <Button title='Clique aqui'/>
      <Button title='Entrar'/>
      <Button title='Abrir'/>
      <Button title='Salvar'/>
      <br></br>
      {nome}
    </div>
  );
}

export default App;
