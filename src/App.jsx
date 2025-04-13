import { useState } from "react";
import { v4 as uuid } from "uuid";
import {
  Container,
  Button,
  Header,
  Input,
  ListaItens,
  ListaDeTarefa,
  Lixeira,
  Foguete,
  Emoj
} from "./styles";

function App() {
  const [lista, setLista] = useState([]);
  const [inputTarefa, setInputTarefa] = useState("");

  function inputText(event) {
    setInputTarefa(event.target.value);
  }

  function adicionarTarefa() {
    if (inputTarefa.trim() === "") return;
    setLista([
      ...lista,
      { id: uuid(), tarefa: inputTarefa, finalizada: false }
    ]);

    setInputTarefa("");
  }

  function removerTarefa(id) {
    const novaLista = lista.filter((item) => item.id !== id);
    setLista(novaLista);
  }

  function finalizarTarefa(id) {

    const tarefaFinalizada = lista.map(item => (

      item.id === id ? { ...item, finalizada: !item.finalizada } : item
    ))
    setLista(tarefaFinalizada)
  }

  return (
    <Container>
      <Header>Lista de Tarefas</Header>
      <Input
        onChange={inputText}
        type="text"
        placeholder="digite sua tarefa..."
      />
      <Button onClick={adicionarTarefa}>Adicionar</Button>

      <ListaDeTarefa>
        <ul>
          {lista.length > 0 ? (
            lista.map((item) => (
              <ListaItens estaFinalizada={item.finalizada} key={item.id}>

                <Foguete onClick={() => finalizarTarefa(item.id)} />

                <li>{item.tarefa}</li>

                <Lixeira onClick={() => removerTarefa(item.id)} />
              </ListaItens>
            ))
          ) : (
            <h3 >Não há itens na lista   <Emoj /></h3>
          )}


        </ul>
      </ListaDeTarefa>
    </Container>
  );
}

export default App;
