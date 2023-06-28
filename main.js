//Uma constante que recebe uam função anonima

const criarTarefa = (e) => {
    e.preventDefault(e);

    //previne comportamento padrão, ou seja, previne de que a pagina atualize quando o botão for apertado

    const lista = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const valorInput = input.value;
    
    const tarefa = document.createElement('li');
    tarefa.classList.add('task');
    //adicionando uma classe ao elemento lista

    const conteudo = `<p class="content">${valorInput}</p>`

    tarefa.innerHTML = conteudo;

    tarefa.appendChild(botaoFeito());
    tarefa.appendChild(BotaoDeleta());
    lista.appendChild(tarefa);
    //anexando o elemento filho dentro do elemento pai
}


// selecionanto o botão através do data-attributes;
const novaTarefa = document.querySelector('[data-form-button]');

novaTarefa.addEventListener('click', criarTarefa);

const botaoFeito = () => {
    const botaoConclui = document.createElement('button');
    botaoConclui.classList.add('check-burron');
    botaoConclui.innerText = 'Feito';
    //Conteúdo que vai ser mostrado quando gerar o botão

    botaoConclui.addEventListener('click', concluirTarefa)

    return botaoConclui;
}

const concluirTarefa = (e) => {
    const botaoConcluir = e.target;
    //saber o alvo que selecionei, cliquei

    const tarefaFeita = botaoConcluir.parentElement;
    //pegando o pai do elemento, no caso a li

    tarefaFeita.classList.toggle('done');
    //toggle devolve verdadeiro ou falso, o efeito de risco é o 'done' que dá;
}


const BotaoDeleta = () =>{
    const botaoDeleta = document.createElement('button');
    botaoDeleta.classList.add('delete-button');
    botaoDeleta.innerText = 'Deleta';

    botaoDeleta.addEventListener('click', deletarTarefa);

    return botaoDeleta;
}

const deletarTarefa = (e) =>{
    const botaoDeleta = e.target;

    const tarefaCompleta = botaoDeleta.parentElement;
    tarefaCompleta.remove();
    //método que remove um elemento
}
